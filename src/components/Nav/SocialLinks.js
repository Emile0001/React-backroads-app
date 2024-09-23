export const SocialLinks = (props) => {
    const { href, target, icon } = props;

    return (
        <a href={href} target={target} className="nav-icon" rel="noreferrer">
            <i className={icon}></i>
        </a>
    );
};
