import { Avatar } from "primereact/avatar";
import './page.css'; // Assuming you have a CSS file for styles

export default function Footer() {
    return (
        <>
            <div className="email">
                Let's Connect: <a href="mailto:ntagozeraraoul@gmail.com" style={{ color: '#FFBC20', textDecoration: 'none', }}>ntagozeraraoul@gmail.com</a>
            </div>
            <div className="linkedin">
                <Avatar image="linkedin.png" shape="circle" /> Ntagozera Raoul
            </div>
        </>
    )
}