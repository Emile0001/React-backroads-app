import { pageLinkData } from "../../Data/pageLinkData";

export const PageLinks = ({ linkClass }) => {
    return (
        <>
            {pageLinkData.map((pLinks) => {
                const { id, href, text } = pLinks;
                return (
                    <li key={id}>
                        <a href={href} className={linkClass}>
                            {text}
                        </a>
                    </li>
                );
            })}
        </>
    );
};
// className="nav-link"
