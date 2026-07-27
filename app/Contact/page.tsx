
'use client';
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { Avatar } from "primereact/avatar";
import { useRouter } from "next/navigation";
import './page.css';
 
export default function Contact() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
 
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("idle");
 
    emailjs
      .send(
        "service_dd4sde8",
        "template_tegbwh6",
        { from_email: email, message },
        "n0DzRS6IthRi-Yzi-"
      )
      .then(() => {
        setStatus("success");
        setEmail("");
        setMessage("");
      })
      .catch(() => setStatus("error"))
      .finally(() => setIsSending(false));
  };

    const socials = [
        {
          label: "GitHub",
          href: "#",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          ),
        },
        {
          label: "LinkedIn",
          href: "#",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          ),
        },
        {
          label: "Twitter",
          href: "#",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          ),
        },
      ];
     
      return (
        <div className="contact-root">
          <div className="bg-blob blob-1" />
          <div className="bg-blob blob-2" />
          <div className="grain-overlay" />
     
          {/* Nav */}
          <header className="nav-bar">
            <div className="nav-identity" onClick={() => router.push("/")}>
              <Avatar image="Raoul.jpg" size="large" className="nav-avatar" shape="circle" />
              <div className="nav-name-block">
                <span className="nav-name">Raoul Ntagozera </span>
                <span className="nav-role">Software Developer</span>
              </div>
            </div>
            <button className="back-btn" onClick={() => router.push("/")}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back home
            </button>
          </header>
     
          {/* Page body */}
          <main className="contact-main">
            {/* Left panel */}
            <div className="left-panel">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Contact
              </div>
     
              <h1 className="contact-headline">
                Let's build<br />
                <span className="accent-italic">something</span><br />
                together.
              </h1>
     
              <p className="contact-subtext">
                Whether you have a project, need advice, or just want to chat about
                tech — feel free to reach out. I'll get back to you within 24 hours.
              </p>
     
              {/* Social links */}
              <div className="socials">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="social-pill" target="_blank" rel="noopener noreferrer">
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
     
            {/* Right panel — form */}
            <div className="form-panel">
              <form onSubmit={sendEmail} className="contact-form" noValidate>
                <div className="field">
                  <label htmlFor="email">Your email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@example.com"
                    required
                    className="form-input"
                  />
                </div>
     
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me what you're working on..."
                    required
                    rows={6}
                    className="form-input form-textarea"
                  />
                </div>
     
                {/* Status feedback */}
                {status === "success" && (
                  <div className="status-msg success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                    Message sent! I'll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="status-msg error">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Something went wrong. Please try again.
                  </div>
                )}
     
                <button type="submit" className="send-btn" disabled={isSending}>
                  {isSending ? (
                    <>
                      <span className="spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </main>
        </div>
      );
    }