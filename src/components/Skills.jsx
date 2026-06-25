import SectionHeading from "./SectionHeading.jsx";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSequelize,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", bg: "#FEF0EC" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", bg: "#E8F3FC" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bg: "#FFFDE7" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", bg: "#E8F0FB" },
  { name: "React", icon: FaReact, color: "#61DAFB", bg: "#E6FAFE" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", bg: "#E8F5E9" },
  { name: "Express", icon: SiExpress, color: "#111827", bg: "#F3F4F6" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", bg: "#E9F5E9" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", bg: "#E8EEF5" },
  { name: "Sequelize", icon: SiSequelize, color: "#52B0E7", bg: "#E8F4FC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", bg: "#E6F7FE" },
  { name: "Git", icon: FaGitAlt, color: "#F05032", bg: "#FEF0EE" },
  { name: "GitHub", icon: FaGithub, color: "#111827", bg: "#F3F4F6" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", bg: "#FFF0EB" },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container reveal">
        <SectionHeading title="My Skills">
          My core stack is MERN + TypeScript, along with the tools I use to
          build fast and responsive web applications.
        </SectionHeading>

        <div className="skills-flex">
          {skills.map(({ name, icon: Icon, color }) => (
            <article key={name} className="skill-card">
              <div className="skill-icon-container">
                <Icon size={48} style={{ color }} />
              </div>
              <span>{name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}