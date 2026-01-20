// Comprehensive Q&A Database for University Chatbot
export const qaDatabase = {
    // Admissions & Applications
    admissions: [
        {
            q: "What are the admission requirements?",
            a: "Admission requirements include: high school diploma or equivalent, SAT/ACT scores (optional for 2026), official transcripts, letter of recommendation, and personal essay. GPA requirement is 3.0+ for regular admission.",
            keywords: ["admission", "requirements", "apply", "application", "gpa", "sat", "act"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "When is the application deadline?",
            a: "Application deadlines: Early Action - November 1st, Regular Decision - January 15th, Transfer Students - March 1st (Fall), October 1st (Spring). Rolling admissions available for select programs.",
            keywords: ["deadline", "application", "when", "due date", "early action"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "How do I check my application status?",
            a: "Check your application status through the Applicant Portal at admissions.university.edu/portal using your application ID and email. Status updates are posted within 2-3 business days of document receipt.",
            keywords: ["status", "application", "check", "portal", "track"],
            roles: ["student", "admin"]
        },
        {
            q: "Can I apply as a transfer student?",
            a: "Yes! Transfer students are welcome. You'll need: college transcripts (2.5+ GPA), 24+ transferable credits recommended, and completion of core requirements. Transfer credit evaluation takes 2-3 weeks after admission.",
            keywords: ["transfer", "credits", "previous college"],
            roles: ["student", "admin"]
        }
    ],

    // Financial Aid & Scholarships
    financial: [
        {
            q: "What financial aid is available?",
            a: "We offer: Merit scholarships ($5K-$25K/year), Need-based grants, Federal loans (FAFSA required), Work-study programs, and Athletic scholarships. 85% of students receive some form of financial aid.",
            keywords: ["financial aid", "scholarship", "money", "cost", "tuition", "fafsa"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "How do I apply for scholarships?",
            a: "Scholarship application process: 1) Complete admission application (auto-considered for merit), 2) Submit FAFSA by March 1st, 3) Apply for departmental scholarships through student portal, 4) Check external scholarship database. Renewable scholarships require 3.0+ GPA.",
            keywords: ["scholarship", "apply", "how to", "financial"],
            roles: ["student", "admin"]
        },
        {
            q: "What is the total cost of attendance?",
            a: "2025-2026 Cost of Attendance: Tuition & Fees: $42,000, Room & Board: $14,500, Books & Supplies: $1,200, Personal Expenses: $2,300. Total: ~$60,000/year. Financial aid packages average $28,000.",
            keywords: ["cost", "tuition", "price", "expensive", "how much"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "When will I receive my financial aid package?",
            a: "Financial aid packages are sent: Early Action applicants - by December 15th, Regular Decision - within 2 weeks of admission decision. Check your student portal for updates. Contact finaid@university.edu with questions.",
            keywords: ["financial aid", "package", "when", "receive"],
            roles: ["student", "admin"]
        }
    ],

    // Academic Programs & Courses
    academics: [
        {
            q: "What majors do you offer?",
            a: "We offer 60+ majors across 8 colleges: Business, Engineering, Arts & Sciences, Education, Nursing, Computer Science, Communications, and Fine Arts. Popular majors: Business Administration, Computer Science, Psychology, Engineering, Biology. Dual majors and minors available.",
            keywords: ["major", "program", "degree", "study", "what can i"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "Can I change my major?",
            a: "Yes! Students can change majors through the Registrar's Office. Process: 1) Meet with academic advisor, 2) Complete change of major form, 3) Submit by add/drop deadline. Most changes are approved within 1 week. Some competitive programs require separate application.",
            keywords: ["change major", "switch", "different major"],
            roles: ["student", "admin"]
        },
        {
            q: "What is the student-faculty ratio?",
            a: "Our student-faculty ratio is 13:1, ensuring personalized attention. Average class size: 22 students. 78% of classes have fewer than 30 students. All courses taught by faculty (not TAs). Office hours required for all professors.",
            keywords: ["class size", "ratio", "faculty", "professor"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "How do I register for classes?",
            a: "Class registration: 1) Meet with academic advisor for approval, 2) Access student portal during registration window, 3) Add classes using CRN codes, 4) Verify schedule. Registration opens by class year: Seniors (April 1), Juniors (April 8), Sophomores (April 15), Freshmen (April 22).",
            keywords: ["register", "classes", "courses", "enroll", "schedule"],
            roles: ["student", "admin"]
        },
        {
            q: "Are there online courses available?",
            a: "Yes! We offer 200+ online and hybrid courses across all departments. Fully online degree programs available in Business, Computer Science, and Liberal Studies. Same tuition rate as on-campus. Technical support available 24/7.",
            keywords: ["online", "remote", "virtual", "distance learning"],
            roles: ["student", "alumni", "admin"]
        }
    ],

    // Campus Life & Housing
    campus: [
        {
            q: "What housing options are available?",
            a: "Housing options: Traditional dorms (shared rooms), Suite-style (2-4 students), Apartments (upperclassmen), Living-learning communities. All freshmen required to live on campus. Housing application opens March 1st. Roommate matching survey available.",
            keywords: ["housing", "dorm", "residence", "room", "live"],
            roles: ["student", "admin"]
        },
        {
            q: "What dining options are on campus?",
            a: "Dining: 5 dining halls, 12 cafes/restaurants, 2 food courts. Meal plans required for on-campus residents. Options: Unlimited, 14-meal, 10-meal plans. Dietary accommodations: vegetarian, vegan, gluten-free, kosher, halal. Mobile ordering available.",
            keywords: ["food", "dining", "meal plan", "cafeteria", "eat"],
            roles: ["student", "admin"]
        },
        {
            q: "What clubs and organizations are available?",
            a: "300+ student organizations: Academic clubs, Greek life (15 fraternities, 12 sororities), Sports clubs, Cultural organizations, Service groups, Arts & performance. Club fair held first week of each semester. Start your own club with 10+ members!",
            keywords: ["clubs", "organizations", "activities", "extracurricular", "greek life"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "Is there parking on campus?",
            a: "Parking available: Student lots ($300/semester), Commuter passes ($450/year), Visitor parking (free 2hrs, then $2/hr). Freshmen not permitted cars first semester. Alternative: Free campus shuttle, bike racks, Zipcar program.",
            keywords: ["parking", "car", "vehicle", "transportation"],
            roles: ["student", "admin"]
        }
    ],

    // Career Services & Alumni
    career: [
        {
            q: "What career services are available?",
            a: "Career Services offers: Resume/cover letter review, Mock interviews, Job/internship database (10,000+ listings), Career fairs (Fall & Spring), Networking events, Alumni mentorship program, Graduate school advising. Services free for life!",
            keywords: ["career", "job", "internship", "employment", "work"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "What is the job placement rate?",
            a: "Employment outcomes (Class of 2025): 94% employed or in grad school within 6 months, Average starting salary: $58,000, Top employers: Google, Microsoft, Deloitte, local hospitals, school districts. 78% work in field related to major.",
            keywords: ["job placement", "employment rate", "salary", "outcomes"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "How can alumni stay connected?",
            a: "Alumni engagement: Alumni Association membership (free), Regional chapter events, Homecoming & Reunion weekends, Online alumni directory, Mentorship program, Continuing education discounts, Career services (lifetime access), Alumni magazine (quarterly).",
            keywords: ["alumni", "stay connected", "network", "events"],
            roles: ["alumni", "admin"]
        },
        {
            q: "Are there internship opportunities?",
            a: "Internship support: 500+ partner companies, Credit-bearing internships available, Summer internship program, International internships, Funding available for unpaid internships ($2,500 stipend), Career Services assists with search & placement.",
            keywords: ["internship", "intern", "work experience", "summer"],
            roles: ["student", "admin"]
        }
    ],

    // Technical Support & IT
    technical: [
        {
            q: "How do I access WiFi on campus?",
            a: "WiFi access: Network name: 'UniversitySecure', Login with student ID and password, Automatic connection after first setup, Guest network available, Coverage: 100% of campus, IT Help Desk: helpdesk@university.edu or ext. 4357.",
            keywords: ["wifi", "internet", "network", "connection"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "What technology resources are available?",
            a: "Tech resources: Free Microsoft Office 365, Adobe Creative Cloud (students), 24/7 computer labs (5 locations), Laptop checkout program (3-day max), Free printing (500 pages/semester), Tech support (M-F 8am-8pm, Sat-Sun 10am-6pm).",
            keywords: ["technology", "computer", "software", "lab", "printing"],
            roles: ["student", "admin"]
        },
        {
            q: "How do I reset my password?",
            a: "Password reset: Visit password.university.edu, Enter student ID/email, Verify identity (security questions or phone), Create new password (8+ characters, 1 uppercase, 1 number, 1 symbol). For issues, contact IT Help Desk: 555-123-4357.",
            keywords: ["password", "reset", "forgot", "login", "account"],
            roles: ["student", "alumni", "admin"]
        }
    ],

    // Administrative
    administrative: [
        {
            q: "How do I get my transcript?",
            a: "Transcript requests: Official transcripts via National Student Clearinghouse (parchment.com), Unofficial transcripts: download from student portal (free), Processing: 2-3 business days, Cost: $10 per official copy, Rush service available ($25, same-day).",
            keywords: ["transcript", "records", "grades", "official"],
            roles: ["student", "alumni", "admin"]
        },
        {
            q: "What is the refund policy?",
            a: "Tuition refund schedule: 100% refund (before classes start), 80% (week 1), 60% (week 2), 40% (week 3), 20% (week 4), No refund after week 4. Room & board prorated monthly. Withdrawals require official form submission.",
            keywords: ["refund", "withdraw", "drop", "money back"],
            roles: ["student", "admin"]
        },
        {
            q: "How do I contact the admissions office?",
            a: "Admissions contact: Phone: 555-123-4000, Email: admissions@university.edu, Office hours: M-F 9am-5pm, Virtual appointments available, Campus tours: Book online at visit.university.edu, Response time: 24-48 hours.",
            keywords: ["contact", "admissions", "phone", "email", "reach"],
            roles: ["student", "alumni", "admin"]
        }
    ],

    // Health & Wellness
    health: [
        {
            q: "What health services are available?",
            a: "Health Center services: Primary care, Mental health counseling (free, confidential), Pharmacy, Lab services, Immunizations, Physical therapy. Hours: M-F 8am-6pm, Sat 10am-2pm. After-hours: Nurse hotline 24/7. Insurance accepted.",
            keywords: ["health", "medical", "doctor", "sick", "counseling", "mental health"],
            roles: ["student", "admin"]
        },
        {
            q: "Is health insurance required?",
            a: "Health insurance required for all students. Options: 1) Enroll in university plan ($2,400/year), 2) Waive with proof of comparable coverage (deadline: August 15th). University plan includes: Medical, dental, vision, mental health services.",
            keywords: ["health insurance", "insurance", "coverage", "medical"],
            roles: ["student", "admin"]
        },
        {
            q: "What counseling services are available?",
            a: "Counseling services: Individual therapy (free, 12 sessions/year), Group therapy, Crisis intervention (24/7), Stress management workshops, Psychiatric services, Substance abuse support. Confidential. Call 555-123-HELP or walk-in M-F 9am-5pm.",
            keywords: ["counseling", "therapy", "mental health", "stress", "anxiety", "depression"],
            roles: ["student", "admin"]
        }
    ]
};

// Semantic search function
export const findBestMatch = (query, userRole = "student") => {
    query = query.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    // Search through all categories
    Object.values(qaDatabase).forEach(category => {
        category.forEach(qa => {
            // Check if user role has access
            if (!qa.roles.includes(userRole)) return;

            let score = 0;

            // Check keywords
            qa.keywords.forEach(keyword => {
                if (query.includes(keyword)) {
                    score += 3;
                }
            });

            // Check question similarity
            const questionWords = qa.q.toLowerCase().split(' ');
            questionWords.forEach(word => {
                if (query.includes(word) && word.length > 3) {
                    score += 1;
                }
            });

            // Check answer for context
            const answerWords = qa.a.toLowerCase().split(' ');
            answerWords.forEach(word => {
                if (query.includes(word) && word.length > 4) {
                    score += 0.5;
                }
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = qa;
            }
        });
    });

    return highestScore > 2 ? bestMatch : null;
};
