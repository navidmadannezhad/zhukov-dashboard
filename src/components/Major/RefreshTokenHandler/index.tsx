import { useEffect } from "react";
import { useSession } from "next-auth/react";

interface Props{
    setInterval: Function;
}

const RefreshTokenHandler = ({ setInterval }: Props) => {
    const session = useSession();

    useEffect(() => {
        if(!!session && !!session.data) {
            const timeRemaining = Math.round(((((session as any).data.accessExpiryDate - 30 * 60 * 1000) - Date.now()) / 1000));
            setInterval(timeRemaining > 0 ? timeRemaining : 0);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session])

    return null;
}

export default RefreshTokenHandler;