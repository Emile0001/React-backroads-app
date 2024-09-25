import { pageLinkData } from "../../Data/pageLinkData";
import { PageLink } from "./PageLink";

export const PageLinks = ({ linkClass }) => {
    return (
        <>
            {pageLinkData.map((pLinks) => {
                return (
                    <PageLink
                        pLinks={pLinks}
                        key={pLinks.id}
                        linkClass={linkClass}
                    ></PageLink>
                );
            })}
        </>
    );
};
// className="nav-link"
