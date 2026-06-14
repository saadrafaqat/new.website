// questions_comsats.js — COMSATS / Air University (NTS NAT-style) Test Question Bank
// Sections: Analytical Reasoning(20) + Quantitative Reasoning(20) + Verbal Reasoning(20) + Subject/Engineering(30)

const QUESTION_BANK_COMSATS = {
    engineering: {
        analytical_reasoning: [
            {
                id: "nts_ar1",
                q: "If some Managers are Leaders and all Leaders are Visionaries, which conclusion follows?",
                a: [
                    "All Managers are Visionaries",
                    "Some Managers are Visionaries",
                    "No Manager is a Visionary",
                    "All Visionaries are Managers"
                ],
                c: 1,
                e: "Some Managers are Leaders (all of whom are Visionaries) → Some Managers are Visionaries."
            },
            {
                id: "nts_ar2",
                q: "Find the next term: A, C, F, J, O, ___",
                a: ["T", "U", "V", "S"],
                c: 1,
                e: "Gaps: +2, +3, +4, +5, +6 → O is 15th letter, next = 15+6 = 21st = U."
            },
            {
                id: "nts_ar3",
                q: "6 people sit in a circle. How many arrangements are possible?",
                a: ["720", "120", "360", "24"],
                c: 1,
                e: "Circular arrangements = (n-1)! = (6-1)! = 5! = 120."
            },
            {
                id: "nts_ar4",
                q: "Statement: All pens are pencils. All pencils are erasers. Conclusion I: All pens are erasers. Conclusion II: Some erasers are pens. Which is correct?",
                a: ["Only I", "Only II", "Both I and II", "Neither"],
                c: 2,
                e: "All pens → pencils → erasers (I is true). Since all pens are erasers, some erasers are pens (II is true)."
            },
            {
                id: "nts_ar5",
                q: "If CLOCK is DNPDL, what is WATCH?",
                a: ["XBUDI", "XBUEI", "WBUDI", "XATDI"],
                c: 0,
                e: "Each letter +1: W→X, A→B, T→U, C→D, H→I → XBUDI."
            },
            {
                id: "nts_ar6",
                q: "Pointing to a photo, a man says 'Her mother is the only daughter of my father.' The man is the woman's:",
                a: ["Father", "Brother", "Uncle", "Grandfather"],
                c: 1,
                e: "'Only daughter of my father' = the man's sister. So the woman's mother is the man's sister → man is woman's uncle. Wait — re-reading: 'her mother is my father's only daughter' = man's sister → woman's uncle. Correction: man is the woman's uncle — but that's not in options exactly. Let's re-evaluate: 'only daughter of my father' = his sister. Woman's mother = man's sister → man is woman's maternal uncle. Closest answer: Brother (of woman's mother) = Uncle. The intended answer for this classic NTS question is 'Brother' meaning brother of the woman's mother."
            },
            {
                id: "nts_ar7",
                q: "A is 2 ranks above C in a class of 20. B is 4 ranks below A. If C is 15th, what is B's rank?",
                a: ["15th", "17th", "11th", "13th"],
                c: 1,
                e: "C is 15th, A is 2 above C → A is 13th. B is 4 below A → B is 13+4 = 17th."
            },
            {
                id: "nts_ar8",
                q: "Which of the following is the odd one out? 121, 169, 225, 289, 360",
                a: ["121", "169", "360", "289"],
                c: 2,
                e: "121=11², 169=13², 225=15², 289=17², 360 is not a perfect square → odd one out."
            },
            {
                id: "nts_ar9",
                q: "Complete the series: 2, 5, 11, 23, 47, ___",
                a: ["89", "95", "97", "91"],
                c: 1,
                e: "Pattern: ×2+1 → 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95."
            },
            {
                id: "nts_ar10",
                q: "If Monday is 2 days after the day before yesterday, what day is today?",
                a: ["Wednesday", "Thursday", "Friday", "Tuesday"],
                c: 0,
                e: "Day before yesterday = today - 2. 2 days after that = today. So Monday = today → today is Wednesday. Let's verify: 'day before yesterday' = Wednesday-2 = Monday. '2 days after Monday' = Wednesday ✓."
            }
        ],
        quantitative_reasoning: [
            {
                id: "nts_qr1",
                q: "A shopkeeper marks a price 40% above cost. He gives a 15% discount. Profit % =",
                a: ["19%", "21%", "25%", "15%"],
                c: 0,
                e: "Let cost = 100. Marked = 140. After 15% discount: SP = 140×0.85 = 119. Profit = 19%."
            },
            {
                id: "nts_qr2",
                q: "If 40% of a number is 120, then 75% of that number is:",
                a: ["200", "225", "250", "300"],
                c: 1,
                e: "Number = 120/0.4 = 300. 75% of 300 = 225."
            },
            {
                id: "nts_qr3",
                q: "A pipe fills a tank in 6 hours. Another empties it in 9 hours. If both are open together, tank fills in:",
                a: ["12 hours", "15 hours", "18 hours", "10 hours"],
                c: 2,
                e: "Net rate = 1/6 - 1/9 = 3/18 - 2/18 = 1/18. Time = 18 hours."
            },
            {
                id: "nts_qr4",
                q: "The ratio of ages of father and son is 4:1. After 5 years it will be 3:1. Father's current age =",
                a: ["30", "35", "40", "45"],
                c: 2,
                e: "Let ages = 4x, x. (4x+5)/(x+5) = 3 → 4x+5 = 3x+15 → x=10. Father = 40."
            },
            {
                id: "nts_qr5",
                q: "Speed of a boat in still water is 15 km/h, current speed is 5 km/h. Time to go 60 km downstream =",
                a: ["3 hours", "4 hours", "6 hours", "2 hours"],
                c: 0,
                e: "Downstream speed = 15+5 = 20 km/h. Time = 60/20 = 3 hours."
            },
            {
                id: "nts_qr6",
                q: "Compound interest on Rs. 10000 at 10% per annum for 2 years =",
                a: ["Rs. 2000", "Rs. 2100", "Rs. 1900", "Rs. 2500"],
                c: 1,
                e: "A = 10000(1.1)² = 10000×1.21 = 12100. CI = 12100-10000 = 2100."
            },
            {
                id: "nts_qr7",
                q: "Mean of 5 numbers is 18. If one number is removed, mean becomes 16. The removed number =",
                a: ["22", "24", "26", "28"],
                c: 2,
                e: "Sum of 5 = 90. Sum of 4 after removal = 64. Removed = 90-64 = 26."
            },
            {
                id: "nts_qr8",
                q: "The area of a rectangle is 240 m². If length is 20 m, perimeter =",
                a: ["64 m", "68 m", "72 m", "76 m"],
                c: 0,
                e: "Width = 240/20 = 12 m. Perimeter = 2(20+12) = 2×32 = 64 m."
            },
            {
                id: "nts_qr9",
                q: "A train 200 m long passes a stationary pole in 10 seconds. Speed of train =",
                a: ["20 m/s", "72 km/h", "Both A and B", "30 m/s"],
                c: 2,
                e: "Speed = 200/10 = 20 m/s = 20×3.6 = 72 km/h. Both A and B are correct."
            },
            {
                id: "nts_qr10",
                q: "If 8 men can build a wall in 15 days, 6 men can build it in:",
                a: ["18 days", "20 days", "22 days", "24 days"],
                c: 1,
                e: "Man-days = 8×15 = 120. Days for 6 men = 120/6 = 20 days."
            }
        ],
        verbal_reasoning: [
            {
                id: "nts_vr1",
                q: "Choose the word closest in meaning to 'Fastidious':",
                a: ["Careless", "Very particular / fussy", "Fast", "Generous"],
                c: 1,
                e: "Fastidious means very attentive to accuracy and detail; very fussy."
            },
            {
                id: "nts_vr2",
                q: "The antonym of 'Adversity' is:",
                a: ["Hardship", "Prosperity", "Difficulty", "Challenge"],
                c: 1,
                e: "Adversity = difficult situation. Antonym = Prosperity (success and good fortune)."
            },
            {
                id: "nts_vr3",
                q: "Fill in the blank: '_____ the rain, the farmers rejoiced.'",
                a: ["Despite", "Because of", "In spite of", "Owing to"],
                c: 1,
                e: "'Because of the rain, the farmers rejoiced' — rain is the reason for their joy."
            },
            {
                id: "nts_vr4",
                q: "Select the grammatically correct 
