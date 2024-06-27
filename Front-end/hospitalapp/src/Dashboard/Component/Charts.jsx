import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import { Chart } from "react-google-charts";

const chartSetting = {
  xAxis: [
    {
      // label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];
export const data = [
  ["Disease Symptom", "Sufferers (in millions)"],
  ["Diarrhoea", 13],
  ["Stomach Pain", 83],
  ["Cough", 300],
  ["Headache", 1500],
  ["Fever", 500],
  ["Fatigue", 800],
  ["Sore Throat", 250],
  ["Back Pain", 540],
  ["Runny Nose", 600],
  ["Nausea", 400],
  ["Shortness of Breath", 350],
  ["Chest Pain", 200],
  ["Dizziness", 400],
  ["Muscle Pain", 450],
  ["Joint Pain", 300],
  ["Congestion", 500],
  ["Sneezing", 600],
  ["Skin Rash", 220],
  ["Swelling", 150],
  ["Vomiting", 150],
  ["Itching", 300],
  ["Insomnia", 400],
];


export const options = {
  title: "Symptoms",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
 


const valueFormatter = (value) => `${value}mm`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '95%',height:'350px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={12} md={6} sx={{width:'600px'}}>
          <BarChart
       
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Total Appointments', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
        </Grid>



        <Grid item sm={12} md={6} sx= {{marginTop:'10px'}}>
         <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}

      
    />
        </Grid>
      
      </Grid>
    </Box>
  );
}