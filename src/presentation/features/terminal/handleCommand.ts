import type { Section } from "@/shared/types";

export function handleCommand(cmd: string): { lines: string[]; scrollTo?: Section } {
  const c = cmd.trim().toLowerCase();
  if (c === "help") {
    return {
      lines: [
        "Available commands:",
        "  whoami         — about me",
        "  cat skills.txt — view skills",
        "  cat experience.log — work history",
        "  ls projects/   — list projects",
        "  cat education.log — education",
        "  ./contact.sh   — contact info",
        "  neofetch       — system info card",
        "  clear          — clear terminal",
        "  help           — show this message",
      ],
    };
  }
  if (c === "whoami" || c === "about") {
    return {
      lines: [
        "Waleed Ejaz",
        "Flutter | Mobile Application Developer | Web Developer",
        "Based in Multan, Punjab, Pakistan",
        "",
        "Dedicated CS student & Junior Flutter Developer at ZainClouds.",
        "Building responsive, scalable, performance-oriented mobile apps.",
      ],
      scrollTo: "about",
    };
  }
  if (c === "neofetch") {
    return {
      lines: [
        "  ██╗    ██╗ █████╗ ██╗     ███████╗███████╗██████╗",
        "  ██║    ██║██╔══██╗██║     ██╔════╝██╔════╝██╔══██╗",
        "  ██║ █╗ ██║███████║██║     █████╗  █████╗  ██║  ██║",
        "  ██║███╗██║██╔══██║██║     ██╔══╝  ██╔══╝  ██║  ██║",
        "  ╚███╔███╔╝██║  ██║███████╗███████╗███████╗██████╔╝",
        "   ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═════╝",
        "",
        "  waleed@portfolio",
        "  ─────────────────────────────",
        "  OS:       Flutter / Dart",
        "  Host:     ZainClouds",
        "  Uptime:   Since 2022",
        "  Shell:    Dart",
        "  DE:       Material Design",
        "  WM:       Flutter Engine",
        "  Terminal: VS Code / Linux",
        "  CPU:      Logic & Creativity",
        "  Memory:   Clean Architecture",
        "  Packages: Flutter Firebase Node.js MongoDB",
      ],
    };
  }
  if (c === "cat skills.txt") {
    return {
      lines: [
        "skills.txt",
        "├── Core",
        "│   ├── Flutter & Dart",
        "│   └── Mobile App Development",
        "├── Web",
        "│   ├── HTML / CSS / JavaScript",
        "│   └── Backend Fundamentals",
        "├── Tools & Platforms",
        "│   ├── REST APIs  Firebase  Git",
        "│   ├── Node.js  Express  MongoDB",
        "│   ├── Socket.io  Stripe  JazzCash",
        "│   └── Arduino / ESP32-CAM",
        "└── Environment",
        "    └── Linux (Pop!_OS)",
      ],
      scrollTo: "skills",
    };
  }
  if (c === "cat experience.log") {
    return {
      lines: [
        "[2026-04] -> [present]   Junior Flutter Developer @ ZainClouds, Multan",
        "[2026-01] -> [2026-04]   Intern @ ZainClouds, Multan",
      ],
      scrollTo: "experience",
    };
  }
  if (c === "ls projects/" || c === "ls projects") {
    return {
      lines: [
        "drwxr-xr-x  FocusFlow/",
        "drwxr-xr-x  bite_food_delivery/",
        "drwxr-xr-x  GigLink/  [in-progress]",
        "drwxr-xr-x  HomeAUTO/  [fyp]",
      ],
      scrollTo: "projects",
    };
  }
  if (c === "cat education.log") {
    return {
      lines: [
        "[2022-11] -> [2026-09]   BS, Computer Science — NFC IET Multan",
        "[2020-09] -> [2022-06]   FSc Pre-Engineering — Aspire College Multan",
        "[2015-01] -> [2020-03]   Matric, Science — Multan Public School & College for Boys",
      ],
      scrollTo: "education",
    };
  }
  if (c === "./contact.sh" || c === "contact") {
    return {
      lines: [
        "$ ./contact.sh",
        "Email    : m.waleedejaz2003@gmail.com",
        "Phone    : +92 319 3779679",
        "Location : Multan, Punjab, Pakistan",
        "LinkedIn : linkedin.com/in/waleedejaz-7005a6262",
      ],
      scrollTo: "contact",
    };
  }
  if (c === "date") {
    return { lines: [new Date().toUTCString()] };
  }
  if (c === "pwd") {
    return { lines: ["/home/waleed/portfolio"] };
  }
  if (c === "ls") {
    return { lines: ["about.md  skills.txt  experience.log  projects/  education.log  contact.sh"] };
  }
  if (c === "") {
    return { lines: [] };
  }
  return { lines: [`bash: ${cmd}: command not found`, "Type 'help' for available commands."] };
}
