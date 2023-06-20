import { GeneralContext } from "@context/GeneralContextProvider";
import { useContext } from "react";

const LayoutIntro = () => {
    // const [context, setContext] = useContext(GeneralContext);

    return(
        <div className="flex items-center justify-between">
            <div className="welcome flex items-center justify-center w-full">
                <p className="mx-2 text-dark dark:text-white font-danaDemiBold">Signed in as felan@gmail.com</p>
            </div>
        </div>
    )
}

export default LayoutIntro;