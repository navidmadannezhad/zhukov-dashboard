import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuth = (shouldRedirect: boolean) => {
    // const session = useSession();
    // const router = useRouter();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // useEffect(() => {
    //     if (session.data === null) {
    //         if (shouldRedirect && router.route !== '/signin') {
    //             if(typeof window !== "undefined"){
    //                 window.location.href = process.env.NEXT_PUBLIC_NEXTAUTH_URL+"/signin";
    //             }
    //         }
    //         setIsAuthenticated(false);
    //     } else if (session.data !== undefined) {
    //         if ((session.data as any).error === "RefreshAccessTokenError") {
    //             signOut({ redirect: false }).then(res => {
    //                 if(typeof window !== "undefined"){
    //                     window.location.href = process.env.NEXT_PUBLIC_NEXTAUTH_URL+"/signin";
    //                 }
    //             });
    //         }
    //         setIsAuthenticated(true);
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [session]);

    // return isAuthenticated;
    return true;
}

export default useAuth;