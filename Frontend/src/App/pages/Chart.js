import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

const data2 = [
    { name: 'A', value: 40 },
    { name: 'B', value: 30 },
    { name: 'C', value: 20 },
    { name: 'D', value: 10 },
]

const ChartPage = () => {
  const styles = {
    chartContainer: {
      width: '100%',
      height: 300,
      marginBottom: '20px',
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px"
    },
      page: {
          padding: "20px"
      }
  };

  return (
    <div style={styles.page}>
      <h1>Different Types of Charts</h1>

      <div style={styles.chartContainer}>
        <h2>Line Chart</h2>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartContainer}>
        <h2>Bar Chart</h2>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartContainer}>
        <h2>Area Chart</h2>
        <ResponsiveContainer>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
      </div>

        <div style={styles.chartContainer}>
            <h2>Pie Chart</h2>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" isAnimationActive={false} data={data2} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                </PieChart>
            </ResponsiveContainer>
        </div>

        <div style={styles.chartContainer}>
            <h2>Another Line Chart (with different data)</h2>
            <ResponsiveContainer>
                <LineChart data={data.map(item => ({...item, value: item.value * 2}))}> {/* Example data manipulation */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#FF5733" /> {/* Different color */}
                </LineChart>
            </ResponsiveContainer>
        </div>

    </div>
  );
};

export default ChartPage;