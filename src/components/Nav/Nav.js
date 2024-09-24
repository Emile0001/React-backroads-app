import "./Nav.css";
import logo from "./../../images/logo.svg";
import { socialLinkData } from "../../Data/socialLinkData";
import { pageLinkData } from "../../Data/pageLinkData";
import { PageLinks } from "./PageLinks";
import { SocialLinks, SocialLinks2 } from "./SocialLinks";

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
                    {pageLinkData.map((pLinks) => {
                        return (
                            <li key={pLinks.id}>
                                <PageLinks {...pLinks}></PageLinks>
                            </li>
                        );
                    })}
                </ul>

                <ul className="nav-icons">
                    <SocialLinks2></SocialLinks2>
                </ul>
            </div>
        </nav>
    );
};
