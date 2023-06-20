import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import Logo from "@public/assets/images/logo.png";
import { CSSProperties } from "react";
import ThemeToggler from "./ThemeToggler";
import headerOptions from "@public/headerOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

const ActivationElement = ({ style }: { style: CSSProperties }) => {
    return(
        <>
            <div className="activationElement absolute top-0 bg-light-mode-primary dark:bg-dark-mode-primary dark:child:text-white child:text-dark transition rounded-r-full py-6 px-3 w-full" style={style}>
                <div className="absolute left-0 top-[-21%] child:transition">
                    <div className="rounded-full w-[30px] h-[30px] bg-light-mode-secondary dark:bg-dark-mode-secondary absolute bottom-0 left-0"></div>
                    <div className="border-l-[15px] border-t-[15px] border-light-mode-primary dark:border-dark-mode-primary bg-transparent"></div>
                </div>
                <div className="absolute left-0 top-[100%] child:transition">
                    <div className="rounded-full w-[30px] h-[30px] bg-light-mode-secondary dark:bg-dark-mode-secondary absolute top-0 left-0"></div>
                    <div className="border-l-[15px] border-t-[15px] border-light-mode-primary dark:border-dark-mode-primary bg-transparent"></div>
                </div>
                &nbsp;
            </div>
        </>
    )
}

const Header = () => {

    const optionsRef = useRef<HTMLDivElement>(null);
    const [activeOptionProperties, setActiveOptionProperties] = useState<CSSProperties>({transform: "translateY(0)"});
    const router = useRouter();
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const optionIsActive = (option: any) => {
        if(router.asPath === "/" && option.namespace === "dashboard"){
            return true;
        }else{
            let relPath = router.asPath;
            return relPath.includes(option.namespace);
        }
    }

    useEffect(() => {
        const domOptions = optionsRef.current?.children;
        headerOptions.forEach((option: any) => {
            let domOption = (domOptions as any)[headerOptions.indexOf(option)];
            optionIsActive(option) ? setActiveOptionProperties({transform: `translateY(${domOption.offsetTop}px)`}) : null;
        })

    }, [router.asPath]);

    const signOutUser = () => {
        signOut().then(() => {
            if(typeof window !== "undefined"){
                window.location.href = process.env.NEXT_PUBLIC_NEXTAUTH_URL + "/signin";
            }
        })
    }

    const redirectToHome = () => {
        if(typeof window !== "undefined"){
            (window as any).location.href = process.env.NEXT_PUBLIC_NEXTAUTH_URL
        }
    }

    return(
        <>
            <div className="headerDesktop h-[800px] hidden lg:flex flex-col items-center justify-start relative">
                <Image className="pt-[40px] cursor-pointer" width="80" src={Logo} alt="logo" onClick={redirectToHome} />
                <div className="pt-[30px] w-full relative">
                    <ActivationElement style={activeOptionProperties} />
                    <div className="options flex flex-col items-center justify-start" ref={optionsRef}>
                        {
                            headerOptions.map(option => {
                                return(
                                    <div className="option w-full" key={option.name} >
                                        <Link href={option.href} legacyBehavior>
                                            <a className={`relative flex items-center justify-center focus:outline-none ${optionIsActive(option) ? "dark:child:text-white child:text-dark" : "child:text-lightDark dark:child:text-lightWhite"} py-6 px-3 transition`}>
                                                <FontAwesomeIcon icon={option.icon} className={`${optionIsActive(option) ? "child:fill-dark dark:child:fill-white" : "child:fill-lightWhite"}`} />
                                                <span className="mx-2">{option.name}</span>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="absolute py-6 px-3 bottom-[20px] flex flex-col items-center">
                    <div className="dark:bg-[#151419] bg-[#d9b375] p-2 rounded-md text-white cursor-pointer whitespace-nowrap"
                        onClick={() => {
                            if(typeof window !== "undefined"){
                                window.location.href = process.env.NEXT_PUBLIC_NEXTAUTH_URL + "/panel"
                            }
                        }}
                    >
                        پنل کاربری
                    </div>
                    <div className="hidden lg:flex mt-3">
                        <ThemeToggler />
                    </div>
                    <div className="flex items-center child:text-[#D13B3B] mt-3 cursor-pointer" onClick={signOutUser}>
                        <FontAwesomeIcon className="child:fill-[#D13B3B]" icon={faRightFromBracket} />
                        <span className="mx-1">خروج</span>
                    </div>
                </div>
            </div>

            <div className="headerMobile w-full lg:hidden relative">
                <div className="controls flex items-center justify-between p-6 child:cursor-pointer shadow-md dark:shadow-none bg-white dark:bg-dark-mode-primary">
                    <div onClick={() => {setMenuOpened(!menuOpened)}}>
                        <FontAwesomeIcon icon={faBarsStaggered} size="xl" className="child:fill-dark dark:child:fill-white" />
                    </div>
                    <Image className="cursor-pointer" src={Logo} width="50" alt="logo" onClick={redirectToHome} />
                </div>

                <div className={`mobileMenu z-50 fixed flex flex-col items-center w-full h-screen bg-light-mode-secondary dark:bg-dark-mode-primary top-0 ${menuOpened ? "translate-y-0" : "translate-y-[-100%]"} right-0 transition duration-300 ease-in-out`}>
                    <div className="flex w-full items-center justify-between p-6">
                        <div onClick={() => {setMenuOpened(!menuOpened)}}>
                            <FontAwesomeIcon icon={faXmark} className="dark:child:fill-white child:fill-dark cursor-pointer" />
                        </div>
                        <Image className="cursor-pointer" src={Logo} width="50" alt="logo" onClick={redirectToHome} />
                    </div>
                    <div className="options w-full flex flex-col items-center mt-6">
                        {
                            headerOptions.map(option => (
                                <div className={`option mt-3 rounded-[10px] py-3 w-11/12 max-w-[300px] dark:hover:bg-transparentPurple hover:bg-[#d9b375] ${optionIsActive(option) ? "dark:bg-purple bg-[#d9b375]" : ""} transition`} key={option.name}>
                                    <a onClick={() => {
                                        router.push(option.href);
                                        setMenuOpened(false);
                                    }} className="cursor-pointer flex items-center justify-center dark:child:text-white child:text-dark focus:outline-none">
                                        <FontAwesomeIcon className="dark:child:fill-white child:fill-dark" icon={option.icon} />
                                        <span className="mx-1">{option.name}</span>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <div className="dark:bg-[#1f1e25] bg-[#d9b375] p-2 rounded-md text-white cursor-pointer w-11/12 mt-3 text-center whitespace-nowrap"
                        onClick={() => {
                            if(typeof window !== "undefined"){
                                window.location.href = process.env.NEXT_PUBLIC_NEXTAUTH_URL + "/panel"
                            }
                        }}
                    >
                        پنل کاربری
                    </div>
                    <button className="absolute flex items-center justify-center child:text-[#D13B3B] bottom-[40px] cursor-pointer" onClick={signOutUser}>
                        <FontAwesomeIcon className="child:fill-[#D13B3B]" icon={faRightFromBracket} />
                        <span className="mx-1">خروج</span>
                    </button>
                </div>
            </div>
        </>
    )
}


export default Header;