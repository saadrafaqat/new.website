// questions_fast.js — FAST-NUCES Admission Test Question Bank
// Sections: Mathematics + Analytical Reasoning + English

const QUESTION_BANK_FAST = {
    engineering: {
        mathematics: [
            {
                id: "fast_m1",
                q: "If 2x + 3 = 11, then x =",
                a: ["3", "4", "5", "6"],
                c: 1,
                e: "2x = 11 - 3 = 8, so x = 4."
            },
            {
                id: "fast_m2",
                q: "A circle has area 154 cm². Its radius is approximately: (π ≈ 22/7)",
                a: ["5 cm", "7 cm", "9 cm", "11 cm"],
                c: 1,
                e: "A = πr² → 154 = (22/7)r² → r² = 49 → r = 7 cm."
            },
            {
                id: "fast_m3",
                q: "What is 15% of 240?",
                a: ["30", "36", "40", "34"],
                c: 1,
                e: "15% of 240 = (15/100) × 240 = 36."
            },
            {
                id: "fast_m4",
                q: "The next term in the sequence 2, 6, 12, 20, 30, ___ is:",
                a: ["38", "40", "42", "44"],
                c: 2,
                e: "Differences: 4, 6, 8, 10, 12 → next term = 30 + 12 = 42."
            },
            {
                id: "fast_m5",
                q: "If a train travels 360 km in 4 hours, its speed in m/s is:",
                a: ["25 m/s", "90 m/s", "100 m/s", "40 m/s"],
                c: 0,
                e: "Speed = 360/4 = 90 km/h = 90 × (1000/3600) = 25 m/s."
            },
            {
                id: "fast_m6",
                q: "Simplify: (x² - 4)/(x - 2)",
                a: ["x - 2", "x + 2", "x² + 2", "x² - 2"],
                c: 1,
                e: "(x²-4) = (x+2)(x-2). Divide by (x-2) → x+2."
            },
            {
                id: "fast_m7",
                q: "The average of 5, 10, 15, 20, 25 is:",
                a: ["12", "13", "15", "17"],
                c: 2,
                e: "Sum = 75, count = 5. Average = 75/5 = 15."
            },
            {
                id: "fast_m8",
                q: "If the angles of a triangle are in ratio 1:2:3, the largest angle is:",
                a: ["30°", "60°", "90°", "120°"],
                c: 2,
                e: "Ratio 1:2:3 → angles = 30°, 60°, 90° (sum = 180°). Largest = 90°."
            },
            {
                id: "fast_m9",
                q: "2³ × 2⁴ =",
                a: ["2⁷", "2¹²", "4⁷", "8⁴"],
                c: 0,
                e: "When multiplying same bases, add exponents: 2³ × 2⁴ = 2^(3+4) = 2⁷."
            },
            {
                id: "fast_m10",
                q: "If P(A) = 0.4 and P(B) = 0.5 and A, B are independent, then P(A and B) =",
                a: ["0.9", "0.2", "0.1", "0.45"],
                c: 1,
                e: "For independent events: P(A∩B) = P(A) × P(B) = 0.4 × 0.5 = 0.2."
            }
        ],
        analytical_reasoning: [
            {
                id: "fast_ar1",
                q: "If all Bloops are Razzles and all Razzles are Lazzles, then:",
                a: [
                    "All Bloops are definitely Lazzles",
                    "All Lazzles are Bloops",
                    "Some Lazzles are not Razzles",
                    "Bloops are not Lazzles"
                ],
                c: 0,
                e: "Bloops → Razzles → Lazzles. By transitivity, all Bloops are definitely Lazzles."
            },
            {
                id: "fast_ar2",
                q: "Find the odd one out: 2, 3, 5, 7, 9, 11, 13",
                a: ["9", "11", "2", "13"],
                c: 0,
                e: "9 = 3×3 is not prime. All others (2,3,5,7,11,13) are prime numbers."
            },
            {
                id: "fast_ar3",
                q: "Complete the analogy — Book : Library :: Painting : ___",
                a: ["Artist", "Canvas", "Museum", "Colour"],
                c: 2,
                e: "A book is kept in a library; a painting is kept/displayed in a museum."
            },
            {
                id: "fast_ar4",
                q: "If ROAD is coded as URDG, then SWAN is coded as:",
                a: ["VZDQ", "VXDQ", "VZDP", "XZDQ"],
                c: 0,
                e: "Each letter shifts +3: S→V, W→Z, A→D, N→Q → VZDQ."
            },
            {
                id: "fast_ar5",
                q: "A man walks 5 km North, then 3 km East. His straight-line distance from start is:",
                a: ["8 km", "√34 km", "√28 km", "4 km"],
                c: 1,
                e: "Distance = √(5² + 3²) = √(25+9) = √34 km."
            },
            {
                id: "fast_ar6",
                q: "In a row of 20 students, Ali is 8th from the left. What is his position from the right?",
                a: ["11th", "12th", "13th", "14th"],
                c: 2,
                e: "Position from right = Total + 1 - Position from left = 20 + 1 - 8 = 13th."
            },
            {
                id: "fast_ar7",
                q: "Which number comes next: 1, 4, 9, 16, 25, ___?",
                a: ["30", "36", "49", "32"],
                c: 1,
                e: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36."
            },
            {
                id: "fast_ar8",
                q: "Three friends A, B, C have ages. A is older than B. C is older than A. Who is youngest?",
                a: ["A", "B", "C", "Cannot determine"],
                c: 1,
                e: "C > A > B. So B is the youngest."
            },
            {
                id: "fast_ar9",
                q: "If the day before yesterday was Thursday, what day will be tomorrow?",
                a: ["Sunday", "Monday", "Saturday", "Tuesday"],
                c: 0,
                e: "Day before yesterday = Thursday → yesterday = Friday → today = Saturday → tomorrow = Sunday."
            },
            {
                id: "fast_ar10",
                q: "A is B's sister. B is C's brother. C is D's father. How is A related to D?",
                a: ["Aunt", "Mother", "Sister", "Grandmother"],
                c: 0,
                e: "A is B's sister → A is also related to C (C is B's brother, so A is C's sister). C is D's father, so A is D's aunt."
            }
        ],
        english: [
            {
                id: "fast_e1",
                q: "Choose the correct form: 'Neither of the answers ___ correct.'",
                a: ["are", "is", "were", "have been"],
                c: 1,
                e: "'Neither' is singular → uses singular verb 'is'."
            },
            {
                id: "fast_e2",
                q: "The word 'ubiquitous' means:",
                a: ["Rare", "Present everywhere", "Unique", "Dangerous"],
                c: 1,
                e: "Ubiquitous means present, appearing, or found everywhere."
            },
            {
                id: "fast_e3",
                q: "Identify the figure of speech: 'The world is a stage.'",
                a: ["Simile", "Personification", "Metaphor", "Hyperbole"],
                c: 2,
                e: "A direct comparison without 'like' or 'as' → Metaphor."
            },
            {
                id: "fast_e4",
                q: "The manager, along with his assistants, ___ working on the project.",
                a: ["are", "is", "were", "have been"],
                c: 1,
                e: "'Along with' does not change the subject. 'Manager' is singular → 'is'."
            },
            {
                id: "fast_e5",
                q: "Choose the best synonym for 'Pragmatic':",
                a: ["Idealistic", "Practical", "Theoretical", "Emotional"],
                c: 1,
                e: "Pragmatic means dealing with things sensibly and realistically — synonym is 'practical'."
            },
            {
                id: "fast_e6",
                q: "Passage: 'AI is transforming industries but raises concerns about job displacement.' Which is the main idea?",
                a: [
                    "AI is perfect",
                    "AI has no downsides",
                    "AI brings transformation with concerns",
                    "Jobs will not be affected"
                ],
                c: 2,
                e: "The passage presents both transformation and the concern of job displacement."
            },
            {
                id: "fast_e7",
                q: "Choose the word that does NOT belong: Happy, Joyful, Elated, Melancholy",
                a: ["Happy", "Joyful", "Melancholy", "Elated"],
                c: 2,
                e: "Happy, Joyful, and Elated are positive emotions; Melancholy means sadness — it does not belong."
            },
            {
                id: "fast_e8",
                q: "He has been working here ___ 2010.",
                a: ["for", "since", "from", "during"],
                c: 1,
                e: "'Since' is used with a specific point in time (2010). 'For' is used with a duration."
            },
            {
                id: "fast_e9",
                q: "The correct indirect speech of 'She said, \"I am tired\"' is:",
                a: [
                    "She said she is tired.",
                    "She said she was tired.",
                    "She told she is tired.",
                    "She said I am tired."
                ],
                c: 1,
                e: "In indirect speech, present 'am' changes to past 'was', and 'I' to 'she'."
            },
            {
                id: "fast_e10",
                q: "Which sentence is grammatically correct?",
                a: [
                    "I have seen him yesterday.",
                    "I saw him yesterday.",
                    "I had saw him yesterday.",
                    "I have saw him yesterday."
                ],
                c: 1,
                e: "'Yesterday' signals simple past tense → 'I saw him yesterday' is correct."
            }
        ]
    }
};
