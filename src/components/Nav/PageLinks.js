export const PageLinks = (props) => {
    const { href, text } = props;
    return (
        <a href={href} className="nav-link">
            {text}
        </a>
    );
};
