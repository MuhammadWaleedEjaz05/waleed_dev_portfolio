export type Section =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "contact"
  | "terminal";

export interface Project {
  id: string;
  name: string;
  desc: string;
  details: string[];
  tags: string[];
  github: string | null;
  status: "complete" | "in-progress" | "fyp";
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
}

export interface ContactEntry {
  key: string;
  value: string;
  href: string | null;
}

export interface NavCommand {
  cmd: string;
  label: string;
  section: Section;
}
