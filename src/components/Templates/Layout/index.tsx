import { ReactNode } from "react";
import Header from "./Header";
import ThemeToggler from "./Header/ThemeToggler";
import LayoutIntro from "./LayoutIntro";
import Toast from "@components/Major/Toast";

interface Props{
    children?: ReactNode
}

const Layout = ({ children }: Props) => {

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try{
    //             let res = await getUserInfo();
    //             if(!res.data.is_superuser){
    //                 window.location.href = process.env.NEXT_PUBLIC_NEXTAUTH_URL + "/panel";
    //                 throw new Error("Not Authorized")
    //             }
    //             setContext({
    //                 ...context,
    //                 userInfo:{
    //                     email: res.data.email,
    //                     is_active: res.data.is_active,
    //                     is_superuser: res.data.is_superuser,
    //                     is_staff: res.data.is_staff,

    //                     userInfoLoaded: true
    //                 }
    //             })
    //         }catch(err){
    //             console.log(err);
    //         }
    //     }
    //     if(isAuthenticated){
    //         fetchUserData();
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuthenticated]);

    return(
        <>
            {true ? (
                <div className="h-screen w-full flex justify-center">
                    <div className="lg:mt-12 w-full lg:w-[95%] flex flex-col items-start justify-start lg:flex-row lg:justify-center">

                        <Header />
                        <Toast />

                        <div className="rounded-full bg-dark-mode-secondary flex p-4 fixed bottom-[20px] right-[20px] lg:hidden">
                            <ThemeToggler />
                        </div>


                        <div className="rounded-0 flex flex-col items-center h-auto min-h-[100%] lg:min-h-0 lg:h-[800px] lg:p-12 p-6 lg:rounded-[50px] w-full max-w-[1500px] bg-light-mode-primary dark:bg-dark-mode-primary transition">

                            <div className="w-full h-[100%] overflow-y-auto">
                                <div className="w-full">
                                    <LayoutIntro />
                                </div>

                                <div className="w-full">
                                    {children}
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            ) : (
                <div className="h-screen w-full flex justify-center items-center">
                    <p>
                    در حال بررسی هویت کاربر ...
                    </p>
                </div>
            )}
        </>
    )
}

export default Layout;