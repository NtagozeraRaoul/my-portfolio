
"use client";
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'
import { Avatar } from "primereact/avatar";
import { useRouter } from 'next/navigation';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './page.css';

export default function Contact() {
    const router = useRouter();
    const formRef = useRef(null)

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.send(
            'service_dd4sde8',     // Replace with your EmailJS service ID
            'template_tegbwh6',    // Replace with your EmailJS template ID
            {
                from_email: email,
                message: message
            },
            'n0DzRS6IthRi-Yzi-'      // Replace with your EmailJS public key
        )
            .then((result) => {
                console.log('Email successfully sent:', result.text);
                alert('Message sent successfully!');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.error('Email sending failed:', error);
                alert('Failed to send message.');
            })
            .finally(() => setIsSending(false));
    };


    return (
        <div className="container">
            <div className="top-section">
                {/* Identification */}
                <div  className="identity" onClick={() => {
                        router.push('/')}}>
                    <Avatar image="Raoul.jpg" size="xlarge" className="avatar" shape="circle" />
                    <div className="text-info">
                        <span className="name">
                            NTAGOZERA RAOUL
                        </span>
                        <span className="title">FrontEnd Software Developer</span>
                    </div>
                </div>
                {/* <div onClick={() => { router.push('/Contact'); }} className="talk-button">
                    <span className="contact">Let’s Talk</span>
                    <i className="pi pi-send" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
                </div> */}
            </div>

            {/* Introduction  */}

            <div className='contactForm'>
                <div>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        Get in Touch! <span className="text-3xl">👋</span>
                    </span>
                </div>
                <form onSubmit={sendEmail}>
                    <div className='form'>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            marginTop: '1rem',
                            maxWidth: '400px',
                            maxHeight: '200px',
                            lineHeight: '1.6rem'
                        }}  >
                            <span style={{ fontSize: '1.2rem', color: '#555555' }}>
                                "Whether you have a project, need advice, or just want to chat about tech, feel free to reach out. Let's make something amazing together!"
                            </span>
                        </div>
                        <div style={{ gap: '0.4rem', display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="email" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Email : </label>
                            <div className="gap-0 flex flex-column">
                                <InputText
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Emaiil Address"
                                    className='input'
                                />

                            </div>
                            <label htmlFor="message" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Message : </label>
                            <div className="gap-0 flex flex-column">
                                <InputTextarea
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={5}
                                    cols={30}
                                    placeholder="Message"
                                    className='input'
                                    style={{height: '100px'}}

                                />
                            </div>
                            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                                <Button
                                    label={isSending ? "Sending..." : "Send"}
                                    type='submit'
                                    severity="success"
                                    outlined
                                    disabled={isSending}
                                    style={{ width: '150px', height: '50px', borderRadius: '8px', border: '1px solid #FFBC20', }}
                                />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
            {/* Footer section */}
        </div>
    )
}