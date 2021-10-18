import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const data = [
  { name: '31/01', uv: 0 },
  { name: '01/02', uv: 1 },
  { name: '02/02', uv: 0.5 },
  { name: '03/02', uv: 2 },
  { name: '04/02', uv: 1.5 },
  { name: '05/02', uv: 3 },
];

const LineChartComponent = () => (
  <ResponsiveContainer width="100%" height={180}>
    <LineChart data={data}>
      <Line type="monotone" dataKey="uv" stroke="#29A439" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
