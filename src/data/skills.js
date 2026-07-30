import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaPaintBrush,
  FaCog,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend Development",
    accent: "#3b82f6",
    headerIcon: FaCode,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Styling & Animation",
    accent: "#22d3ee", 
    headerIcon: FaPaintBrush,
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Tools & Workflow",
    accent: "#2dd4bf",
    headerIcon: FaCog,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", desc: "Version control made simple" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff", desc: "Code hosting & collaboration" },
      { name: "Vite", icon: SiVite, color: "#646CFF", desc: "Lightning fast build tool for modern web" },
    ],
  },
];