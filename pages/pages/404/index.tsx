import { NextPage } from "next";
import NotFound404Page from "@components/Templates/Pages/NotFound404Page";
import PagesGuideLinks from "@components/Apps/Pages/PagesGuideLinks";

const NotFound404: NextPage = () => {
    return(
        <>
            <PagesGuideLinks />
            <NotFound404Page />
        </>
    )
}

export default NotFound404;