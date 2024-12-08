import * as React from 'react';
import { Container, Typography, Box } from '@mui/material'; 
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Welcome to Our Course Feedback Platform
        </Typography>
        <Typography variant="h6" paragraph>
          Share your feedback and help us improve the learning experience!
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <img 
            src="https://www.zonkafeedback.com/hubfs/On%20Premise%20Feedback%20System.png" 
            alt="Course Feedback System" 
            style={{ maxWidth: '550px', height: '398px' }} // Ensure the image scales correctly
          />
        </Box>

       
      </Box>
    </Container>
  );
}
