import { Radar } from "react-chartjs-2";


const data = {
    labels: ["Explorer", "Safari", "Chrome", "Firefox"],
    datasets: [{
        data: [32, 24, 35, 29],
        backgroundColor: "#62447e99",
        lineTension: 0.2,
        pointStyle: false as any,
        min: 0,
        max: 40,
    }]
}

const options = {
    responsive: true,
    scales: {
        r: {
            angleLines: {
                display: true,
                color: "#252331",
            },
            beginAtZero: true,
            grid: {
                color: "#352e40",
            },
            ticks: {
                backdropColor: "transparent",
                stepSize: 10,
            },
            
        
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    }
}


export default function RadarChart() {
    return(
        <Radar
            data={data} 
            options={options}
            style={{
                width:"100%",
                maxWidth: "400px"
            }}
        />
    );
}