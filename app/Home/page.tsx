// "use client";
// import React from "react";
// import { Avatar } from 'primereact/avatar';
// import { Button } from 'primereact/button';
// import { useRouter } from 'next/navigation';
// import './page.css'; // Assuming you have a CSS file for styles

// export default function Home() {
//     const router = useRouter();
//     const content = "Hey there! I'm Raoul Ntagozera, a passionate software developer dedicated to building impactful solutions. I leverage analytics to gain clear insights and craft viable strategies, using software development as a tool to enhance efficiency and quality. I've collaborated with startups and tech companies to create digital solutions that not only drive success but also deliver exceptional user experiences."
//     const Language = [
//         {
//             id: 1,
//             name: 'ReactJS',
//             image: 'reactjs.png',
//         },
//         {
//             id: 2,
//             name: 'NodeJS',
//             image: 'nodejs.png',
//         },
//         {
//             id: 3,
//             name: 'NextJS',
//             image: 'nextjs.png',
//         },
//         {
//             id: 4,
//             name: 'Flutter',
//             image: 'F2.png',
//         },
//         {
//             id: 5,
//             name: 'Angular',
//             image: 'angular2.png',
//         }
//     ]
//     return (
//         <div className="container">
//             <div className="top-section">
//                 {/* Identification */}
//                 <div  className="identity" onClick={() => {
//                         router.push('/')}}>
//                     <Avatar image="Raoul.jpg" size="xlarge" className="avatar" shape="circle" />
//                     <div className="text-info">
//                         <span className="name">
//                             NTAGOZERA RAOUL
//                         </span>
//                         <span className="title">FrontEnd Software Developer</span>
//                     </div>
//                 </div>
//                 <div onClick={() => { router.push('/Contact'); }} className="talk-button" >
//                     <span className="contact">Let’s Talk</span>
//                     <i className="pi pi-send" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
//                 </div>
//             </div>

//             <h1 className="headline">Software Developer with Background in coding</h1>
//             <p className="description">{content}</p>


//             {/* View Works */}
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 marginTop: '1rem',
//             }}>
//                 <div onClick={() => { router.push('/Experience'); }} className="view-works">
//                     <span style={{ fontWeight: "bold" }}>View Works</span>
//                     <i className="pi pi-briefcase" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
//                 </div>
//             </div>
//             {/* Language */}
//             <div  className="languages">
//                 <div className="language-container">
//                     {Language.map((language) => (
//                         <div key={language.id}>
//                             <img src={language.image} alt={language.name} className="lang-icon"/>
//                         </div>
//                     ))}</div>
//             </div>
//         </div>
//     )
// }
"use client";
import React, { useEffect, useRef } from "react";
import { Avatar } from "primereact/avatar";
import { useRouter } from "next/navigation";
import "./page.css";
 
export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
 
  const content =
    "Hey there! I'm Raoul Ntagozera, a passionate software developer dedicated to building impactful solutions. I leverage analytics to gain clear insights and craft viable strategies, using software development as a tool to enhance efficiency and quality. I've collaborated with startups and tech companies to create digital solutions that not only drive success but also deliver exceptional user experiences.";
 
  const languages = [
    { id: 1, name: "ReactJS", image: "reactjs.png" },
    { id: 2, name: "NodeJS", image: "nodejs.png" },
    { id: 3, name: "NextJS", image: "nextjs.png" },
    { id: 4, name: "Flutter", image: "F2.png" },
    { id: 5, name: "Angular", image: "angular2.png" },
  ];
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
 
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
 
  return (
    <div className="home-root">
      {/* Ambient background blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="grain-overlay" />
 
      {/* Nav */}
      <header className="nav-bar">
        <div
          className="nav-identity"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
          <Avatar
            image="Raoul.jpg"
            size="large"
            className="nav-avatar"
            shape="circle"
          />
          <div className="nav-name-block">
            <span className="nav-name">Raoul Ntagozera</span>
            <span className="nav-role">Software Developer</span>
          </div>
        </div>
 
        <button
          className="talk-btn"
          onClick={() => router.push("/Contact")}
        >
          <span>Let's Talk</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </header>
 
      {/* Hero */}
      <main className="hero" ref={heroRef}>
        {/* Eyebrow */}
        <div className="eyebrow fade-up">
          <span className="eyebrow-dot" />
          Available for work
        </div>
 
        {/* Headline */}
        <h1 className="headline fade-up">
          <span className="headline-line">Software</span>
          <span className="headline-line accent-line">Developer</span>
          <span className="headline-line">& Builder</span>
        </h1>
 
        {/* Bio */}
        <p className="bio fade-up">{content}</p>
 
        {/* CTA */}
        <div className="cta-row fade-up">
          <button
            className="primary-cta"
            onClick={() => router.push("/Experience")}
          >
            View Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="ghost-cta"
            onClick={() => router.push("/Contact")}
          >
            Get in touch
          </button>
        </div>
      </main>
 
      {/* Tech stack */}
      <section className="stack-section fade-up">
        <div className="stack-label">Tech Stack</div>
        <div className="stack-track">
          {/* Double for infinite scroll illusion */}
          {[...languages, ...languages].map((lang, i) => (
            <div className="stack-pill" key={i}>
              <img src={lang.image} alt={lang.name} className="stack-icon" />
              <span className="stack-name">{lang.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}