import { Line } from "react-chartjs-2";

const data = {
    labels: ["28Ma", "29Ma", "30Ma", "31Ma", "01Ap", "02Ap", "03Ap", "04Ap", "05Ap", "06Ap"],
    datasets: [{
        data: [105, 90, 70, 170, 205, 155, 110, 180, 250, 180],
        fill: false,
        borderWidth: 2,
        borderColor: "#9371b0",
        pointStyle: false as any,
        lineTension: 0.4,
    }]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
                drawTicks: false,
                tickColor: "transparent"
            },
            ticks: {
                align: "start" as any
            }
        },
        y: {
            min: 0,
            max: 300,
            ticks: {
                stepSize: 100,
            },
            grid: {
                tickBorderDash: [10,10],
                color: "#363243",
            }
        }
    },
    plugins:{
        legend: {
            display: false,
        }
    }
}

const LineChart = () => {
    return(
        <Line
            data={data}
            height={100}
            options={options}
            style={{
                width:"100%",
                maxWidth: "800px"
            }}
        />
    );
}

export default LineChart;