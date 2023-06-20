import toast, { Toaster, ToastPosition } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import { GeneralContext } from '@context/GeneralContextProvider';

const toastConfig = {
    position: "top-center" as ToastPosition,
    duration: 3000
}

const Toast = () => {

    // const [context, setContext] = useContext(GeneralContext);

    // useEffect(() => {
    //     switch(context.toast.state){
    //         case "success":
    //             toast.success(context.toast.message, toastConfig);
    //             break;
    //         case "error":
    //             toast.error(context.toast.message, toastConfig);
    //             break;
    //         default:
    //             return;
    //     }
    // }, [context.toast])


    return (
        <div>
            <Toaster />
        </div>
    );
};

export default Toast;