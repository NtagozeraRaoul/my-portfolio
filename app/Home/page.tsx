"use client";
import React from "react";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';
import './page.css'; // Assuming you have a CSS file for styles

export default function Home() {
    const router = useRouter();
    const content = "Hey there! I'm Raoul Ntagozera, a passionate software developer dedicated to building impactful solutions. I leverage analytics to gain clear insights and craft viable strategies, using software development as a tool to enhance efficiency and quality. I've collaborated with startups and tech companies to create digital solutions that not only drive success but also deliver exceptional user experiences."
    const Language = [
        {
            id: 1,
            name: 'ReactJS',
            image: 'reactjs.png',
        },
        {
            id: 2,
            name: 'NodeJS',
            image: 'nodejs.png',
        },
        {
            id: 3,
            name: 'NextJS',
            image: 'nextjs.png',
        },
        {
            id: 4,
            name: 'Flutter',
            image: 'F2.png',
        },
        {
            id: 5,
            name: 'Angular',
            image: 'angular2.png',
        }
    ]
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
                <div onClick={() => { router.push('/Contact'); }} className="talk-button" >
                    <span className="contact">Let’s Talk</span>
                    <i className="pi pi-send" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
                </div>
            </div>

            <h1 className="headline">Software Developer with Background in coding</h1>
            <p className="description">{content}</p>


            {/* View Works */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
            }}>
                <div onClick={() => { router.push('/Experience'); }} className="view-works">
                    <span style={{ fontWeight: "bold" }}>View Works</span>
                    <i className="pi pi-briefcase" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
                </div>
            </div>
            {/* Language */}
            <div  className="languages">
                <div className="language-container">
                    {Language.map((language) => (
                        <div key={language.id}>
                            <img src={language.image} alt={language.name} className="lang-icon"/>
                        </div>
                    ))}</div>
            </div>
        </div>
    )
}