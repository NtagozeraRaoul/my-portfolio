
'use client';
import { Avatar } from 'primereact/avatar';
import { useRouter } from 'next/navigation';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './page.css'; // Assuming you have a CSS file for styles

export default function Experience() {
    const router = useRouter();

    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const data = [
        {
            title: 'BRD - Tugane Platform',
            subtitle: 'Development Bank of Rwanda (BRD)',
            content: 'Tugane is a centralized platform developed for the Development Bank of Rwanda (BRD) to manage and integrate its various digital services. It acts as a hub for overseeing key operations such as customer interactions, access management, and procurement services. In this project, I contributed to the front-end development of the user interface using Next.js.',
            // footer: 'Card Footer'
        },
        {
            title: 'Murakoze Platform',
            // subtitle: 'Bralirwa - Branding Management SystemBralirwa - Branding Management System',
            content: 'Murakoze is an enterprise customer experience solution that enables businesses to evaluate, manage, and improve customer interactions. It collects data on customer experiences, analyzes the information, and provides insights through results and feedback. I contributed to this project as a software developer, helping to build the Murakoze Rating Web App, Murakoze QMS, and the Murakoze Mobile App.',
            // footer: 'Card Footer'
        },
        {
            title: 'BMS-APP',
            subtitle: 'Bralirwa - Branding Management SystemBralirwa - Branding Management System',
            content: 'BMS (Branding Management System) is a comprehensive solution designed to streamline the management of branding assets. Its core functionality focuses on consolidating and organizing branding information related to specific assets. In this project, I contributed to the development of the user interface using React Native on the front end.',
            footer: 'Card Footer'
        },
        
    ]
    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );
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
                <div onClick={() => { router.push('/Contact'); }} className="talk-button">
                    <span className="contact">Let’s Talk</span>
                    <i className="pi pi-send" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
                </div>
            </div>
            <div className="experience-wrapper">
               <div className="experience-content">
                    <h1 className="experience-title">Experience</h1>
                    <div className="experience-card">
                            <span className="experience-text">
                                "I have worked on various projects, including web applications, mobile apps, and software solutions, utilizing technologies such as React, Next.js, and Node.js.."
                            </span>
                    </div>
                    <span style={{fontSize: '1.6rem', fontWeight: 'bold', marginTop: '1.5rem'  }}>
                        Resume <span className="resume-title">📄 </span>
                    </span> 
                    <div className="resume-section">
                        <span className="resume-text">
                            Below you'll find a detailed overview of my professional background, including skills, work experience, and education. You can view or download the full resume by clicking the button below.
                        </span>
                        <Button style={{width:'10rem', height: '3rem'}} label="View Resume" icon="pi pi-download" severity="info" onClick={() => window.open('/resume.pdf', '_blank')} />
                    </div>
                </div>

                <div className="project-section">
                    <span className="project-title">
                        Project Section! <span className="text-3xl">💼 </span>
                    </span>        
                    <div className="project-cards">
                        {
                            data.map((item, index) => (
                                <Card key={index} title={item.title} subTitle={item.subtitle} header={header} className="card">
                                    <p className="m-0" style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
                                        {item.content}
                                    </p>
                                </Card>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}