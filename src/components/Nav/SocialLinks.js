import { socialLinkData } from "../../Data/socialLinkData";

export const SocialLinks = (props) => {
    const { href, target, icon } = props;

    return (
        <a href={href} target={target} className="nav-icon" rel="noreferrer">
            <i className={icon}></i>
        </a>
    );
};

export const SocialLinks2 = () => {
    return (
        <>
            {socialLinkData.map((sLinks2) => (
                <li>
                    <a
                        href={sLinks2.href}
                        target={sLinks2.target}
                        className="nav-icon"
                        rel="noreferrer"
                    >
                        <i className={sLinks2.icon}></i>
                    </a>
                </li>
            ))}
        </>
    );
};
