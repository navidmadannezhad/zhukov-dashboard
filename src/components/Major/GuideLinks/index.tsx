import Link from "next/link";
import { useRouter } from "next/router";

interface Props{
    links: {
        title: string;
        url: string;
    }[];
}

const GuideLinks = ({ links }: Props) => {

    const router = useRouter();

    return(
        <div className="w-full">
            <ul className="flex list-none flex-row flex-wrap border-b-0 pl-0 mt-6 mb-6">
                {links && links.map((link, i) => (
                    <li role="presentation" key={i}>
                        <Link href={link.url} className={`pageTabs-tab ${router.asPath === link.url ? "bg-transparentPurple" : ""}`} aria-selected="true">
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GuideLinks;