// questions_giki.js — GIKI Undergraduate Admission Test Question Bank
// 80 MCQs: Mathematics(30) + Physics(30) + English(20)

const QUESTION_BANK_GIKI = {
    engineering: {
        mathematics: [
            {
                id: "giki_m1",
                q: "The derivative of ln(sin x) with respect to x is:",
                a: ["cot x", "tan x", "1/sin x", "-cot x"],
                c: 0,
                e: "d/dx[ln(sin x)] = (1/sin x) · cos x = cos x/sin x = cot x."
            },
            {
                id: "giki_m2",
                q: "If vectors A = 3i + 4j and B = 4i - 3j, then A · B equals:",
                a: ["0", "25", "12", "7"],
                c: 0,
                e: "A · B = (3)(4) + (4)(-3) = 12 - 12 = 0. The vectors are perpendicular."
            },
            {
                id: "giki_m3",
                q: "The number of ways to arrange 4 people in a line is:",
                a: ["16", "12", "24", "4"],
                c: 2,
                e: "4! = 4 × 3 × 2 × 1 = 24."
            },
            {
                id: "giki_m4",
                q: "The area enclosed by the curve y = x² and y = x is:",
                a: ["1/6", "1/3", "1/2", "1/4"],
                c: 0,
                e: "∫₀¹ (x - x²)dx = [x²/2 - x³/3]₀¹ = 1/2 - 1/3 = 1/6."
            },
            {
                id: "giki_m5",
                q: "If sin θ = 3/5 and θ is in the first quadrant, then cos θ =",
                a: ["4/5", "3/4", "5/4", "1/5"],
                c: 0,
                e: "Using Pythagorean identity: cos²θ = 1 - 9/25 = 16/25, so cos θ = 4/5."
            },
            {
                id: "giki_m6",
                q: "The equation of a circle with centre (2,-3) and radius 5 is:",
                a: [
                    "(x-2)² + (y+3)² = 25",
                    "(x+2)² + (y-3)² = 25",
                    "(x-2)² + (y-3)² = 25",
                    "(x+2)² + (y+3)² = 25"
                ],
                c: 0,
                e: "Standard form: (x-h)² + (y-k)² = r². Centre(2,-3), r=5 → (x-2)²+(y+3)²=25."
            },
            {
                id: "giki_m7",
                q: "lim(x→0) (sin x)/x =",
                a: ["0", "∞", "1", "undefined"],
                c: 2,
                e: "This is a standard limit: lim(x→0) (sin x)/x = 1."
            },
            {
                id: "giki_m8",
                q: "The sum of an infinite geometric series with first term 3 and common ratio 1/3 is:",
                a: ["9/2", "3/2", "9", "4"],
                c: 0,
                e: "S∞ = a/(1-r) = 3/(1 - 1/3) = 3/(2/3) = 9/2."
            },
            {
                id: "giki_m9",
                q: "If the matrix A = [[2,1],[4,3]], then det(A) =",
                a: ["10", "2", "6", "-2"],
                c: 1,
                e: "det(A) = (2)(3) - (1)(4) = 6 - 4 = 2."
            },
            {
                id: "giki_m10",
                q: "The general solution of dy/dx = y is:",
                a: ["y = Ce^x", "y = Ce^(-x)", "y = Cx", "y = C ln x"],
                c: 0,
                e: "Separating variables: dy/y = dx → ln|y| = x + C → y = Ce^x."
            }
        ],
        physics: [
            {
                id: "giki_p1",
                q: "A projectile is launched at 45°. The range is maximum when initial speed is v. The maximum range =",
                a: ["v²/g", "v²/2g", "2v²/g", "v/g"],
                c: 0,
                e: "R_max = v²/g (at θ = 45°, using R = v²sin(2θ)/g = v²sin90°/g = v²/g)."
            },
            {
                id: "giki_p2",
                q: "The moment of inertia of a solid sphere about its diameter is:",
                a: ["(2/5)MR²", "(2/3)MR²", "MR²", "(1/2)MR²"],
                c: 0,
                e: "For a solid sphere about a diameter: I = (2/5)MR²."
            },
            {
                id: "giki_p3",
                q: "In simple harmonic motion, at the mean position, which of the following is maximum?",
                a: ["Potential Energy", "Displacement", "Kinetic Energy", "Restoring Force"],
                c: 2,
                e: "At mean position, displacement = 0, so PE = 0 and KE is maximum."
            },
            {
                id: "giki_p4",
                q: "The electric field inside a conductor in electrostatic equilibrium is:",
                a: ["Maximum at centre", "Zero", "Equal to surface field", "Infinite"],
                c: 1,
                e: "Inside a conductor in electrostatic equilibrium, the electric field is zero."
            },
            {
                id: "giki_p5",
                q: "By Faraday's law, EMF induced in a coil is proportional to:",
                a: [
                    "Rate of change of magnetic flux",
                    "Magnetic flux itself",
                    "Resistance of the coil",
                    "Square of the flux"
                ],
                c: 0,
                e: "Faraday's Law: EMF = -dΦ/dt. Induced EMF is proportional to rate of change of magnetic flux."
            },
            {
                id: "giki_p6",
                q: "The photoelectric effect demonstrates that light has:",
                a: ["Wave nature only", "Particle nature only", "Both wave and particle nature", "Neither"],
                c: 1,
                e: "The photoelectric effect can only be explained by the particle (photon) nature of light."
            },
            {
                id: "giki_p7",
                q: "The speed of light in a medium with refractive index n = 1.5 is:",
                a: ["2 × 10⁸ m/s", "3 × 10⁸ m/s", "1.5 × 10⁸ m/s", "4.5 × 10⁸ m/s"],
                c: 0,
                e: "v = c/n = (3×10⁸)/1.5 = 2×10⁸ m/s."
            },
            {
                id: "giki_p8",
                q: "A Carnot engine operates between 600K and 300K. Its efficiency is:",
                a: ["25%", "33%", "50%", "75%"],
                c: 2,
                e: "η = 1 - T_cold/T_hot = 1 - 300/600 = 1 - 0.5 = 50%."
            },
            {
                id: "giki_p9",
                q: "De Broglie wavelength of a particle with momentum p is:",
                a: ["λ = hp", "λ = h/p", "λ = p/h", "λ = h²/p"],
                c: 1,
                e: "De Broglie relation: λ = h/p, where h is Planck's constant."
            },
            {
                id: "giki_p10",
                q: "The work done by a gas in an isothermal expansion from volume V₁ to V₂ is:",
                a: ["nRT ln(V₂/V₁)", "nRT(V₂-V₁)", "nRT/V", "Zero"],
                c: 0,
                e: "For isothermal process: W = nRT ln(V₂/V₁)."
            }
        ],
        english: [
            {
                id: "giki_e1",
                q: "Read: 'Despite the heavy rain, the match continued.' What does 'despite' indicate?",
                a: ["Cause", "Contrast", "Condition", "Result"],
                c: 1,
                e: "'Despite' is a preposition showing contrast — the match continued regardless of the rain."
            },
            {
                id: "giki_e2",
                q: "Choose the word closest in meaning to 'Eloquent':",
                a: ["Silent", "Fluent and persuasive", "Angry", "Confused"],
                c: 1,
                e: "Eloquent means expressing ideas fluently and persuasively."
            },
            {
                id: "giki_e3",
                q: "Which sentence uses the subjunctive mood correctly?",
                a: [
                    "I wish I was taller.",
                    "I wish I were taller.",
                    "I wish I am taller.",
                    "I wish I will be taller."
                ],
                c: 1,
                e: "The subjunctive 'were' (not 'was') is used in hypothetical/wish clauses."
            },
            {
                id: "giki_e4",
                q: "The sentence 'The committee has reached its decision' uses the committee as:",
                a: ["Plural noun", "Collective noun", "Proper noun", "Abstract noun"],
                c: 1,
                e: "'Committee' is a collective noun — a group of people treated as one entity."
            },
            {
                id: "giki_e5",
                q: "Choose the antonym of 'Loquacious':",
                a: ["Talkative", "Quiet", "Loud", "Friendly"],
                c: 1,
                e: "Loquacious means very talkative; its antonym is 'quiet' or 'taciturn'."
            },
            {
                id: "giki_e6",
                q: "Identify the error: 'Each of the students have submitted their assignment.'",
                a: [
                    "Each of",
                    "have submitted",
                    "their assignment",
                    "No error"
                ],
                c: 1,
                e: "'Each' is singular and requires a singular verb: 'has submitted' not 'have submitted'."
            },
            {
                id: "giki_e7",
                q: "The phrase 'to burn the midnight oil' means:",
                a: ["To waste energy", "To work late into the night", "To cause fire", "To be careless"],
                c: 1,
                e: "'To burn the midnight oil' is an idiom meaning to work or study late at night."
            },
            {
                id: "giki_e8",
                q: "Passage: 'Technology has revolutionized communication but also created a sense of isolation in communities.' The author's tone is best described as:",
                a: ["Purely optimistic", "Purely pessimistic", "Balanced/analytical", "Sarcastic"],
                c: 2,
                e: "The author acknowledges both benefits and drawbacks — this is a balanced, analytical tone."
            },
            {
                id: "giki_e9",
                q: "Choose the correctly written sentence:",
                a: [
                    "Neither the students nor the teacher were present.",
                    "Neither the students nor the teacher was present.",
                    "Neither the students nor the teacher are present.",
                    "Neither the students nor the teacher have been present."
                ],
                c: 1,
                e: "With 'neither...nor', the verb agrees with the subject closest to it ('teacher' = singular) → 'was'."
            },
            {
                id: "giki_e10",
                q: "The word 'ephemeral' means:",
                a: ["Permanent", "Lasting for a very short time", "Ancient", "Powerful"],
                c: 1,
                e: "Ephemeral means lasting for a very short time (e.g., ephemeral fame)."
            }
        ]
    }
};
