import { pageLinkData } from "../../Data/pageLinkData";

export const PageLinks = () => {
    return (
        <>
            {pageLinkData.map((pLinks) => {
                return (
                    <a href={pLinks.href} className="nav-link">
                        {pLinks.text}
                    </a>
                );
            })}
        </>
    );
};
