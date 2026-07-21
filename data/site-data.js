/*
 * Batch 13 content hub
 *
 * Edit this file to publish a new announcement, resource, or course detail.
 * Keep newest updates at the top. No HTML knowledge is required.
 */
window.BATCH_DATA = {
  batch: {
    university: "University of Barishal",
    department: "Computer Science & Engineering",
    name: "BU CSE Batch-13",
    callsign: "Ballistic-15",
    admissionYear: 2026,
    repository: "bu-cse/CSE_13"
  },
  syllabus: {
    term: "First Year / First Term",
    totalCredits: "20.25",
    theoryHours: "15.00",
    sessionalHours: "10.50",
    sourceNote: "Totals shown exactly as printed in the supplied course-distribution table."
  },
  updates: [
    { date: "2026-07-22", type: "Class announcement", title: "No class — Wednesday, 22 July 2026", body: "No class will be taken.", priority: "important", link: "" },
    { date: "2026-07-21", type: "Class announcement", title: "No class — Tuesday, 21 July 2026", body: "No class will be held.", priority: "important", link: "" },
    { date: "2026-07-20", type: "Class schedule", title: "Overview of C — Monday, 20 July 2026", body: "Tomorrow's scheduled class topic: Overview of C.", priority: "normal", link: "" },
    { date: "2026-07-19", displayDate: "Saturday, 19 July 2026", type: "Class schedule", title: "Truth table etc.", body: "Tomorrow's scheduled class topic: Truth table etc.", priority: "normal", link: "" }
  ],
  courses: [
    { code: "CSE 1101", title: "Computational Problem Solving", credit: "3.00", status: "Core", theory: "3.00", sessional: "—", area: "Programming", focus: "Problem decomposition, algorithms, and C foundations.", book: "Problem Solving with C — Byron Gottfried", practice: "Start with small input/output, loops, arrays, and functions." },
    { code: "CSE 1102", title: "Computer Systems and Problem Solving Laboratory", credit: "0.75", status: "Core", theory: "—", sessional: "1.50", area: "Lab", focus: "Hands-on problem-solving practice and lab submissions.", book: "Course handouts and lab sheets", practice: "Keep each lab in its own folder with a short README." },
    { code: "CSE 1103", title: "Structured Programming", credit: "3.00", status: "Core", theory: "3.00", sessional: "—", area: "Programming", focus: "Structured C programming, functions, arrays, pointers, and files.", book: "The C Programming Language — Kernighan & Ritchie", practice: "Solve one small problem after every theory session." },
    { code: "CSE 1104", title: "Structured Programming Laboratory", credit: "1.50", status: "Core", theory: "—", sessional: "3.00", area: "Lab", focus: "Implement and test structured programming concepts.", book: "Programming in ANSI C — E. Balagurusamy", practice: "Compile with warnings enabled and test edge cases." },
    { code: "CSE 1105", title: "Discrete Mathematics", credit: "3.00", status: "Core", theory: "3.00", sessional: "—", area: "Mathematics", focus: "Logic, sets, proofs, relations, combinatorics, and graphs.", book: "Discrete Mathematics and Its Applications — Kenneth H. Rosen", practice: "Write each proof step explicitly before checking the answer." },
    { code: "MATH 1107", title: "Differential and Integral Calculus", credit: "3.00", status: "GED (Mathematics)", theory: "3.00", sessional: "—", area: "Mathematics", focus: "Limits, differentiation, integration, and applications.", book: "Calculus — Howard Anton", practice: "Maintain a formula sheet and solve mixed problem sets weekly." },
    { code: "PHY 1110", title: "Physics Laboratory", credit: "1.50", status: "GED (Natural Sciences)", theory: "—", sessional: "3.00", area: "Science", focus: "Measurement, experiments, observation, and lab reporting.", book: "Fundamentals of Physics — Halliday, Resnick & Walker", practice: "Prepare the aim, apparatus, and calculations before lab day." },
    { code: "ENG 1112", title: "English Communication Skills Laboratory", credit: "1.50", status: "GED (Humanities and Social Sciences)", theory: "—", sessional: "3.00", area: "Communication", focus: "Academic communication, writing, and presentation practice.", book: "English Grammar in Use — Raymond Murphy", practice: "Save polished reports and presentations as a personal portfolio." }
  ],
  resources: [
    { title: "CS50", area: "Programming", format: "Course", url: "https://cs50.harvard.edu/", note: "A strong, structured introduction to computer science." },
    { title: "Learn C", area: "Programming", format: "Interactive", url: "https://www.learn-c.org/", note: "Short browser-based C lessons and exercises." },
    { title: "freeCodeCamp", area: "Programming", format: "Practice", url: "https://www.freecodecamp.org/", note: "Guided programming lessons and projects." },
    { title: "Khan Academy Mathematics", area: "Mathematics", format: "Lessons", url: "https://www.khanacademy.org/math", note: "Clear explanations and practice for calculus foundations." },
    { title: "Paul's Online Math Notes", area: "Mathematics", format: "Reference", url: "https://tutorial.math.lamar.edu/", note: "Calculus notes, examples, and practice problems." },
    { title: "OpenStax College Physics", area: "Science", format: "Book", url: "https://openstax.org/details/books/college-physics", note: "Free introductory physics textbook." },
    { title: "British Council LearnEnglish", area: "Communication", format: "Practice", url: "https://learnenglish.britishcouncil.org/", note: "English listening, reading, and writing practice." },
    { title: "Codeforces", area: "Programming", format: "Problem solving", url: "https://codeforces.com/", note: "Programming contests and problem archive." },
    { title: "beecrowd", area: "Programming", format: "Problem solving", url: "https://www.beecrowd.com.br/", note: "Beginner-friendly programming problem sets." }
  ]
};
