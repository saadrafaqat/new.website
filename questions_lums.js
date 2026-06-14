// questions_lums.js — LUMS LCAT / SAT-style Aptitude Test Question Bank
// Sections: Mathematics (Quantitative Reasoning) + English (Critical Reading/Writing) + Analytical

const QUESTION_BANK_LUMS = {
    engineering: {
        mathematics: [
            {
                id: "lums_m1",
                q: "A store sells a jacket for Rs. 2400 after a 20% discount. What was the original price?",
                a: ["Rs. 2880", "Rs. 3000", "Rs. 2600", "Rs. 3200"],
                c: 1,
                e: "Let original = x. 80% of x = 2400 → x = 2400/0.8 = 3000."
            },
            {
                id: "lums_m2",
                q: "If x² - y² = 40 and x - y = 4, then x + y =",
                a: ["8", "10", "12", "6"],
                c: 1,
                e: "x² - y² = (x+y)(x-y) → 40 = (x+y)(4) → x+y = 10."
            },
            {
                id: "lums_m3",
                q: "A tank is 1/3 full. After adding 120 litres, it is 3/4 full. Total capacity =",
                a: ["240 L", "288 L", "300 L", "360 L"],
                c: 1,
                e: "3/4 - 1/3 = 9/12 - 4/12 = 5/12 of tank = 120 L → capacity = 120 × 12/5 = 288 L."
            },
            {
                id: "lums_m4",
                q: "Two numbers are in ratio 3:5 and their sum is 64. The larger number is:",
                a: ["24", "40", "36", "48"],
                c: 1,
                e: "Larger = 5/(3+5) × 64 = 5/8 × 64 = 40."
            },
            {
                id: "lums_m5",
                q: "If 3 workers complete a job in 12 days, how many days will 9 workers take?",
                a: ["4", "6", "3", "36"],
                c: 0,
                e: "Work = 3 × 12 = 36 man-days. With 9 workers: 36/9 = 4 days."
            },
            {
                id: "lums_m6",
                q: "In a class of 40, 25 play cricket and 20 play football. 10 play both. How many play neither?",
                a: ["3", "5", "7", "10"],
                c: 1,
                e: "Cricket or Football = 25+20-10 = 35. Neither = 40-35 = 5."
            },
            {
                id: "lums_m7",
                q: "Simple interest on Rs. 5000 at 8% per annum for 3 years =",
                a: ["Rs. 1000", "Rs. 1200", "Rs. 1500", "Rs. 2400"],
                c: 1,
                e: "SI = PRT/100 = 5000×8×3/100 = 1200."
            },
            {
                id: "lums_m8",
                q: "If the median of data 3, 5, 7, x, 11 (arranged in order) is 7, then x could be:",
                a: ["6", "8", "9", "All of these"],
                c: 3,
                e: "Median of 5 values is the 3rd value. If arranged in order and 3rd is 7, x can be 6, 8, or 9 (it won't displace 7 from 3rd position as long as 7 stays middle)."
            },
            {
                id: "lums_m9",
                q: "A car's value depreciates by 15% each year. If its current value is Rs. 200,000, its value after 2 years is:",
                a: ["Rs. 144,500", "Rs. 170,000", "Rs. 160,000", "Rs. 145,000"],
                c: 0,
                e: "After 2 yrs: 200000 × (0.85)² = 200000 × 0.7225 = 144,500."
            },
            {
                id: "lums_m10",
                q: "√(0.0081) =",
                a: ["0.9", "0.09", "0.009", "0.81"],
                c: 1,
                e: "√(0.0081) = √(81/10000) = 9/100 = 0.09."
            }
        ],
        english: [
            {
                id: "lums_e1",
                q: "Passage: 'The proliferation of social media has both democratised information and enabled the rapid spread of misinformation.' The word 'proliferation' most nearly means:",
                a: ["Decline", "Rapid increase", "Regulation", "Accuracy"],
                c: 1,
                e: "Proliferation = rapid spread or increase in the number of something."
            },
            {
                id: "lums_e2",
                q: "Choose the sentence that is most concise without losing meaning:",
                a: [
                    "Due to the fact that it was raining, the event was cancelled.",
                    "Because it was raining, the event was cancelled.",
                    "The event was cancelled on account of the fact that it was raining.",
                    "The event, due to the rain situation, was cancelled."
                ],
                c: 1,
                e: "'Because it was raining' is the most concise expression compared to wordy phrases like 'due to the fact that'."
            },
            {
                id: "lums_e3",
                q: "The author of a passage arguing 'economic growth must not come at the cost of environmental sustainability' would most likely support:",
                a: [
                    "Unregulated industrial expansion",
                    "Green energy investments",
                    "Eliminating all industry",
                    "Ignoring climate data"
                ],
                c: 1,
                e: "The author balances growth and environment — supporting green energy fits this balanced view."
            },
            {
                id: "lums_e4",
                q: "Which word correctly completes the sentence? 'The scientist's findings were ___ by three independent laboratories.'",
                a: ["corroborated", "contradicted", "exaggerated", "dismissed"],
                c: 0,
                e: "'Corroborated' means confirmed or supported by evidence — fitting for independent labs verifying findings."
            },
            {
                id: "lums_e5",
                q: "Identify the error in: 'The data clearly shows that the hypothesis were incorrect.'",
                a: ["data", "clearly shows", "were incorrect", "No error"],
                c: 2,
                e: "'Data' is treated as singular in modern academic writing → 'was incorrect' not 'were incorrect'."
            },
            {
                id: "lums_e6",
                q: "Which transition word best fills the blank? 'She trained every day; ___, she failed to qualify.'",
                a: ["therefore", "however", "moreover", "consequently"],
                c: 1,
                e: "The result (failing) is unexpected given the training — 'however' shows contrast."
            },
            {
                id: "lums_e7",
                q: "The word 'ambiguous' means:",
                a: [
                    "Clearly defined",
                    "Open to more than one interpretation",
                    "Completely wrong",
                    "Highly specific"
                ],
                c: 1,
                e: "Ambiguous = having more than one possible meaning; unclear."
            },
            {
                id: "lums_e8",
                q: "Choose the option that correctly uses a semicolon:",
                a: [
                    "I love coffee; but I avoid it at night.",
                    "I love coffee; I avoid it at night.",
                    "I love; coffee I avoid it at night.",
                    "I love coffee, I avoid; it at night."
                ],
                c: 1,
                e: "A semicolon connects two independent clauses without a conjunction. Option B does this correctly."
            },
            {
                id: "lums_e9",
                q: "A researcher claims that eating chocolate daily improves memory, citing only a study of 10 people over 2 days. This argument is weak because:",
                a: [
                    "Chocolate is expensive",
                    "The sample size and duration are insufficient for such a conclusion",
                    "Memory cannot be studied",
                    "The researcher is biased"
                ],
                c: 1,
                e: "A study with only 10 subjects over 2 days is far too small and short to support a broad conclusion about daily chocolate consumption."
            },
            {
                id: "lums_e10",
                q: "Choose the word that best completes the analogy: Gregarious : Sociable :: Taciturn : ___",
                a: ["Loud", "Reserved", "Happy", "Generous"],
                c: 1,
                e: "Gregarious (very social) is a synonym/close word to sociable. Taciturn (habitually silent) → Reserved."
            }
        ],
        analytical_reasoning: [
            {
                id: "lums_ar1",
                q: "A sequence: 3, 7, 13, 21, 31, ___. What is the next number?",
                a: ["41", "43", "45", "39"],
                c: 1,
                e: "Differences: 4, 6, 8, 10, 12 → next term = 31 + 12 = 43."
            },
            {
                id: "lums_ar2",
                q: "If RED = 27 (R=18, E=5, D=4, sum=27), then BLUE =",
                a: ["40", "38", "36", "42"],
                c: 1,
                e: "B=2, L=12, U=21, E=5 → sum = 2+12+21+5 = 40. Wait: let's verify RED: R=18, E=5, D=4 → 27. BLUE: B=2, L=12, U=21, E=5 → 40."
            },
            {
                id: "lums_ar3",
                q: "Five books (A,B,C,D,E) are on a shelf. A is to the left of B. C is between D and E. B is to the right of C. Which is the possible order?",
                a: ["D,C,E,A,B", "A,D,C,E,B", "A,B,D,C,E", "D,A,C,B,E"],
                c: 1,
                e: "A left of B, C between D and E (D,C,E or E,C,D), B right of C → A,D,C,E,B satisfies all."
            },
            {
                id: "lums_ar4",
                q: "If it takes 8 pumps 6 hours to fill a reservoir, how long will 12 pumps take?",
                a: ["4 hours", "3 hours", "5 hours", "9 hours"],
                c: 0,
                e: "Total pump-hours = 8×6 = 48. With 12 pumps: 48/12 = 4 hours."
            },
            {
                id: "lums_ar5",
                q: "In a family, A is the brother of B. B is the mother of C. C is the sister of D. How is A related to D?",
                a: ["Uncle", "Father", "Brother", "Grandfather"],
                c: 0,
                e: "A is B's brother. B is C and D's mother. So A is the maternal uncle of C and D."
            },
            {
                id: "lums_ar6",
                q: "Statement: All cats are animals. Some animals are pets. Conclusion: Some cats are pets. This conclusion is:",
                a: ["Definitely true", "Definitely false", "Possibly true", "Cannot be determined"],
                c: 3,
                e: "We know some animals are pets, but we cannot determine if cats specifically are included among those pets."
            },
            {
                id: "lums_ar7",
                q: "Which shape comes next in the pattern: Circle, Square, Triangle, Circle, Square, ___?",
                a: ["Circle", "Square", "Triangle", "Pentagon"],
                c: 2,
                e: "The pattern repeats in groups of 3: Circle, Square, Triangle. The next after Square is Triangle."
            },
            {
                id: "lums_ar8",
                q: "A clock shows 3:15. What angle does the minute hand make with the hour hand?",
                a: ["0°", "7.5°", "15°", "22.5°"],
                c: 1,
                e: "At 3:15, minute hand is at 90° (15×6). Hour hand: at 3:00 it's at 90°; in 15 min it moves 15×0.5=7.5° → hour hand at 97.5°. Angle = 97.5-90 = 7.5°."
            },
            {
                id: "lums_ar9",
                q: "Find the missing number: 2, 6, 12, 20, 30, 42, ___",
                a: ["52", "54", "56", "58"],
                c: 2,
                e: "Pattern: n(n+1) → 1×2, 2×3, 3×4, 4×5, 5×6, 6×7, 7×8 = 56."
            },
            {
                id: "lums_ar10",
                q: "If STAR is coded as VWDU, how is MOON coded?",
                a: ["PRQR", "PRRQ", "NLLM", "PRRS"],
                c: 0,
                e: "Each letter +3: M→P, O→R, O→R, N→Q → PRRQ. Actually S+3=V, T+3=W, A+3=D, R+3=U ✓. M+3=P, O+3=R, O+3=R, N+3=Q → PRRQ."
            }
        ]
    }
};
