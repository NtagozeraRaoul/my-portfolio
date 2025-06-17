"use client";
import React from "react";
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                            // color: '#000000',
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
            {/* Title */}
            <div style={{
                // backgroundColor: 'green',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <span style={{ fontSize: '3.2rem', width: '65%', fontWeight: 'bold', textAlign: 'center', }}>
                    Software Developer with Background in coding
                </span>
            </div>

            {/* Introduction  */}

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
            }}>
                <p style={{
                    // backgroundColor: 'red',
                    width: '50%',
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    lineHeight: '2rem',

                }}>
                    {content}
                </p>
            </div>
            {/* View Works */}
            <div style={{
                display: 'flex',
                // backgroundColor: 'red',
                justifyContent: 'center',
                marginTop: '1rem',
            }}>
                <div onClick={() => {router.push('/Experience');}} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.9rem',
                    backgroundColor: 'white',
                    color: '#000000',
                    borderRadius: '2rem',
                    padding: '1rem 1rem',
                    cursor: 'pointer',
                    // opacity: '0.8',
                }}>
                    <span style={{ fontWeight: "bold" }}>View Works</span>
                    <i className="pi pi-arrow-up-right" style={{ color: '#FFBC20', backgroundColor: 'black', borderRadius: '2rem', padding: '0.6rem' }}></i>
                </div>
            </div>
            {/* Language */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '2rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1.7rem',
                    backgroundColor: 'grey',
                    color: '#000000',
                    borderRadius: '2rem',
                    padding: '1rem 1rem',
                    opacity: '0.9',
                }}>
                    {Language.map((language) => (
                        <div key={language.id}>
                            <img src={language.image} alt={language.name} style={{ width: '3rem', height: '3rem' }} />
                        </div>
                    ))}</div>
            </div>
        </div>
    )
}