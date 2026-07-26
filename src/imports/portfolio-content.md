# Portfolio Content — Waleed Ejaz
> Source content for a terminal-themed portfolio website. Copy sections directly into your HTML/React components, or feed this file to a static site generator.

---

## 🎯 Design Direction: "Linux Terminal" Theme

Notes to guide the visual build (for you or for an AI page-builder prompt):

- **Look & feel:** dark background (`#0d1117` or true black `#000`), monospace font (`JetBrains Mono`, `Fira Code`, or `Ubuntu Mono`), green-on-black or amber-on-black text (`#00ff41` classic terminal green, or `#39ff14`).
- **Chrome:** fake terminal window — top bar with 3 dots (red/yellow/green, macOS-style, or a plain `user@waleed-portfolio:~$` prompt bar).
- **Navigation:** simulate typed commands instead of a normal navbar, e.g.:
  ```
  guest@portfolio:~$ whoami
  guest@portfolio:~$ cat about.md
  guest@portfolio:~$ ls projects/
  guest@portfolio:~$ cat experience.log
  guest@portfolio:~$ ./contact.sh
  ```
- **Interactions:** typewriter/type-on animation for headings, blinking cursor `▊`, `cat`, `ls`, `whoami`, `neofetch`-style system-info block for the About section.
- **Neofetch card idea:** show an ASCII-art avatar or logo on the left, key info as key:value pairs on the right (OS: Flutter Developer, Shell: Dart, Uptime: since 2022, Packages: Flutter, Firebase, REST APIs...).
- **Optional real feature:** a mini interactive terminal (JS) where visitors can type commands like `help`, `about`, `projects`, `contact`, `clear` and get real responses — strong "wow" factor for a dev portfolio.
- **Color accents:** keep it mostly monochrome (green/amber/white on black) with one accent color for links/buttons/hover states.

---

## 👤 About / whoami

```
$ whoami
Waleed Ejaz — Flutter | Mobile Application Developer | Web Developer
Based in Multan, Punjab, Pakistan
```

**Bio:**
Dedicated Computer Science student and Junior Flutter Developer with a strong focus on cross-platform mobile app development. Experienced in building responsive, scalable, and performance-oriented mobile applications with modern UI/UX standards. Also comfortable across web development, backend basics, and systems work — enjoys building full-stack solutions and shipping real, working products.

Currently working professionally as a Junior Flutter Developer at ZainClouds, while completing a BSCS degree and building out an independent project portfolio.

---

## 🧰 Skills (`cat skills.txt`)

**Core**
- Flutter & Dart (cross-platform mobile development)
- Mobile App Development — clean architecture, responsive/modern UI

**Web**
- HTML, CSS, JavaScript
- Backend/Web Development fundamentals

**Tools & Platforms**
- RESTful APIs
- Firebase
- Git / Version Control
- Node.js / Express (used in project work)
- MongoDB
- Socket.io (real-time features)
- Payment integrations: Stripe, JazzCash
- Arduino / ESP32-CAM (embedded/IoT)

**Environment**
- Linux (Pop!_OS) daily driver

---

## 💼 Experience (`cat experience.log`)

```
[2026-04] -> [present]   Junior Flutter Developer @ ZainClouds, Multan
[2026-01] -> [2026-04]   Intern @ ZainClouds, Multan
```

- **Junior Flutter Developer — ZainClouds** (April 2026 – Present, Multan)
- **Intern — ZainClouds** (January 2026 – April 2026, Multan)

---

## 🎓 Education (`cat education.log`)

```
[2022-11] -> [2026-09]   BS, Computer Science — NFC IET Multan
[2020-09] -> [2022-06]   FSc Pre-Engineering — Aspire College Multan
[2015-01] -> [2020-03]   Matric, Science — Multan Public School & College for Boys
```

---

## 🚀 Projects (`ls projects/`)

### 1. FocusFlow
Full-stack task management app — Flutter frontend + Node.js/Express/MongoDB backend.
- Full task CRUD with priorities, due dates, categories, and advanced filtering
- JWT-based auth with secure signup/login, forgot-password flow, and OTP verification via email (Nodemailer)
- Local push notifications for task reminders
- State management with Riverpod, responsive UI (flutter_screenutil), localization (l10n) for multi-language support

**Tags:** `Flutter` `Riverpod` `Node.js` `Express` `MongoDB` `JWT` `REST API`
**GitHub:** github.com/MuhammadWaleedEjaz05/FocusFlow

---

### 2. Bite — Food Delivery App
Full-featured food delivery app, Flutter + Firebase, built with a clean feature-first architecture (BLoC/Cubit pattern, 19 feature modules, 26 cubits).
- Email/password & Google Sign-In auth, onboarding flow, profile management
- Restaurant & menu browsing, cart with size/flavor customization, Firestore-backed persistence
- Stripe payments (Visa/Mastercard/PayPal/COD), saved cards with auto card-type detection
- Real-time order tracking (Received → Preparing → Dispatched → Delivered), push notifications via FCM
- Ratings & reviews, favourites, multi-address management with Google Maps, dark mode

**Tags:** `Flutter` `Firebase` `Firestore` `BLoC/Cubit` `Stripe` `Google Maps` `FCM`
**GitHub:** github.com/MuhammadWaleedEjaz05/bite_food_delivery

---

### 3. GigLink *(in progress)*
Freelance marketplace app (Fiverr-style) — Client/Freelancer roles, in-app chat, and payments. Currently being built as his next portfolio piece.
- Stack: Flutter frontend, Firebase backend (Firestore, Auth, FCM)
- Real-time messaging & notifications via Firestore / FCM
- Payment integration: Stripe / JazzCash
- Role-based authentication for Client vs. Freelancer accounts

**Tags:** `Flutter` `Firebase` `Firestore` `Stripe` `JazzCash` `FCM`

---

### 4. HomeAUTO — Final Year Project
Image-based smart home automation system, built with team "CyberGuides." *(not currently on GitHub — add a repo link here once pushed)*
- Facial recognition, gesture control, and ultrasonic sensors for home automation
- Flutter mobile app paired with Arduino/ESP32-CAM hardware
- Live camera preview integration for a face-recognition screen
- Full project documentation: Class/ER/Activity/Block diagrams

**Tags:** `Flutter` `Arduino` `ESP32-CAM` `Computer Vision` `IoT` `Embedded Systems`

---

## 📇 Contact (`./contact.sh`)

```
$ ./contact.sh
Email    : m.waleedejaz2003@gmail.com
Phone    : +92 319 3779679
Location : Multan, Punjab, Pakistan
LinkedIn : linkedin.com/in/waleedejaz-7005a6262
```

---

## 🗂 Suggested Page Structure

1. **Hero / Landing** — terminal boot sequence → `whoami` typed out → tagline
2. **About** — neofetch-style card (bio + quick stats)
3. **Skills** — `cat skills.txt` styled as a tree or grouped list
4. **Experience** — `experience.log` timeline
5. **Projects** — `ls projects/` grid, each project a "file" that expands into a detail card on click
6. **Education** — `education.log`
7. **Contact** — `./contact.sh` output + a real contact form or mailto links

---

## Suggested next steps
- Want me to build this out as an actual HTML/React terminal-themed portfolio (with the typing animation and interactive command bar)? I can generate that as a working artifact.
