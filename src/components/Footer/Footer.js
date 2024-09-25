import "./Footer.css";

import { SocialLinks } from "../Nav/SocialLinks";
import { PageLinks } from "../Nav/PageLinks";

export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                <PageLinks linkClass="footer-link"></PageLinks>
            </ul>
            <ul className="footer-icons">
                <SocialLinks linkClass="footer-icon"></SocialLinks>
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"> {new Date().getFullYear()} </span> all rights
                reserved
            </p>
        </footer>
    );
};
