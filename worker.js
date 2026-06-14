// Cloudflare Worker Backend for UniTest.pk
// Deploy this to Cloudflare Workers and update API_BASE in index.html

// KV Namespace Bindings:
// - UNITEST_USERS (for user data)
// - UNITEST_PAYMENTS (for pending payments)

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const ADMIN_KEY = 'admin123'; // Change this!

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS });
  }

  const url = new URL(request.url);
  const path = url.pathname;

  try {
    // Auth Routes
    if (path === '/api/auth/register') {
      return await handleRegister(request);
    }
    if (path === '/api/auth/login') {
      return await handleLogin(request);
    }
    
    // Payment Routes
    if (path === '/api/payment/submit') {
      return await handlePaymentSubmit(request);
    }
    
    // Admin Routes (Protected)
    if (path === '/api/admin/payments') {
      return await getPendingPayments(request);
    }
    if (path === '/api/admin/approve') {
      return await approvePayment(request);
    }
    if (path === '/api/admin/users') {
      return await getAllUsers(request);
    }
    if (path === '/api/admin/add-user') {
      return await addUser(request);
    }
    if (path === '/api/admin/remove-user') {
      return await removeUser(request);
    }

    return jsonResponse({ error: 'Not found' }, 404);
  } catch (error) {
    return jsonResponse({ error: error.message }, 500);
  }
}

// Helper Functions
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

function checkAdmin(request) {
  const auth = request.headers.get('Authorization');
  return auth === `Bearer ${ADMIN_KEY}`;
}

// Auth Handlers
async function handleRegister(request) {
  const { email, password } = await request.json();
  
  if (!email || !password) {
    return jsonResponse({ success: false, message: 'Email and password required' }, 400);
  }
  
  const existing = await UNITEST_USERS.get(email);
  if (existing) {
    return jsonResponse({ success: false, message: 'User already exists' }, 400);
  }
  
  const user = {
    email,
    password, // In production, hash this with bcrypt!
    isPremium: false,
    testsTaken: 0,
    createdAt: new Date().toISOString(),
  };
  
  await UNITEST_USERS.put(email, JSON.stringify(user));
  return jsonResponse({ success: true, user: { email, isPremium: false, testsTaken: 0 } });
}

async function handleLogin(request) {
  const { email, password } = await request.json();
  
  const userData = await UNITEST_USERS.get(email);
  if (!userData) {
    return jsonResponse({ success: false, message: 'User not found' }, 404);
  }
  
  const user = JSON.parse(userData);
  if (user.password !== password) {
    return jsonResponse({ success: false, message: 'Invalid password' }, 401);
  }
  
  return jsonResponse({
    success: true,
    user: {
      email: user.email,
      isPremium: user.isPremium,
      testsTaken: user.testsTaken,
    },
  });
}

// Payment Handlers
async function handlePaymentSubmit(request) {
  const data = await request.json();
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  
  const payment = {
    id,
    ...data,
    status: 'pending',
    submittedAt: new Date().toISOString(),
  };
  
  await UNITEST_PAYMENTS.put(id, JSON.stringify(payment));
  
  // Optionally send email notification to admin here using SendGrid or similar
  
  return jsonResponse({ success: true, message: 'Payment submitted' });
}

// Admin Handlers
async function getPendingPayments(request) {
  if (!checkAdmin(request)) return jsonResponse({ error: 'Unauthorized' }, 401);
  
  const payments = [];
  const list = await UNITEST_PAYMENTS.list();
  
  for (const key of list.keys) {
    const payment = await UNITEST_PAYMENTS.get(key.name);
    if (payment) payments.push(JSON.parse(payment));
  }
  
  return jsonResponse({ payments });
}

async function approvePayment(request) {
  if (!checkAdmin(request)) return jsonResponse({ error: 'Unauthorized' }, 401);
  
  const { id, email } = await request.json();
  
  // Update payment status
  const paymentData = await UNITEST_PAYMENTS.get(id);
  if (paymentData) {
    const payment = JSON.parse(paymentData);
    payment.status = 'approved';
    await UNITEST_PAYMENTS.put(id, JSON.stringify(payment));
  }
  
  // Upgrade user to premium
  const userData = await UNITEST_USERS.get(email);
  if (userData) {
    const user = JSON.parse(userData);
    user.isPremium = true;
    await UNITEST_USERS.put(email, JSON.stringify(user));
  }
  
  return jsonResponse({ success: true, message: 'Payment approved and user upgraded' });
}

async function getAllUsers(request) {
  if (!checkAdmin(request)) return jsonResponse({ error: 'Unauthorized' }, 401);
  
  const users = [];
  const list = await UNITEST_USERS.list();
  
  for (const key of list.keys) {
    const user = await UNITEST_USERS.get(key.name);
    if (user) {
      const u = JSON.parse(user);
      users.push({
        email: u.email,
        isPremium: u.isPremium,
        testsTaken: u.testsTaken,
        createdAt: u.createdAt,
      });
    }
  }
  
  return jsonResponse({ users });
}

async function addUser(request) {
  if (!checkAdmin(request)) return jsonResponse({ error: 'Unauthorized' }, 401);
  
  const { email, password, isPremium = true } = await request.json();
  
  const user = {
    email,
    password,
    isPremium,
    testsTaken: 0,
    createdAt: new Date().toISOString(),
    addedBy: 'admin',
  };
  
  await UNITEST_USERS.put(email, JSON.stringify(user));
  return jsonResponse({ success: true, message: 'User added' });
}

async function removeUser(request) {
  if (!checkAdmin(request)) return jsonResponse({ error: 'Unauthorized' }, 401);
  
  const { email } = await request.json();
  await UNITEST_USERS.delete(email);
  return jsonResponse({ success: true, message: 'User removed' });
}
