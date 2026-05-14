"use client";
import { Avatar } from "primereact/avatar";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Experience() {
  const router = useRouter();

  const projects = [
    {
      title: "BRD – Tugane Platform",
      company: "Development Bank of Rwanda",
      year: "2023",
      tags: ["Next.js", "UI/UX", "Frontend"],
      icon: "🏦",
      content:
        "Tugane is a centralized platform developed for the Development Bank of Rwanda (BRD) to manage and integrate its various digital services. It acts as a hub for overseeing key operations such as customer interactions, access management, and procurement services. I contributed to the front-end development of the user interface using Next.js.",
    },
    {
      title: "Murakoze Platform",
      company: "Customer Experience Solution",
      year: "2023",
      tags: ["React", "Mobile App", "QMS"],
      icon: "⭐",
      content:
        "Murakoze is an enterprise customer experience solution that enables businesses to evaluate, manage, and improve customer interactions. It collects data on customer experiences, analyzes the information, and provides insights through results and feedback. I helped build the Murakoze Rating Web App, Murakoze QMS, and the Murakoze Mobile App.",
    },
    {
      title: "BMS – Branding Management System",
      company: "Bralirwa",
      year: "2022",
      tags: ["React Native", "Mobile", "Frontend"],
      icon: "🎨",
      content:
        "BMS is a comprehensive solution designed to streamline the management of branding assets. Its core functionality focuses on consolidating and organizing branding information related to specific assets. I contributed to the development of the user interface using React Native on the front end.",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Angular", "Flutter"] },
    { category: "Backend", items: ["Node.js", "REST APIs"] },
    { category: "Mobile", items: ["React Native", "Flutter"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code"] },
  ];

  return (
    <div className="exp-root">
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="grain-overlay" />

      {/* Nav */}
      <header className="nav-bar">
        <div className="nav-identity" onClick={() => router.push("/")}>
          <Avatar image="Raoul.jpg" size="large" className="nav-avatar" shape="circle" />
          <div className="nav-name-block">
            <span className="nav-name">Raoul Ntagozera</span>
            <span className="nav-role">Frontend Developer</span>
          </div>
        </div>
        <button className="talk-btn" onClick={() => router.push("/Contact")}>
          <span>Let's Talk</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </header>

      <main className="exp-main">

        {/* ── Hero ── */}
        <section className="exp-hero">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Portfolio & Experience
          </div>
          <h1 className="exp-headline">
            Work that<br />
            <span className="accent-italic">speaks</span><br />
            for itself.
          </h1>
          <p className="exp-subtext">
            I've worked with startups and tech companies to craft digital solutions
            that drive success and deliver exceptional user experiences.
          </p>
        </section>

        {/* ── Resume strip ── */}
        <section className="resume-strip">
          <div className="resume-strip-left">
            <div className="resume-icon">📄</div>
            <div>
              <p className="resume-strip-title">My Résumé</p>
              <p className="resume-strip-sub">
                Full overview of my skills, experience &amp; education.
              </p>
            </div>
          </div>
          <button
            className="resume-btn"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </button>
        </section>

        {/* ── Skills grid ── */}
        <section className="skills-section">
          <h2 className="section-label">Skills</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.category}>
                <span className="skill-category">{s.category}</span>
                <div className="skill-tags">
                  {s.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="projects-section">
          <h2 className="section-label">Projects</h2>
          <div className="projects-list">
            {projects.map((p, i) => (
              <article className="project-card" key={i}>
                {/* Left: number */}
                <div className="project-number">0{i + 1}</div>

                {/* Center: content */}
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-company">{p.company}</span>
                    <span className="project-year">{p.year}</span>
                  </div>
                  <h3 className="project-title">
                    <span className="project-icon">{p.icon}</span>
                    {p.title}
                  </h3>
                  <p className="project-content">{p.content}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="project-accent-line" />
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA footer ── */}
        <section className="exp-cta">
          <p className="exp-cta-text">Interested in working together?</p>
          <button className="primary-cta" onClick={() => router.push("/Contact")}>
            Get in touch
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </section>

      </main>
    </div>
  );
}