import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Prosche Sales Last Year',
    },
  },
};
  
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
labels,
datasets: [
    {
    label: 'Sales ',
    data: labels.map(() => faker.datatype.number({ min: 70, max: 550 })),
    borderColor: 'rgb(12,12,12)',
    backgroundColor: 'tomato',
    }
],
};

interface LineChartProps {}

export const LineChart: React.FC<LineChartProps> = () => {
    return <Line options={options} data={data} />;
}
