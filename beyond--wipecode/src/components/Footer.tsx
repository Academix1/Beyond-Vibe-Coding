import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Left Section */}
          <Box sx={{ maxWidth: 400 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              BEYOND-VIBE-CODE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building development skills one architecture, practice, and framework at a time.
            </Typography>
          </Box>

          {/* Middle Section */}
          <Box>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact@beyondvibecode.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Developer Lane, Tech City, TC 10001
            </Typography>
          </Box>

          {/* Right Section */}
          <Box>
            <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LinkedInIcon sx={{ mr: 1 }} />
              <Typography variant="body2">LinkedIn</Typography>
            </Link>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Beyond Vibe Code. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;