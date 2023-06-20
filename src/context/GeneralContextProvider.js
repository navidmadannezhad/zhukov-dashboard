import { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {

    const [contextData, setContextData] = useState({
        toast:{
            message: "",
            state: "",
        },
        userInfo:{
            email: "",
            is_active: false,
            is_superuser: false,
            is_staff: false,

            userInfoLoaded: false,
        },
    })

    return(
        <GeneralContext.Provider value={[contextData, setContextData]}>
            {children}
        </GeneralContext.Provider>
    )
}

export { GeneralContextProvider, GeneralContext };