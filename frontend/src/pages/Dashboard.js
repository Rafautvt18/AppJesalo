import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Box, Container, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, Filler, ArcElement } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, Filler, ArcElement);


const Dashboard = () => {
  // Bar chart data
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  
  // Line chart data
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Visitors',
        data: [30, 40, 45, 60, 70, 80],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  // Pie chart data
  const pieData = {
  
    labels: ['Direct', 'Referral', 'Social', 'Email'],
    datasets: [
      {
        label: 'Traffic Sources',
        data: [55, 25, 15, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  // KPI Data
  const kpis = [
    { title: 'Total Sales', value: '$120,000' },
    { title: 'Total Visitors', value: '15,000' },
    { title: 'Conversion Rate', value: '3.5%' },
    { title: 'Customer Satisfaction', value: '95%' },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
        Dashboard de Indicadores
      </Typography>
      
      {/* KPIs Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', mb: 4 }}>
        {kpis.map((kpi) => (
          <Box key={kpi.title} sx={{ flex: 1, padding: 2, textAlign: 'center', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', margin: '10px' }}>
            <Typography variant="h6">{kpi.title}</Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{kpi.value}</Typography>
          </Box>
        ))}
      </Box>

      {/* Charts Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', sm: 'row' }, mb: 4 }}>
        <Box sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Sales Bar Chart
          </Typography>
          <Bar data={barData} />
        </Box>
        <Box sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Visitors Line Chart
          </Typography>
          <Line data={lineData} />
        </Box>
      </Box>

      {/* Pie Chart Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Traffic Sources Pie Chart
          </Typography>
          <Pie data={pieData} />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
