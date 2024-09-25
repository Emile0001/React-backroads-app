import { socialLinkData } from "../../Data/socialLinkData";

export const SocialLinks = ({ linkClass }) => {
    return (
        <>
            {socialLinkData.map((sLinks) => {
                const { id, href, target, icon } = sLinks;
                return (
                    <li key={id}>
                        <a
                            href={href}
                            target={target}
                            className={linkClass}
                            rel="noreferrer"
                        >
                            <i className={icon}></i>
                        </a>
                    </li>
                );
            })}
        </>
    );
};
// className="nav-icon"
