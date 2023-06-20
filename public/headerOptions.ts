import { 
    faInfo, 
    faBook,
    faChartArea,
    faEnvelope
} 
from "@fortawesome/free-solid-svg-icons";

const headerOptions = [
    {
        name: "داشبورد",
        icon: faInfo,
        href: "/",
        active: true,
        namespace: "dashboard",
    },
    {
        name: "فرم‌ها",
        icon: faEnvelope,
        href: "/forms",
        active: false,
        namespace: "forms"
    },
    {
        name: "نمودارها",
        icon: faChartArea,
        href: "/charts",
        active: false,
        namespace: "charts"
    },
    {
        name: "صفحات",
        icon: faBook,
        href: "/pages/404",
        active: false,
        namespace: "pages"
    },
]

export default headerOptions;