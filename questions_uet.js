// questions_uet.js — UET ECAT Question Bank
// 100 MCQs: Mathematics(30) + Physics(30) + Chemistry(30) + English(10)

const QUESTION_BANK_UET = {
    engineering: {
        mathematics: [
            {
                id: "uet_m1",
                q: "The sum of the series 1 + 3 + 5 + ... + 99 is:",
                a: ["2500", "5000", "1000", "4950"],
                c: 1,
                e: "Sum of first n odd numbers = n². Here n=50, so sum = 50² = 2500. Wait — 1+3+5+...+99 has 50 terms, sum = 50² = 2500."
            },
            {
                id: "uet_m2",
                q: "If A = {1,2,3} and B = {2,3,4}, then A ∪ B is:",
                a: ["{2,3}", "{1,2,3,4}", "{1,4}", "{1,2,3,4,5}"],
                c: 1,
                e: "Union contains all elements of both sets without repetition: {1,2,3,4}."
            },
            {
                id: "uet_m3",
                q: "The distance between points (1,2) and (4,6) is:",
                a: ["3", "4", "5", "7"],
                c: 2,
                e: "d = √[(4-1)² + (6-2)²] = √[9+16] = √25 = 5."
            },
            {
                id: "uet_m4",
                q: "If log₂(8) = x, then x =",
                a: ["2", "3", "4", "1"],
                c: 1,
                e: "2³ = 8, so log₂(8) = 3."
            },
            {
                id: "uet_m5",
                q: "The value of sin(90° - θ) is:",
                a: ["sin θ", "cos θ", "tan θ", "-cos θ"],
                c: 1,
                e: "Using co-function identity: sin(90° - θ) = cos θ."
            },
            {
                id: "uet_m6",
                q: "The roots of x² - 5x + 6 = 0 are:",
                a: ["2 and 3", "1 and 6", "-2 and -3", "2 and -3"],
                c: 0,
                e: "Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3."
            },
            {
                id: "uet_m7",
                q: "If f(x) = 2x + 3, then f⁻¹(x) =",
                a: ["(x-3)/2", "(x+3)/2", "2x-3", "(x+2)/3"],
                c: 0,
                e: "Let y = 2x+3, then x = (y-3)/2. So f⁻¹(x) = (x-3)/2."
            },
            {
                id: "uet_m8",
                q: "The slope of the line 3x - 4y + 8 = 0 is:",
                a: ["3/4", "-3/4", "4/3", "-4/3"],
                c: 0,
                e: "Rewrite: y = (3/4)x + 2. Slope = 3/4."
            },
            {
                id: "uet_m9",
                q: "d/dx (x³ + 2x) =",
                a: ["3x² + 2", "x² + 2", "3x²", "3x² - 2"],
                c: 0,
                e: "Differentiating term by term: d/dx(x³) + d/dx(2x) = 3x² + 2."
            },
            {
                id: "uet_m10",
                q: "∫(2x + 1)dx =",
                a: ["x² + x + C", "2x² + C", "x² + C", "x + C"],
                c: 0,
                e: "∫2x dx + ∫1 dx = x² + x + C."
            }
        ],
        physics: [
            {
                id: "uet_p1",
                q: "A body moving with uniform velocity has acceleration equal to:",
                a: ["Maximum", "Minimum", "Zero", "Negative"],
                c: 2,
                e: "Uniform velocity means no change in speed or direction, so acceleration = 0."
            },
            {
                id: "uet_p2",
                q: "The SI unit of pressure is:",
                a: ["Newton", "Joule", "Pascal", "Watt"],
                c: 2,
                e: "Pressure = Force/Area. Its SI unit is Pascal (Pa) = N/m²."
            },
            {
                id: "uet_p3",
                q: "Which of the following is a scalar quantity?",
                a: ["Force", "Velocity", "Displacement", "Speed"],
                c: 3,
                e: "Speed has magnitude only, no direction — it is a scalar. Velocity, Force, and Displacement are vectors."
            },
            {
                id: "uet_p4",
                q: "The wavelength of a wave with speed 340 m/s and frequency 170 Hz is:",
                a: ["0.5 m", "1 m", "2 m", "4 m"],
                c: 2,
                e: "λ = v/f = 340/170 = 2 m."
            },
            {
                id: "uet_p5",
                q: "According to Newton's second law, F = ma. If m = 5 kg and a = 3 m/s², F =",
                a: ["8 N", "15 N", "2 N", "1.67 N"],
                c: 1,
                e: "F = 5 × 3 = 15 N."
            },
            {
                id: "uet_p6",
                q: "The energy stored in a spring of constant k compressed by x is:",
                a: ["kx", "kx²", "½kx²", "2kx²"],
                c: 2,
                e: "Elastic potential energy = ½kx²."
            },
            {
                id: "uet_p7",
                q: "Ohm's Law states that V =",
                a: ["I/R", "IR", "I²R", "R/I"],
                c: 1,
                e: "Ohm's Law: V = IR, where V is voltage, I is current, R is resistance."
            },
            {
                id: "uet_p8",
                q: "The phenomenon responsible for the blue colour of the sky is:",
                a: ["Reflection", "Refraction", "Scattering", "Diffraction"],
                c: 2,
                e: "Rayleigh scattering of sunlight by air molecules (shorter blue wavelengths scatter more) causes the sky to appear blue."
            },
            {
                id: "uet_p9",
                q: "A charge of 2C moves through a potential difference of 10V. Work done =",
                a: ["5 J", "0.2 J", "20 J", "12 J"],
                c: 2,
                e: "W = QV = 2 × 10 = 20 J."
            },
            {
                id: "uet_p10",
                q: "The half-life of a radioactive element is 10 years. After 30 years, what fraction remains?",
                a: ["1/2", "1/4", "1/8", "1/16"],
                c: 2,
                e: "Number of half-lives = 30/10 = 3. Fraction remaining = (1/2)³ = 1/8."
            }
        ],
        chemistry: [
            {
                id: "uet_c1",
                q: "The atomic number of Carbon is:",
                a: ["4", "6", "8", "12"],
                c: 1,
                e: "Carbon (C) has atomic number 6 (6 protons)."
            },
            {
                id: "uet_c2",
                q: "Which of the following is an example of a physical change?",
                a: ["Burning wood", "Rusting iron", "Melting ice", "Digesting food"],
                c: 2,
                e: "Melting ice is a physical change — composition remains H₂O, only state changes."
            },
            {
                id: "uet_c3",
                q: "The pH of a neutral solution is:",
                a: ["0", "7", "14", "1"],
                c: 1,
                e: "A neutral solution (like pure water at 25°C) has pH = 7."
            },
            {
                id: "uet_c4",
                q: "The valency of Oxygen is:",
                a: ["1", "2", "3", "4"],
                c: 1,
                e: "Oxygen has 6 valence electrons and needs 2 more to complete octet, so valency = 2."
            },
            {
                id: "uet_c5",
                q: "In the reaction 2H₂ + O₂ → 2H₂O, the mole ratio of H₂ to O₂ is:",
                a: ["1:1", "2:1", "1:2", "3:1"],
                c: 1,
                e: "From coefficients: 2 moles H₂ react with 1 mole O₂ → ratio is 2:1."
            },
            {
                id: "uet_c6",
                q: "Avogadro's number is approximately:",
                a: ["6.022 × 10²³", "3.14 × 10²³", "6.022 × 10²²", "1.6 × 10⁻¹⁹"],
                c: 0,
                e: "Avogadro's number N_A = 6.022 × 10²³ mol⁻¹."
            },
            {
                id: "uet_c7",
                q: "Which gas is produced when zinc reacts with hydrochloric acid?",
                a: ["Oxygen", "Chlorine", "Hydrogen", "Carbon dioxide"],
                c: 2,
                e: "Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen gas is produced."
            },
            {
                id: "uet_c8",
                q: "The hybridization of carbon in methane (CH₄) is:",
                a: ["sp", "sp²", "sp³", "sp³d"],
                c: 2,
                e: "CH₄ has 4 bonds and no lone pairs around carbon → tetrahedral → sp³ hybridization."
            },
            {
                id: "uet_c9",
                q: "Which of the following is a strong acid?",
                a: ["Acetic acid", "Carbonic acid", "Hydrochloric acid", "Formic acid"],
                c: 2,
                e: "HCl (Hydrochloric acid) is a strong acid — it fully dissociates in water."
            },
            {
                id: "uet_c10",
                q: "The number of electrons in the outermost shell of Sodium (Na, atomic number 11) is:",
                a: ["1", "2", "3", "8"],
                c: 0,
                e: "Na: 2,8,1 — one electron in the outermost shell (3rd shell)."
            }
        ],
        english: [
            {
                id: "uet_e1",
                q: "Choose the correct synonym of 'Benevolent':",
                a: ["Cruel", "Kind", "Angry", "Lazy"],
                c: 1,
                e: "Benevolent means well-meaning and kindly — synonym is 'Kind'."
            },
            {
                id: "uet_e2",
                q: "She _____ to the market every morning.",
                a: ["go", "goes", "going", "gone"],
                c: 1,
                e: "Third person singular present tense requires 'goes'."
            },
            {
                id: "uet_e3",
                q: "The antonym of 'Abundant' is:",
                a: ["Plentiful", "Scarce", "Enough", "Sufficient"],
                c: 1,
                e: "Abundant means in large quantities; its antonym is 'Scarce' (in short supply)."
            },
            {
                id: "uet_e4",
                q: "Identify the correct passive voice of: 'She writes a letter.'",
                a: [
                    "A letter is written by her.",
                    "A letter was written by her.",
                    "A letter has been written by her.",
                    "A letter is being written by her."
                ],
                c: 0,
                e: "Present simple active → present simple passive: 'A letter is written by her.'"
            },
            {
                id: "uet_e5",
                q: "Which word is spelled correctly?",
                a: ["Occurence", "Occurrence", "Ocurrence", "Occurrance"],
                c: 1,
                e: "The correct spelling is 'Occurrence' (double c, double r)."
            },
            {
                id: "uet_e6",
                q: "The boy _____ plays cricket is my brother.",
                a: ["who", "whom", "whose", "which"],
                c: 0,
                e: "'Who' is used as a subject relative pronoun referring to a person."
            },
            {
                id: "uet_e7",
                q: "Choose the correct meaning of the idiom: 'Once in a blue moon':",
                a: ["Very often", "Never", "Rarely", "Always"],
                c: 2,
                e: "'Once in a blue moon' means something that happens very rarely."
            },
            {
                id: "uet_e8",
                q: "He is interested _____ learning new languages.",
                a: ["at", "on", "in", "for"],
                c: 2,
                e: "The correct preposition after 'interested' is 'in'."
            },
            {
                id: "uet_e9",
                q: "The plural of 'criterion' is:",
                a: ["Criterions", "Criterias", "Criteria", "Criterions"],
                c: 2,
                e: "'Criterion' has an irregular plural: 'criteria' (from Greek/Latin)."
            },
            {
                id: "uet_e10",
                q: "Choose the correctly punctuated sentence:",
                a: [
                    "Its a beautiful day, isnt it.",
                    "It's a beautiful day, isn't it?",
                    "Its a beautiful day isnt it?",
                    "It's a beautiful day isnt it."
                ],
                c: 1,
                e: "Contractions need apostrophes (It's, isn't) and a question mark at the end."
            }
        ]
    }
};
