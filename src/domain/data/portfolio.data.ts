import type { Project, Experience, Education, ContactEntry, NavCommand } from "../entities/portfolio.types";

export const SKILLS: Record<string, string[]> = {
  Core: ["Flutter & Dart", "Mobile App Development", "Clean Architecture", "Responsive / Modern UI"],
  Web: ["HTML", "CSS", "JavaScript", "Backend / Web Fundamentals"],
  "Tools & Platforms": ["RESTful APIs", "Firebase", "Git / Version Control", "Node.js / Express", "MongoDB", "Socket.io", "Stripe", "JazzCash", "Arduino / ESP32-CAM"],
  Environment: ["Linux (Pop!_OS) — daily driver"],
};

export const PROJECTS: Project[] = [
  {
    id: "focusflow",
    name: "FocusFlow",
    desc: "Full-stack task management app — Flutter frontend + Node.js/Express/MongoDB backend.",
    details: [
      "Full task CRUD with priorities, due dates, categories, and advanced filtering",
      "JWT-based auth with secure signup/login, forgot-password flow, and OTP verification via email (Nodemailer)",
      "Local push notifications for task reminders",
      "State management with Riverpod, responsive UI (flutter_screenutil), localization (l10n)",
    ],
    tags: ["Flutter", "Riverpod", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github: "github.com/MuhammadWaleedEjaz05/FocusFlow",
    status: "complete",
  },
  {
    id: "bite",
    name: "Bite — Food Delivery App",
    desc: "Full-featured food delivery app, Flutter + Firebase, 19 feature modules, 26 cubits.",
    details: [
      "Email/password & Google Sign-In auth, onboarding flow, profile management",
      "Restaurant & menu browsing, cart with size/flavor customization, Firestore-backed persistence",
      "Stripe payments (Visa/Mastercard/PayPal/COD), saved cards with auto card-type detection",
      "Real-time order tracking + push notifications via FCM, ratings, favourites, Google Maps",
    ],
    tags: ["Flutter", "Firebase", "Firestore", "BLoC/Cubit", "Stripe", "Google Maps", "FCM"],
    github: "github.com/MuhammadWaleedEjaz05/bite_food_delivery",
    status: "complete",
  },
  {
    id: "giglink",
    name: "GigLink",
    desc: "Freelance marketplace app (Fiverr-style) — Client/Freelancer roles, in-app chat, payments.",
    details: [
      "Stack: Flutter frontend, Firebase backend (Firestore, Auth, FCM)",
      "Real-time messaging & notifications via Firestore / FCM",
      "Payment integration: Stripe / JazzCash",
      "Role-based authentication for Client vs. Freelancer accounts",
    ],
    tags: ["Flutter", "Firebase", "Firestore", "Stripe", "JazzCash", "FCM"],
    github: null,
    status: "in-progress",
  },
  {
    id: "homeauto",
    name: "HomeAUTO",
    desc: "Image-based smart home automation system — Final Year Project with team CyberGuides.",
    details: [
      "Facial recognition, gesture control, and ultrasonic sensors for home automation",
      "Flutter mobile app paired with Arduino/ESP32-CAM hardware",
      "Live camera preview integration for a face-recognition screen",
      "Full project documentation: Class/ER/Activity/Block diagrams",
    ],
    tags: ["Flutter", "Arduino", "ESP32-CAM", "Computer Vision", "IoT", "Embedded Systems"],
    github: null,
    status: "fyp",
  },
];

export const EXPERIENCE: Experience[] = [
  { period: "[2026-04] -> [present]", role: "Junior Flutter Developer", company: "ZainClouds", location: "Multan" },
  { period: "[2026-01] -> [2026-04]", role: "Intern", company: "ZainClouds", location: "Multan" },
];

export const EDUCATION: Education[] = [
  { period: "[2022-11] -> [2026-09]", degree: "BS, Computer Science", institution: "NFC IET Multan" },
  { period: "[2020-09] -> [2022-06]", degree: "FSc Pre-Engineering", institution: "Aspire College Multan" },
  { period: "[2015-01] -> [2020-03]", degree: "Matric, Science", institution: "Multan Public School & College for Boys" },
];

export const CONTACT: ContactEntry[] = [
  { key: "Email", value: "m.waleedejaz2003@gmail.com", href: "mailto:m.waleedejaz2003@gmail.com" },
  { key: "Phone", value: "+92 319 3779679", href: "tel:+923193779679" },
  { key: "Location", value: "Multan, Punjab, Pakistan", href: null },
  { key: "LinkedIn", value: "linkedin.com/in/waleedejaz-7005a6262", href: "https://linkedin.com/in/waleedejaz-7005a6262" },
];

export const NAV_COMMANDS: NavCommand[] = [
  { cmd: "whoami", label: "About", section: "about" },
  { cmd: "cat skills.txt", label: "Skills", section: "skills" },
  { cmd: "cat experience.log", label: "Experience", section: "experience" },
  { cmd: "ls projects/", label: "Projects", section: "projects" },
  { cmd: "cat education.log", label: "Education", section: "education" },
  { cmd: "./contact.sh", label: "Contact", section: "contact" },
  { cmd: "bash -i", label: "Terminal", section: "terminal" },
];
