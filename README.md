# 💻 WaleedDev — Linux Terminal Style Portfolio

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Automated_Deploy-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

A dynamic Linux terminal-themed developer portfolio for **Muhammad Waleed Ejaz** (Junior Flutter & Web Developer). Built with React, TypeScript, and Clean Architecture — featuring an interactive command-line interface, animated boot sequences, and a fully functional embedded terminal.

---

## 🌟 Features

- 🖥️ **Linux Terminal UI**: Dark terminal chrome, macOS-style window controls, prompt header (`waleed@portfolio:~$`), CRT scanline overlay, and scroll progress bar.
- ⚡ **Interactive Terminal Commands**: Navigate the portfolio using real terminal commands:
  - `whoami` — About Me & Bio
  - `cat skills.txt` — Technical Skills
  - `cat experience.log` — Work History
  - `ls projects/` — Projects (FocusFlow, Bite, GigLink, HomeAUTO)
  - `cat education.log` — Education
  - `./contact.sh` — Contact Info
  - `neofetch` — System Info Card
  - `help` — List all commands
- 🎯 **Typewriter Animations**: Boot sequence and section headers animate with character-by-character typewriter effects.
- 📱 **Responsive Navigation**: Sticky nav bar with mobile hamburger menu, keyboard-navigable terminal with command history.
- 🚀 **Automated CI/CD**: GitHub Actions deploys to GitHub Pages on every push to `main`.

---

## 🏗️ Architecture

This project follows **Clean Architecture** principles with strict layer separation:

```
src/
├── app/                          App-level setup (root component)
│   └── App.tsx                   Slim root (~100 lines)
│
├── domain/                       Pure TypeScript — zero React
│   ├── entities/
│   │   └── portfolio.types.ts    Section, Project, Experience, etc.
│   └── data/
│       └── portfolio.data.ts     SKILLS, PROJECTS, EXPERIENCE, etc.
│
├── presentation/                 All React UI
│   ├── components/common/        Reusable primitives
│   │   ├── BlinkingCursor.tsx
│   │   ├── PromptLine.tsx
│   │   ├── TerminalWindow.tsx
│   │   └── SectionHeader.tsx
│   ├── hooks/
│   │   └── useTypewriter.ts
│   ├── features/                 Feature-based modules
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── education/
│   │   ├── contact/
│   │   └── terminal/
│   └── layout/
│       ├── StickyNav.tsx
│       ├── ScrollProgress.tsx
│       └── Footer.tsx
│
├── shared/                       Cross-cutting utilities
│   ├── constants/
│   │   └── sectionIds.ts
│   └── types/
│       └── index.ts
│
├── styles/                       Global CSS
└── main.tsx                      Entry point
```

### Layer Rules

| Layer | Responsibility | Depends On |
| :--- | :--- | :--- |
| **domain/** | Business entities & data. Pure TypeScript, zero framework code. | Nothing |
| **presentation/** | React components, hooks, features, layout. | domain, shared |
| **shared/** | Types, constants used across layers. | domain (types only) |
| **app/** | Root component, providers, global styles. | presentation, shared |

### Path Aliases

| Alias | Maps To |
| :--- | :--- |
| `@/*` | `src/*` |
| `@domain/*` | `src/domain/*` |
| `@presentation/*` | `src/presentation/*` |
| `@shared/*` | `src/shared/*` |

---

## 🧰 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS 4, Custom CSS animations |
| **Architecture** | Clean Architecture, Feature-based modules |
| **Deployment** | GitHub Pages, GitHub Actions |

---

## 👨‍💻 Developer

**Muhammad Waleed Ejaz**
*Junior Flutter Developer @ ZainClouds · CS Student @ NFC IET Multan*

📍 Multan, Punjab, Pakistan
✉️ m.waleedejaz2003@gmail.com
💼 [LinkedIn](https://linkedin.com/in/waleedejaz-7005a6262)

---

## 🚀 Projects

| Project | Description | Stack |
| :--- | :--- | :--- |
| 📱 **FocusFlow** | Full-stack task management with JWT auth, OTP verification, push notifications. | Flutter, Riverpod, Node.js, Express, MongoDB |
| 🍔 **Bite** | Food delivery app — 19 feature modules, 26 cubits, Stripe payments, Google Maps. | Flutter, Firebase, BLoC/Cubit, Stripe, FCM |
| 💼 **GigLink** | Freelance marketplace (Fiverr-style) with real-time chat & dual-role auth. | Flutter, Firebase, Stripe, JazzCash |
| 🏠 **HomeAUTO** | Smart home automation (FYP) — facial recognition, gesture control, ESP32-CAM. | Flutter, Arduino, ESP32-CAM, Computer Vision |

---

## ⚙️ Getting Started

### Prerequisites

Node.js v18+ installed.

### Setup

```bash
git clone https://github.com/MuhammadWaleedEjaz05/waleed_dev_portfolio.git
cd waleed_dev_portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio.

---

## 📦 Build & Deploy

### Production Build

```bash
npm run build
```

### Deploy to GitHub Pages

**Automatic (Recommended):** Push to `main` — GitHub Actions handles the rest.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

**Manual:**

```bash
npm run deploy
```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).