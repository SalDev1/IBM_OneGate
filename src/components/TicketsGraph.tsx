import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';

const TicketsGraph: React.FC = () => {
  // Sample data for demonstration
  const amenities = [
    { name: 'Gym', usage: 100 },
    { name: 'Pool', usage: 80 },
    { name: 'Clubhouse', usage: 60 },
    { name: 'Play Area', usage: 70 }
    // Add more amenities as needed
  ];

  const bookings = [
    { date: '2024-05-01', count: 1 },
    { date: '2024-05-02', count: 2 },
    { date: '2024-05-03', count: 1 },
    // Add more booking data as needed
  ];

  // State to track hover state of each card
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Grid container spacing={10} justifyContent="center" alignItems="center" style={{ marginLeft: '-40px' , overflow:"hidden"}}>
      <Grid item xs={12} md={6}>
        <Paper
          style={{ padding: '10px', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography variant="h5" gutterBottom>
            Amenities Usage
          </Typography>
          <BarChart width={300} height={200} data={amenities}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="usage" fill="#8884d8" />
          </BarChart>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper
          style={{ padding: '10px', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography variant="h5" gutterBottom>
            Bookings
          </Typography>
          <LineChart width={300} height={200} data={bookings}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TicketsGraph;
