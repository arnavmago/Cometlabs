import { LineChartGraph } from "@/components/User/Dashboard/types";
import { Box, Stack, Typography } from "@mui/material";
import { LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Line, CartesianGrid } from 'recharts';

interface graph {
    data?: LineChartGraph[];
}

const LineChartGraph = ({ data }: graph) => {
    console.log(data)
    return (
        <div style={{ margin: "30px 60px" }}>
            <Typography variant="HeadlineSmall" color="primary">Platform Users</Typography>
            <Box sx={{
                marginTop: 2,
                alignItems: "center",
                width: "100%", }}>
            <Stack sx={{ alignItems: "center" }}>
                <ResponsiveContainer width="100%" aspect={7 / 3}>
                    <LineChart data={data ? data : dataDummy}>
                        <XAxis dataKey={"name"} />
                        <YAxis dataKey={"amt"}/>
                        <Tooltip />
                            <CartesianGrid />
                        <Legend iconType="square" iconSize={20} />
                            <Line type="monotone" dataKey="Users" stroke="#8884d8" activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="Registrations" stroke="#ee4266" activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="Submissions" stroke="#004b23" activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </Stack>
            </Box>
        </div>
    );
}


const dataDummy: LineChartGraph[] = [
    {
        amt: 1000,
        name: 'Dec 21',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 20,
        name: 'Jan 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 60,
        name: 'Feb 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 70,
        name: 'Mar 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 120,
        name: 'Apr 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 120,
        name: 'May 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 120,
        name: 'Jun 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 120,
        name: 'Jul 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 120,
        name: 'Aug 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
    {
        amt: 120,
        name: 'Sep 22',
        Users: 400,
        Registrations: 300,
        Submissions: 500,
    },
];


export default LineChartGraph