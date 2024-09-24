import "./Footer.css";
import { socialLinkData } from "../../Data/socialLinkData";
import { pageLinkData } from "../../Data/pageLinkData";

export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinkData.map((links) => {
                    const { id, href, text } = links;
                    return (
                        <li key={id}>
                            <a href={href} className="footer-link">
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="footer-icons">
                {socialLinkData.map((sLinks) => {
                    const { id, href, target, icon } = sLinks;
                    return (
                        <li key={id}>
                            <a
                                href={href}
                                target={target}
                                className="footer-icon"
                            >
                                <i className={icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
};
