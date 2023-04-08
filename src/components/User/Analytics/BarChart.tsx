import { Stack, Box, Typography } from '@mui/material';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'DevZone',
        Registerd: 826,
        Submissions: 2400,
        Shortlisted: 2400,
    },
    {
        name: 'CodeSpace',
        Registerd: 864,
        Submissions: 1398,
        Shortlisted: 2210,
    },
    {
        name: 'DevFiesta',
        Registerd: 832,
        Submissions: 800,
        Shortlisted: 2290,
    },
    {
        name: 'DoonHacks',
        Registerd: 862,
        Submissions: 3908,
        Shortlisted: 2000,
    },
    {
        name: 'BuildIt',
        Registerd: 890,
        Submissions: 4800,
        Shortlisted: 2181,
    },
    {
        name: 'Code2Develop',
        Registerd: 987,
        Submissions: 3800,
        Shortlisted: 2500,
    },
    {
        name: 'InOvAtE',
        Registerd: 967,
        Submissions: 4300,
        Shortlisted: 2100,
    },
    {
        name: 'FireFly',
        Registerd: 953,
        Submissions: 4300,
        Shortlisted: 2100,
    },
    {
        name: 'KANCHI-Hack',
        Registerd: 836,
        Submissions: 4300,
        Shortlisted: 2100,
    },
    {
        name: 'HacktheCode',
        Registerd: 3490,
        Submissions: 4300,
        Shortlisted: 2100,
    },
    {
        name: 'Battleground',
        Registerd: 3490,
        Submissions: 4300,
        Shortlisted: 2100,
    },
    {
        name: 'LITT-Hack',
        Registerd: 3490,
        Submissions: 4300,
        Shortlisted: 2100,
    },
];

const BarchartGraph = () => {
    return (
        <div style={{ margin: "30px 60px" }}>
        <Typography variant="HeadlineSmall" color="primary">CodeArena Participation</Typography>
        <Box sx={{
            marginTop: 2,
            alignItems: "center",
            width: "100%", }}>
            <Stack sx={{ alignItems: "center" }}>
                <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            width={150}
                            height={40}
                            data={data}
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip />
                            <Legend iconType="square" iconSize={20}  />
                            <Bar dataKey="Registerd" fill="#540d6e" />
                            <Bar dataKey="Submissions" fill="#ee4266" />
                            <Bar dataKey="Shortlisted" fill="#fe7f2d" />
                    </BarChart>
                </ResponsiveContainer>
            </Stack>
        </Box>
    </div>
    );
}

export default BarchartGraph