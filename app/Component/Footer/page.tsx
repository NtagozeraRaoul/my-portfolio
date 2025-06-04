import { Avatar } from "primereact/avatar";

export default function Footer() {
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '2rem',
                fontSize: '1.2rem',
                padding: '1rem 1rem',
                color: '#FFBC20',
                textDecoration: 'none',
                cursor: 'pointer',
            }}>
                Let's Connect: <a href="mailto:ntagozeraraoul@gmail.com" style={{ color: '#FFBC20', textDecoration: 'none', }}>ntagozeraraoul@gmail.com</a>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
            }}>
                <Avatar image="linkedin.png" shape="circle" /> Ntagozera Raoul
            </div>
        </>
    )
}