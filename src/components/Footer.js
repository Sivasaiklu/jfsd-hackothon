import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#252B40',
        color: 'white',
        py: 3,
        mt: 'auto', // Pushes the footer to the bottom of the page
        position: 'relative', // Ensures footer is positioned relative to the page content
        bottom: 0, // Keeps the footer at the bottom
        width: '100%', // Full width for the footer
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="white" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
        <Typography variant="body2" color="white" align="center">
          <Link href="/privacy-policy" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="/terms-of-service" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
