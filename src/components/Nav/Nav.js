import "./Nav.css";
import logo from "./../../images/logo.svg";
import { pageLinks } from "../../Data/pageLinks";
import { socialLinks } from "../../Data/socialLinks";

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button
                        type="button"
                        className="nav-toggle"
                        id="nav-toggle"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((links) => {
                        return (
                            <li key={links.id}>
                                <a href={links.href} className="nav-link">
                                    {links.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((sLinks) => {
                        return (
                            <li key={sLinks.id}>
                                <a
                                    href={sLinks.href}
                                    target={sLinks.target}
                                    className="nav-icon"
                                >
                                    <i className={sLinks.icon}></i>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};
