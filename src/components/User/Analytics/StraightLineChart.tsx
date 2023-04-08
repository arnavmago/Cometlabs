import { Box, Stack, Typography } from "@mui/material";
import { LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, CartesianGrid } from 'recharts';
import { LineChartGraph } from "@/components/User/Dashboard/types";

interface graph {
    data: LineChartGraph[];
}

const LineChartGraph = ({ data }: graph) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="LabelLarge">Rankings</Typography>
            <Stack sx={{ alignItems: 'center' }}>
                <ResponsiveContainer width="70%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey={"name"} />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid />
                        <Line type="linear" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </Stack>
        </Box>
    );
}


// const data: LineChartGraph[] = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];


export default LineChartGraph