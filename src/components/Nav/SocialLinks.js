import { socialLinkData } from "../../Data/socialLinkData";

export const SocialLinks = () => {
    return (
        <>
            {socialLinkData.map((sLinks) => (
                <li>
                    <a
                        href={sLinks.href}
                        target={sLinks.target}
                        className="nav-icon"
                        rel="noreferrer"
                    >
                        <i className={sLinks.icon}></i>
                    </a>
                </li>
            ))}
        </>
    );
};
