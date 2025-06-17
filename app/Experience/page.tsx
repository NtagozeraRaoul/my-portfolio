
'use client';
import { Avatar } from 'primereact/avatar';
import { useRouter } from 'next/navigation';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

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
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                // backgroundColor: '#f0f0f0',
                padding: '4rem',
                // paddingInlineEnd: '5rem',
            }}>
                {/* Identification */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    gap: '1rem',
                    width: '40%',
                    paddingLeft: '2rem',
                }} className="w-full">
                    <Avatar image="Raoul.jpg" size="xlarge" style={{ backgroundColor: '#9c27b0', color: '#ffffff', width: '80px', height: '80px' }} shape="circle" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                        }}>
                            NTAGOZERA RAOUL
                        </span>
                        <span style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: '#FFBC20',
                        }}>FrontEnd Software Developer</span>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    // flexDirection: 'row',
                    position: 'relative',
                    // backgroundColor: 'green',
                    width: '20%',
                    height: '3rem',
                    justifyContent: 'end',
                    paddingRight: '2rem',
                }}>
                    <div onClick={() => {router.push('/Contact');}} style={{
                        display: 'flex',
                        // position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.2rem',
                        backgroundColor: 'gray',
                        color: '#000000',
                        borderRadius: '2rem',
                        padding: '1.2rem 1rem',
                        cursor: 'pointer',
                        opacity: '0.9',
                    }}>
                        <span style={{ fontWeight: "bold", color: 'white' }}>Let’s Talk</span>
                        <i className="pi pi-arrow-up-right" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', gap: '2rem'}}>
               <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    paddingLeft: '6rem',
                    // width: '100%',
                    // backgroundColor: '#f0f0f0',
                }}>
                    <h1 style={{ fontSize: '1.6rem', fontWeight: 'bold'}}>Experience</h1>
                    <div style={{
                            backgroundColor: 'white', 
                            padding: '2rem', 
                            borderRadius: '8px', 
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                            marginTop: '1rem', 
                            maxWidth: '500px',
                            maxHeight: '500px',
                            lineHeight: '1.6rem'
                        }}  >
                            <span style={{ fontSize: '1.2rem', color: '#555555' }}>
                                "I have worked on various projects, including web applications, mobile apps, and software solutions, utilizing technologies such as React, Next.js, and Node.js.."
                            </span>
                    </div>
                    <span style={{fontSize: '1.6rem', fontWeight: 'bold', marginTop: '1.5rem'  }}>
                        Resume <span className="text-3xl">📄 </span>
                    </span> 
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem'}}>
                        <span style={{
                                backgroundColor: 'white', 
                                padding: '2rem', 
                                borderRadius: '8px', 
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                                marginTop: '1rem', 
                                maxWidth: '500px',
                                maxHeight: '500px',
                                lineHeight: '1.6rem',
                                color: '#555555',
                            }}>
                            Below you'll find a detailed overview of my professional background, including skills, work experience, and education. You can view or download the full resume by clicking the button below.
                        </span>
                        <Button style={{width:'10rem', height: '3rem'}} label="View Resume" icon="pi pi-download" severity="info" onClick={() => window.open('https://docs.google.com/document/d/1nTutAK7IBIYzLu4_YQYlwoUpJw4sHbAatJEQWUTJTPM/edit?tab=t.0#heading=h.tuwjulszayre', '_blank')} />
                    </div>
                </div> 
                <div style = {{display: 'flex', flexDirection:  'column', padding: '2rem', borderRadius: '8px',  border: '1px solid #ccc', width: '80%'}}>
                    <span style={{fontSize: '1.6rem', fontWeight: 'bold'}}>
                        Project Section! <span className="text-3xl">💼 </span>
                    </span>        
                    <div style={{display:'flex',flexDirection: 'row', flexWrap: "wrap", justifyContent: 'center', gap: '2rem',   width: '100%', marginTop: '2rem'}}>
                        {
                            data.map((item, index) => (
                                <Card key={index} title={item.title} subTitle={item.subtitle} header={header} style={{ width: '20rem', height: '40rem' }}>
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