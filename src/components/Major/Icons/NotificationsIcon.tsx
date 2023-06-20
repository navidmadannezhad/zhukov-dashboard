import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props{
    className?:  string
}

const NotificationsIcon = ({ className }: Props) => {
    return(
        <div className="relative">
            <FontAwesomeIcon icon={faBell} size="2xl" className={className} />
            <div className="h-[10px] w-[10px] bg-[#67E42C] rounded-full absolute right-0 bottom-0"></div>
        </div>
    )
}

export default NotificationsIcon;