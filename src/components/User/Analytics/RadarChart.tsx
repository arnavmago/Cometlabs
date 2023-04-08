import { Box } from "@mui/material";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

interface graph {
    dataa: {}
}

const RadarChartGraph = ({ dataa }: graph) => {
    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

    const data = {
        labels: Object.keys(dataa),
        datasets: [
            {
                data: Object.values(dataa),
                backgroundColor: 'rgba(0, 0, 255, 0.5)', // primary with opacity 0.8
                borderColor: "rgba(255, 90, 90, 0.8)", // primary
                borderWidth: 1,
                hoverBorderColor: "black" //onsurfacevariant
                //onsurfacevariant
            },
        ],
    };

    const options = {
        Legend: {
            fontColor: "rgba(255, 22, 100, 1)"
        },
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 10,
                angleLines: {
                    color: "outline.main"
                },
                grid: {
                    color: "outline.main"
                },
                pointLabels: {
                    color: "#ABC7FF"
                }
                // outline borders and lines and angles
            },
        },
        plugins: {
            legend: {
                display: false,
            }
        },
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "auto", width: { xs: "100%", md: "60%" } }}>
            <Radar data={data} options={options} />
            {/* <Stack sx={{ alignItems: "center" }}>
                <ResponsiveContainer width="50%" aspect={1 / 1}>
                    <RadarChart outerRadius={"80%"} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar name="Tech Stacks" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </ResponsiveContainer>
            </Stack> */}
        </Box>
    );
}

// const data2: RadarChartGraph[] = [
//   {
//     "subject": "Math",
//     "A": 120,
//     "fullMarks": 150
//   },
//   {
//     "subject": "Chinese",
//     "A": 98,
//     "fullMarks": 150
//   },
//   {
//     "subject": "English",
//     "A": 86,
//     "fullMarks": 150
//   },
//   {
//     "subject": "Geography",
//     "A": 99,
//     "fullMarks": 150
//   },
//   {
//     "subject": "Physics",
//     "A": 85,
//     "fullMarks": 150
//   },
//   {
//     "subject": "History",
//     "A": 65,
//     "fullMarks": 150
//   }
// ]

export default RadarChartGraph;