# 💻 WaleedDev — Linux Terminal Style Portfolio

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Automated_Deploy-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

Welcome to **WaleedDev**, a dynamic Linux terminal-themed developer portfolio built for **Muhammad Waleed Ejaz** (Junior Flutter & Web Developer).

This project transforms a traditional developer portfolio into an interactive, command-line terminal interface featuring simulated shell navigation, system info cards (`neofetch`), and animated project showcases.

---

## 🌟 Features

- 🖥️ **Linux Terminal UI & Chrome**: Modern dark terminal header, macOS-style window controls, prompt header (`waleed@portfolio:~$`), and custom tab icon.
- ⚡ **Interactive Terminal Commands**: Navigate through portfolio sections using simulated typed terminal commands:
  - `whoami` — About Me & Bio
  - `cat skills.txt` — Technical Skills & Expertise
  - `cat experience.log` — Professional Experience
  - `ls projects/` — Projects Showcase (FocusFlow, Bite, GigLink, HomeAUTO)
  - `cat education.log` — Educational Background
  - `./contact.sh` — Contact & Social Links
  - `neofetch` — System Info Overview
- 🚀 **Automated GitHub Pages CI/CD**: Automatic build and deployment to GitHub Pages on every push to `main` branch using GitHub Actions (Node 22).
- 🎨 **Responsive & Modern Design**: Built with Tailwind CSS, custom fonts, glassmorphism, and smooth micro-interactions.

---

## 🧰 Tech Stack

### **Frontend & Framework**
- **React 18** + **TypeScript**
- **Vite 7** (Lightning fast dev server & build tool)
- **Tailwind CSS 4**
- **Lucide React** (Modern developer icons)
- **Framer Motion** (Smooth terminal animations)

### **Deployment & CI/CD**
- **GitHub Pages**
- **GitHub Actions Workflow** ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))
- **`gh-pages`** CLI utility

---

## 👨‍💻 Developer Profile Summary

**Muhammad Waleed Ejaz**  
*Junior Flutter Developer @ ZainClouds | Computer Science Student @ NFC IET Multan*  
📍 **Location:** Multan, Punjab, Pakistan  
✉️ **Email:** `m.waleedejaz2003@gmail.com`  
💼 **LinkedIn:** [linkedin.com/in/waleedejaz-7005a6262](https://linkedin.com/in/waleedejaz-7005a6262)  

---

## 🚀 Projects Showcase

| Project | Description | Stack |
| :--- | :--- | :--- |
| 📱 **FocusFlow** | Full-stack task management app with priorities, categories, JWT auth, and Nodemailer OTPs. | `Flutter`, `Riverpod`, `Node.js`, `Express`, `MongoDB`, `JWT` |
| 🍔 **Bite** | Feature-rich food delivery app with 19 feature modules, 26 cubits, Stripe, FCM & Google Maps. | `Flutter`, `Firebase`, `Firestore`, `BLoC/Cubit`, `Stripe`, `FCM` |
| 💼 **GigLink** | Freelance marketplace app (Fiverr-style) with client/freelancer roles, in-app chat & payments. | `Flutter`, `Firebase`, `Firestore`, `Stripe`, `JazzCash`, `FCM` |
| 🏠 **HomeAUTO** | Smart home automation system (FYP) with facial recognition, gesture control & ESP32-CAM. | `Flutter`, `Arduino`, `ESP32-CAM`, `Computer Vision`, `IoT` |

---

## ⚙️ Getting Started (Local Development)

### **Prerequisites**
Ensure you have **Node.js** (v18+ or v20+) installed on your machine.

### **1. Clone the Repository**
```bash
git clone https://github.com/MuhammadWaleedEjaz05/waleed_dev_portfolio.git
cd waleed_dev_portfolio
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run Development Server**
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📦 Build & Deployment

### **Production Build**
To compile the TypeScript code and generate static production assets in `dist/`:
```bash
npm run build
```

### **Deploying to GitHub Pages**

#### **Method A: Automatic (GitHub Actions — Recommended)**
1. Ensure GitHub Pages source is set to **GitHub Actions** in your repository settings (**Settings ➔ Pages ➔ Source: GitHub Actions**).
2. Simply push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push main main
   ```
   The `.github/workflows/deploy.yml` workflow will automatically build and publish your portfolio!

#### **Method B: Manual Deploy (`npm run deploy`)**
```bash
npm run deploy
```
*Runs `npm run build` and deploys the generated `dist/` folder to the `gh-pages` branch.*

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).