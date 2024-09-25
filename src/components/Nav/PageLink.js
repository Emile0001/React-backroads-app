export const PageLink = ({ linkClass, pLinks }) => {
    const { id, href, text } = pLinks;
    return (
        <li key={id}>
            <a href={href} className={linkClass}>
                {text}
            </a>
        </li>
    );
};
