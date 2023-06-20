import { NextPage } from "next";
import ServerError500Page from "@components/Templates/Pages/ServerError500Page";
import PagesGuideLinks from "@components/Apps/Pages/PagesGuideLinks";

const ServerError500: NextPage = () => {
    return(
        <>
            <PagesGuideLinks />
            <ServerError500Page />
        </>
    )
}

export default ServerError500;