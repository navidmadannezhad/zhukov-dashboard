import LineChart from "@components/Major/Charts/LineChart";
import VisitorsChart from "@components/Major/Charts/VisitorsChart";
import RequestChart from "@components/Major/Charts/RequestChart";
import TimeChart from "@components/Major/Charts/TimeChart";
import RadarChart from "@components/Major/Charts/RadarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ChartsPage = () => {
    return(
        <div className="w-full flex flex-col items-center gap-6 mt-6">

            <div className="flex items-center justify-between flex-wrap gap-2 w-11/12">
                <div className="dark:bg-dark-mode-secondary bg-light-mode-secondary rounded-xl border-solid border dark:border-gray border-lightWhite p-3 w-full max-w-[300px]">
                    <p className="text-xs text-text-gray">مجموع بازدید کننده ها</p>
                    <p className="text-3xl mt-1 -mb-3">۱.۶K+</p>
                    <div className="flex items-end justify-between">
                        <VisitorsChart />
                        <p className="text-[#b6534f] ml-3 text-xs"><FontAwesomeIcon icon={faArrowDown} /> ۱۷%</p>
                    </div>
                </div>
                <div className="dark:bg-dark-mode-secondary bg-light-mode-secondary rounded-xl border-solid border dark:border-gray border-lightWhite p-3 w-full max-w-[300px]">
                    <p className="text-xs text-text-gray">زمان سپری شده</p>
                    <p className="text-3xl mt-1 -mb-3">۸.۴۹</p>
                    <div className="flex items-end justify-between">
                        <TimeChart />
                        <p className="text-[#6d7990] ml-3 text-xs"><FontAwesomeIcon icon={faArrowUp} /> ۲۴%</p>
                    </div>
                </div>
                <div className="dark:bg-dark-mode-secondary bg-light-mode-secondary rounded-xl border-solid border dark:border-gray border-lightWhite p-3 w-full max-w-[300px]">
                    <p className="text-xs text-text-gray">میانگین درخواست ها</p>
                    <p className="text-3xl mt-1 -mb-3">۱۰.۴</p>
                    <div className="flex items-end justify-between">
                        <RequestChart />
                        <p className="text-[#3f8c7a] ml-3 text-xs"><FontAwesomeIcon icon={faArrowUp} /> ۱۰%</p>
                    </div>
                </div>
            </div>

            <div className="flex items-start flex-wrap justify-between gap-2 w-11/12">
                <div className="w-full max-w-[800px]">
                    <LineChart />
                </div>
                <div className="w-full max-w-[400px]">
                    <RadarChart />
                </div>
            </div>

        </div>
    )
}

export default ChartsPage;