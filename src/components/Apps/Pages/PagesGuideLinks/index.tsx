import GuideLinks from "@components/Major/GuideLinks";

const PagesGuideLinks = () => {
    return(
        <GuideLinks links={[
            {
                title: "صفحه 404",
                url:"/pages/404"
            },
            {
                title: "صفحه 500",
                url:"/pages/500"
            },
        ]} />
    )
}

export default PagesGuideLinks;