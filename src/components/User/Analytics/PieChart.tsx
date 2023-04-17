import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// import { Box, Stack, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { PiChartGraph } from '@/components/User/Dashboard/types';
import style from "@/styles/typography-styles.module.css";


interface graph {
  data?: PiChartGraph[];
}

const dummydata: PiChartGraph[] = [
  {
    color: "orange",
    name: "string",
    value: 300,
  },
  { name: 'Group A', value: 400, color: 'yellow' },
  { name: 'Group B', value: 300, color: 'orange' },
  { name: 'Group C', value: 300, color: 'red' },
  { name: 'Group D', value: 200, color: 'green' },
];

// const COLORS = [
//   "#fff444", "#235345", "#124652", "#234513"
// ]

// const renderActiveShape = ({props}: any) => {
//   const RADIAN = Math.PI / 180;
//   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

const PieChartGraph = ({ data }: graph) => {
  // const [state, setState] = React.useState(0);

  //   const onPieEnter = ({index} :any) => {
  //     setState(index);
  //   };
  const dataaaa = data ? data : dummydata;
  return (
      <div style={{ margin: "30px 60px" }}>
          {/* <Typography variant="HeadlineSmall" color="primary"> */}
          <p className={style.HeadlineSmall}>
            Submissions
            {/* </Typography> */}
            </p>
          <Box sx={{
              marginTop: 2,
              alignItems: "center",
              width: "100%", }}>
              <Stack sx={{ alignItems: "center" }}>
        <ResponsiveContainer width="80%" height={400}>
          <PieChart height={400} style={{ display: "flex" }}>
            <Pie data={dataaaa} dataKey="value" cx="50%" cy="50%" outerRadius={"80%"} label>
              {
                dataaaa.map((dat, index) => (
                  <Cell key={`cell-${index}`} fill={dat.color} />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="80%" height={400}>
          <PieChart height={400} style={{ display: "flex" }}>
            <Pie data={dataaaa} dataKey="value" cx="50%" cy="50%" outerRadius={"80%"} innerRadius={"60%"} label>
              {
                dataaaa.map((dat, index) => (
                  <Cell key={`cell-${index}`} fill={dat.color} />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
              </Stack>
          </Box>
      </div>
  );
}

export default PieChartGraph
{/* <PieChart width={400} height={400}>
    <Pie
      // activeIndex={state}
      // activeShape={renderActiveShape}
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      // onMouseEnter={() => onPieEnter}
    />
  </PieChart> */}