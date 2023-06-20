import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification = () => {
    return(
        <div className="notif w-full cursor-pointer bg-transparentPurple p-3 rounded-[10px]">
            <div className="font-danaMedium text-lg text-white">
                پاسخ به تیکت
            </div>
            <div className="flex items-center mt-2">
                <FontAwesomeIcon icon={faArrowLeftLong} />
                <div className="leading-[30px] text-sm mr-2">
                        به تیکت شما در تاریخ ۱۲/۱۲/۱۲ پاسخ داده شد
                </div>
            </div>
        </div>
    )
}

export default Notification;