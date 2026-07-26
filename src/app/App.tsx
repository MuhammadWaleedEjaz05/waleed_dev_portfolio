import { useState, useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Section = "hero" | "about" | "skills" | "experience" | "projects" | "education" | "contact" | "terminal";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SKILLS = {
  Core: ["Flutter & Dart", "Mobile App Development", "Clean Architecture", "Responsive / Modern UI"],
  Web: ["HTML", "CSS", "JavaScript", "Backend / Web Fundamentals"],
  "Tools & Platforms": ["RESTful APIs", "Firebase", "Git / Version Control", "Node.js / Express", "MongoDB", "Socket.io", "Stripe", "JazzCash", "Arduino / ESP32-CAM"],
  Environment: ["Linux (Pop!_OS) — daily driver"],
};

const PROJECTS = [
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

const EXPERIENCE = [
  { period: "[2026-04] -> [present]", role: "Junior Flutter Developer", company: "ZainClouds", location: "Multan" },
  { period: "[2026-01] -> [2026-04]", role: "Intern", company: "ZainClouds", location: "Multan" },
];

const EDUCATION = [
  { period: "[2022-11] -> [2026-09]", degree: "BS, Computer Science", institution: "NFC IET Multan" },
  { period: "[2020-09] -> [2022-06]", degree: "FSc Pre-Engineering", institution: "Aspire College Multan" },
  { period: "[2015-01] -> [2020-03]", degree: "Matric, Science", institution: "Multan Public School & College for Boys" },
];

const CONTACT = [
  { key: "Email", value: "m.waleedejaz2003@gmail.com", href: "mailto:m.waleedejaz2003@gmail.com" },
  { key: "Phone", value: "+92 319 3779679", href: "tel:+923193779679" },
  { key: "Location", value: "Multan, Punjab, Pakistan", href: null },
  { key: "LinkedIn", value: "linkedin.com/in/waleedejaz-7005a6262", href: "https://linkedin.com/in/waleedejaz-7005a6262" },
];

const NAV_COMMANDS: { cmd: string; label: string; section: Section }[] = [
  { cmd: "whoami", label: "About", section: "about" },
  { cmd: "cat skills.txt", label: "Skills", section: "skills" },
  { cmd: "cat experience.log", label: "Experience", section: "experience" },
  { cmd: "ls projects/", label: "Projects", section: "projects" },
  { cmd: "cat education.log", label: "Education", section: "education" },
  { cmd: "./contact.sh", label: "Contact", section: "contact" },
  { cmd: "bash -i", label: "Terminal", section: "terminal" },
];

// ─── Terminal command handler ──────────────────────────────────────────────────
function handleCommand(cmd: string): { lines: string[]; scrollTo?: Section } {
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

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 40, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// ─── Components ───────────────────────────────────────────────────────────────
function BlinkingCursor({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-2 h-4 bg-[#00ff41] align-middle ${className}`}
      style={{ animation: "blink 1s step-end infinite" }}
    />
  );
}

function PromptLine({ user = "guest", host = "portfolio", path = "~", children }: {
  user?: string; host?: string; path?: string; children?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-0 flex-wrap">
      <span className="text-[#00ff41]">{user}</span>
      <span className="text-[#6e7681]">@</span>
      <span className="text-[#58a6ff]">{host}</span>
      <span className="text-[#6e7681]">:</span>
      <span className="text-[#da8fff]">{path}</span>
      <span className="text-[#6e7681]">$</span>
      <span className="ml-2">{children}</span>
    </div>
  );
}

function TerminalWindow({ title, children, className = "" }: {
  title?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <div className={`rounded-lg border border-[rgba(0,255,65,0.2)] overflow-hidden shadow-[0_0_40px_rgba(0,255,65,0.05)] ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[rgba(0,255,65,0.15)]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        {title && (
          <span className="ml-3 text-xs text-[#6e7681] font-['JetBrains_Mono',monospace]">
            {title}
          </span>
        )}
      </div>
      <div className="bg-[#0d1117] p-4 font-['JetBrains_Mono',monospace] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function SectionHeader({ command }: { command: string }) {
  const { displayed, done } = useTypewriter(command, 50);
  return (
    <div className="mb-8">
      <PromptLine>
        <span className="text-[#c9d1d9]">{displayed}</span>
        {!done && <BlinkingCursor className="ml-1" />}
      </PromptLine>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const line1 = useTypewriter("Initializing portfolio...", 40, 300);
  const line2 = useTypewriter("Loading Waleed Ejaz's profile...", 40, 1400);
  const line3 = useTypewriter("Done.", 60, 2800);
  const line4 = useTypewriter("$ whoami", 70, 3400);
  const name = useTypewriter("Waleed Ejaz", 80, 4600);
  const role = useTypewriter("Flutter · Mobile · Web Developer", 40, 5700);
  const bio = useTypewriter("Based in Multan, Pakistan · Building cross-platform apps since 2022", 30, 6800);

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <TerminalWindow title="waleed@portfolio: ~">
          <div className="space-y-2 min-h-[320px]">
            {/* Boot sequence */}
            <div className="text-[#6e7681]">
              {line1.displayed && <p>[  0.001] {line1.displayed}</p>}
              {line2.displayed && <p>[  0.042] {line2.displayed}</p>}
              {line3.displayed && <p className="text-[#00ff41]">[  0.087] {line3.displayed}</p>}
            </div>

            {line3.done && (
              <div className="mt-4 space-y-1">
                <PromptLine>
                  <span className="text-[#c9d1d9]">{line4.displayed}</span>
                  {!line4.done && <BlinkingCursor className="ml-1" />}
                </PromptLine>

                {line4.done && (
                  <div className="mt-4 space-y-1 pl-2 border-l-2 border-[rgba(0,255,65,0.3)]">
                    <p className="text-3xl md:text-5xl font-bold text-[#00ff41] tracking-tight leading-tight">
                      {name.displayed}
                      {!name.done && <BlinkingCursor />}
                    </p>
                    {name.done && (
                      <p className="text-lg text-[#58a6ff]">
                        {role.displayed}
                        {!role.done && <BlinkingCursor />}
                      </p>
                    )}
                    {role.done && (
                      <p className="text-[#8b949e] text-sm mt-1">
                        {bio.displayed}
                        {!bio.done && <BlinkingCursor />}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {bio.done && (
              <div className="mt-8 flex flex-wrap gap-3 animate-[fadeIn_0.5s_ease_forwards]">
                {NAV_COMMANDS.slice(0, 6).map(({ cmd, section }) => (
                  <button
                    key={section}
                    onClick={() => onNavigate(section)}
                    className="px-3 py-1.5 border border-[rgba(0,255,65,0.3)] text-[#00ff41] text-xs rounded hover:bg-[rgba(0,255,65,0.1)] hover:border-[#00ff41] transition-all duration-200 cursor-pointer"
                  >
                    $ {cmd}
                  </button>
                ))}
              </div>
            )}
          </div>
        </TerminalWindow>

        {bio.done && (
          <div
            className="mt-4 text-center text-[#6e7681] text-xs animate-[fadeIn_1s_ease_forwards]"
            style={{ animation: "fadeIn 1s ease 0.3s both" }}
          >
            scroll down to explore · or type commands in terminal →{" "}
            <button
              onClick={() => onNavigate("terminal")}
              className="text-[#00ff41] hover:underline cursor-pointer"
            >
              bash -i
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── About / Neofetch Section ─────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="whoami" />

        <TerminalWindow title="neofetch">
          <div className="flex flex-col md:flex-row gap-8">
            {/* ASCII art */}
            <pre className="text-[#00ff41] text-xs leading-tight shrink-0 hidden sm:block">
{`  ██╗    ██╗
  ██║    ██║
  ██║ █╗ ██║
  ██║███╗██║
  ╚███╔███╔╝
   ╚══╝╚══╝

  waleed@portfolio
  ────────────────`}
            </pre>

            {/* Info table */}
            <div className="flex-1 space-y-1 text-sm">
              {[
                ["Name", "Waleed Ejaz"],
                ["Role", "Junior Flutter Developer"],
                ["Company", "ZainClouds, Multan"],
                ["Degree", "BS Computer Science (2022–2026)"],
                ["OS", "Pop!_OS (Linux) — daily driver"],
                ["Shell", "Dart / Zsh"],
                ["Editor", "VS Code"],
                ["Uptime", "Since 2022"],
                ["Packages", "Flutter  Firebase  Node.js  MongoDB"],
                ["Languages", "Dart  JS  HTML/CSS"],
                ["Focus", "Cross-platform mobile apps"],
                ["Status", "Open to opportunities"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="text-[#00ff41] w-24 shrink-0">{k}:</span>
                  <span className="text-[#c9d1d9]">{v}</span>
                </div>
              ))}

              <div className="mt-4 flex gap-1">
                {["#0d1117", "#00ff41", "#58a6ff", "#da8fff", "#ffa657", "#ff7b72", "#79c0ff", "#56d364"].map((c) => (
                  <div key={c} className="w-5 h-5 rounded-sm border border-[rgba(255,255,255,0.1)]" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[rgba(0,255,65,0.15)] text-[#8b949e] text-sm leading-relaxed">
            Dedicated Computer Science student and Junior Flutter Developer with a strong focus on
            cross-platform mobile app development. Experienced in building responsive, scalable, and
            performance-oriented apps with modern UI/UX standards. Also comfortable across web
            development, backend basics, and systems work.
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="skills" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="cat skills.txt" />

        <TerminalWindow title="skills.txt">
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <p className="text-[#00ff41] mb-2">┌── {category}</p>
                {items.map((item, i) => (
                  <p key={item} className="text-[#c9d1d9] pl-2">
                    <span className="text-[#6e7681]">{i === items.length - 1 ? "└" : "├"}── </span>
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

// ─── Experience Section ────────────────────────────────────────────────────────
function ExperienceSection() {
  return (
    <section id="experience" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="cat experience.log" />

        <TerminalWindow title="experience.log">
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="border-l-2 border-[rgba(0,255,65,0.3)] pl-4 hover:border-[#00ff41] transition-colors duration-300">
                <p className="text-[#6e7681] text-xs mb-1">{exp.period}</p>
                <p className="text-[#00ff41] font-semibold">{exp.role}</p>
                <p className="text-[#58a6ff]">@ {exp.company}</p>
                <p className="text-[#8b949e] text-xs">{exp.location}</p>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-[rgba(0,255,65,0.1)]">
              <PromptLine>
                <span className="text-[#6e7681]">2 entries found · sorted by date desc</span>
              </PromptLine>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [expanded, setExpanded] = useState(false);

  const statusColor = project.status === "complete"
    ? "text-[#56d364]"
    : project.status === "in-progress"
    ? "text-[#ffa657]"
    : "text-[#da8fff]";

  const statusLabel = project.status === "complete"
    ? "[done]"
    : project.status === "in-progress"
    ? "[in-progress]"
    : "[fyp]";

  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group
        ${expanded
          ? "border-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.15)]"
          : "border-[rgba(0,255,65,0.2)] hover:border-[rgba(0,255,65,0.5)]"
        }`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* File header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22] border-b border-[rgba(0,255,65,0.15)]">
        <span className="text-[#00ff41] text-lg">{expanded ? "📂" : "📁"}</span>
        <span className="text-[#c9d1d9] flex-1 font-semibold text-sm">{project.name}/</span>
        <span className={`text-xs ${statusColor}`}>{statusLabel}</span>
      </div>

      <div className="p-4 bg-[#0d1117] font-['JetBrains_Mono',monospace] text-sm">
        <p className="text-[#8b949e] text-xs mb-3">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs border border-[rgba(0,255,65,0.25)] text-[#00ff41] rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Expanded details */}
        {expanded && (
          <div
            className="mt-4 pt-4 border-t border-[rgba(0,255,65,0.15)] space-y-1"
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            {project.details.map((d, i) => (
              <p key={i} className="text-[#c9d1d9] text-xs flex gap-2">
                <span className="text-[#00ff41] shrink-0">→</span>
                <span>{d}</span>
              </p>
            ))}
            {project.github && (
              <p className="mt-3 text-xs">
                <span className="text-[#6e7681]">GitHub: </span>
                <a
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#58a6ff] hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.github}
                </a>
              </p>
            )}
            {!project.github && (
              <p className="mt-3 text-xs text-[#6e7681]">GitHub: — (repo not yet public)</p>
            )}
          </div>
        )}

        <p className="mt-3 text-xs text-[#6e7681]">
          {expanded ? "▲ collapse" : "▼ expand"}
        </p>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="ls projects/" />

        <div className="grid sm:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="mt-4">
          <TerminalWindow>
            <PromptLine>
              <span className="text-[#6e7681]">4 directories · click any folder to expand</span>
            </PromptLine>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}

// ─── Education Section ────────────────────────────────────────────────────────
function EducationSection() {
  return (
    <section id="education" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="cat education.log" />

        <TerminalWindow title="education.log">
          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="border-l-2 border-[rgba(88,166,255,0.4)] pl-4 hover:border-[#58a6ff] transition-colors duration-300">
                <p className="text-[#6e7681] text-xs mb-1">{edu.period}</p>
                <p className="text-[#58a6ff] font-semibold">{edu.degree}</p>
                <p className="text-[#c9d1d9]">{edu.institution}</p>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-[rgba(0,255,65,0.1)]">
              <PromptLine>
                <span className="text-[#6e7681]">3 entries found · BSCS ongoing (expected 2026-09)</span>
              </PromptLine>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="./contact.sh" />

        <TerminalWindow title="contact.sh — executable">
          <div className="space-y-3">
            <p className="text-[#6e7681] text-xs mb-4">#!/bin/bash</p>
            {CONTACT.map(({ key, value, href }) => (
              <div key={key} className="flex items-center gap-4 group">
                <span className="text-[#00ff41] w-20 shrink-0">{key}</span>
                <span className="text-[#6e7681]">:</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-[#58a6ff] hover:text-[#00ff41] hover:underline transition-colors duration-200 flex-1"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-[#c9d1d9] flex-1">{value}</span>
                )}
                <button
                  onClick={() => copy(value, key)}
                  className="opacity-0 group-hover:opacity-100 text-xs text-[#6e7681] hover:text-[#00ff41] transition-all duration-200 px-2 py-0.5 border border-[rgba(0,255,65,0.2)] rounded cursor-pointer"
                >
                  {copied === key ? "copied!" : "copy"}
                </button>
              </div>
            ))}
            <div className="mt-6 pt-4 border-t border-[rgba(0,255,65,0.15)]">
              <PromptLine>
                <span className="text-[#00ff41]">script exited 0</span>
                <span className="text-[#6e7681] ml-2">· hover any row to copy</span>
              </PromptLine>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}

// ─── Interactive Terminal ─────────────────────────────────────────────────────
interface TermEntry {
  type: "input" | "output";
  text?: string;
  lines?: string[];
}

function InteractiveTerminal({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const [history, setHistory] = useState<TermEntry[]>([
    {
      type: "output",
      lines: [
        "Waleed's Portfolio Terminal v1.0.0",
        "Type 'help' for available commands.",
        "",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollBottom(); }, [history, scrollBottom]);

  const submit = () => {
    const cmd = input.trim();
    setInput("");
    setHistIdx(-1);

    if (cmd) setCmdHistory((h) => [cmd, ...h]);

    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }

    const result = handleCommand(cmd);
    setHistory((h) => [
      ...h,
      { type: "input", text: cmd },
      { type: "output", lines: result.lines },
    ]);

    if (result.scrollTo) {
      setTimeout(() => onNavigate(result.scrollTo!), 400);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { submit(); return; }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next] ?? "");
    }
  };

  return (
    <section id="terminal" className="px-4 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeader command="bash -i" />

        <div className="rounded-lg border border-[rgba(0,255,65,0.2)] overflow-hidden shadow-[0_0_60px_rgba(0,255,65,0.08)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[rgba(0,255,65,0.15)]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-[#6e7681] font-['JetBrains_Mono',monospace]">
              waleed@portfolio: ~ — bash
            </span>
            <span className="ml-auto text-xs text-[#6e7681]">interactive</span>
          </div>

          {/* Output */}
          <div
            className="bg-[#0d1117] p-4 font-['JetBrains_Mono',monospace] text-sm h-80 overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,255,65,0.2) transparent" }}
          >
            {history.map((entry, i) => (
              <div key={i} className="mb-1">
                {entry.type === "input" && (
                  <PromptLine>
                    <span className="text-[#c9d1d9]">{entry.text}</span>
                  </PromptLine>
                )}
                {entry.type === "output" && entry.lines && entry.lines.map((line, j) => (
                  <p key={j} className={`${line.startsWith("bash:") ? "text-[#ff7b72]" : "text-[#c9d1d9]"} whitespace-pre`}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input row */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-t border-[rgba(0,255,65,0.15)]">
            <PromptLine />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="flex-1 bg-transparent border-none outline-none text-[#c9d1d9] text-sm font-['JetBrains_Mono',monospace] caret-[#00ff41]"
              placeholder="type a command..."
              autoFocus
              spellCheck={false}
            />
            <BlinkingCursor />
          </div>
        </div>

        <p className="mt-3 text-xs text-[#6e7681] text-center font-['JetBrains_Mono',monospace]">
          try: help · whoami · neofetch · ls projects/ · date · clear
        </p>
      </div>
    </section>
  );
}

// ─── Sticky Nav ───────────────────────────────────────────────────────────────
function StickyNav({ active, onNavigate }: { active: Section; onNavigate: (s: Section) => void }) {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[rgba(13,17,23,0.95)] backdrop-blur border-b border-[rgba(0,255,65,0.15)] px-4 md:px-8 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate("hero" as Section)}
            className="text-[#00ff41] text-sm font-['JetBrains_Mono',monospace] hover:text-white transition-colors cursor-pointer"
          >
            waleed@portfolio:~$
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_COMMANDS.map(({ cmd, section }) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`px-3 py-1 text-xs font-['JetBrains_Mono',monospace] rounded transition-all duration-200 cursor-pointer ${
                  active === section
                    ? "text-[#0d1117] bg-[#00ff41]"
                    : "text-[#6e7681] hover:text-[#00ff41]"
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#00ff41] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-[rgba(0,255,65,0.15)] flex flex-col gap-1">
            {NAV_COMMANDS.map(({ cmd, section }) => (
              <button
                key={section}
                onClick={() => { onNavigate(section); setMenuOpen(false); }}
                className="text-left px-2 py-1.5 text-xs text-[#6e7681] hover:text-[#00ff41] font-['JetBrains_Mono',monospace] cursor-pointer"
              >
                $ {cmd}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Scroll progress bar ──────────────────────────────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const p = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(p * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-[rgba(0,255,65,0.1)]">
      <div
        className="h-full bg-[#00ff41] transition-all duration-100"
        style={{ width: `${progress}%`, boxShadow: "0 0 8px #00ff41" }}
      />
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="px-4 md:px-12 py-12 border-t border-[rgba(0,255,65,0.15)]">
      <div className="max-w-4xl mx-auto font-['JetBrains_Mono',monospace] text-xs text-[#6e7681] text-center space-y-2">
        <p className="text-[#00ff41]">waleed@portfolio:~$ exit 0</p>
        <p>© 2026 Waleed Ejaz · Built with Flutter developer taste, in React</p>
        <p>Multan, Punjab, Pakistan · m.waleedejaz2003@gmail.com</p>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
const SECTION_IDS: Record<Section, string> = {
  hero: "",
  about: "about",
  skills: "skills",
  experience: "experience",
  projects: "projects",
  education: "education",
  contact: "contact",
  terminal: "terminal",
};

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("hero");

  const navigate = useCallback((section: Section) => {
    setActiveSection(section);
    if (section === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = SECTION_IDS[section];
    if (id) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as Section;
            if (id) setActiveSection(id as Section);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const ids = Object.values(SECTION_IDS).filter(Boolean);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-['JetBrains_Mono',monospace]"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace" }}
    >
      {/* Global animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        * { scrollbar-width: thin; scrollbar-color: rgba(0,255,65,0.15) transparent; }
        *::-webkit-scrollbar { width: 4px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb { background: rgba(0,255,65,0.2); border-radius: 2px; }
        section { animation: fadeIn 0.6s ease both; }
      `}</style>

      {/* CRT scanline overlay — very subtle */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.02]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.3) 2px, rgba(0,255,65,0.3) 4px)",
        }}
      />

      <ScrollProgress />
      <StickyNav active={activeSection} onNavigate={navigate} />

      <main>
        <HeroSection onNavigate={navigate} />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <InteractiveTerminal onNavigate={navigate} />
      </main>

      <Footer />
    </div>
  );
}
