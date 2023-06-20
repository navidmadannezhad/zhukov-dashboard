import react, { ReactNode, useEffect, useRef } from "react";

interface Props{
    options: {
        id: number;
        title: string;
    }[];
    tabs: {
        id: number;
        node: ReactNode;
    }[];
}

const PageTabs = ({ options, tabs }: Props) => {

    const tabList = useRef<HTMLDivElement>(null);
    const navList = useRef<HTMLUListElement>(null);

    useEffect(() => {
        // activating the first tab and first nav style
        (navList as any).current.children[0].children[0].setAttribute("data-te-nav-active", "");
        (tabList as any).current.children[0].setAttribute("data-te-tab-active", "");
    }, []);

    return(
        <div className="w-full">
            <ul ref={navList} className="flex list-none flex-row flex-wrap border-b-0 pl-0 mt-6" role="tablist" data-te-nav-ref>
                {options && options.map(option => (
                    <li role="presentation" key={option.id}>
                        <a href={`#tabs-${option.id}`} className="pageTabs-tab" data-te-toggle="pill" data-te-target={`#tabs-${option.id}`} role="tab" aria-controls={`tabs-${option.id}`} aria-selected="true">
                            {option.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div ref={tabList} className="mt-12">
                {tabs && tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={`hidden opacity-0 ${tab.id === 0 ? "opacity-100" : ""} transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
                        id={`tabs-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`tabs-${tab.id}-tab`}
                        >
                        {tab.node}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PageTabs;