import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '0-18',
    male: 20,
    female: 30,
    amt: 2400,
  },
  {
    name: '18-21',
    male: 30,
    female: 10,
    amt: 2210,
  },
  {
    name: '21-40',
    male: 40,
    female: 20,
    amt: 2290,
  },
  {
    name: '24-27',
    male: 10,
    female: 30,
    amt: 2000,
  },
  {
    name: '27-30',
    male: 40,
    female: 20,
    amt: 2181,
  },
  {
    name: '30-35',
    male: 30,
    female: 20,
    amt: 2500,
  },
  {
    name: '35-40',
    male: 20,
    female: 20,
    amt: 2100,
  },
];


const MultipleBarChart = () => (
  <ResponsiveContainer width="100%" height={230}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="female" fill="#FF9100" minPointSize={5} />
      <Bar dataKey="male" fill="#29A439" minPointSize={10} />
    </BarChart>
  </ResponsiveContainer>

);

export default MultipleBarChart;
