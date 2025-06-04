
"use client";
import { Avatar } from "primereact/avatar";
import Footer from "../Component/Footer/page";
import { useRouter } from 'next/navigation';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function Contact() {
    const router = useRouter();
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
                    <div style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', }} onClick={()=> {
                        router.push('/');
                    }}>
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
            </div>

            {/* Introduction  */}

            <div style={{ paddingLeft: '10rem', paddingTop: '3rem'}}>
                <div>
                    <span style={{fontSize: '2rem', fontWeight: 'bold'}}>
                        Get in Touch! <span className="text-3xl">👋</span>
                    </span>
                </div>
                <div style={{display: 'flex', gap: '7rem'}}>
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
                    <div style={{gap: '0.4rem', display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="email" style={{fontSize: '1rem', fontWeight: 'bold'}}>Email : </label>
                        <div className="gap-0 flex flex-column">
                            <InputText
                                name={"label"}
                                type="email"
                                // value={
                                //     selectedFieldNames[index] ??
                                //     sendFormField[index]?.label ??
                                //     ""
                                // }
                                // onChange={handleFieldInputChange}
                                placeholder="Emaiil Address"
                                style={{width: '400px', height: '50px', borderRadius: '8px', padding: '1rem', marginTop: '0.5rem', border: '1px solid #ccc'}}
                            />

                        </div>
                        <label htmlFor="message" style={{fontSize: '1rem', fontWeight: 'bold'}}>Message : </label>
                        <div className="gap-0 flex flex-column">
                            <InputTextarea 
                                // value={value} 
                                // onChange={(e) => setValue(e.target.value)} 
                                rows={5} 
                                cols={30} 
                                placeholder="Message"
                                style={{width: '400px', height: '100px', borderRadius: '8px', padding: '1rem', marginTop: '0.5rem', border: '1px solid #ccc'}}

                            />
                        </div>
                        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                             <Button 
                                label="Send" 
                                severity="success" 
                                outlined 
                                // icon="pi pi-star"
                                style={{width: '150px', height: '50px', borderRadius: '8px', border: '1px solid #FFBC20', }}
                            />
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* Footer section */}
        </div>
    )
}