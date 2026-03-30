import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About = () => {
  return (
    <Box 
      id="about" 
      sx={{ 
        bgcolor: '#080808', // Matches your dark theme
        py: { xs: 8, md: 12 }, 
        color: 'white' 
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 4, md: 10 }} 
          alignItems="center"
        >
          {/* Left: Image/Illustration */}
          <Box 
            sx={{ 
              flex: 1,
              width: '90%',
              maxWidth: { xs: '350px', md: '450px' },
              borderRadius: '40px', // Large rounded corners like the image
              overflow: 'hidden',
              bgcolor: '#1a1a2e', // Slight background color for the image box
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end', // Keeps character at bottom
            //   pt: 4
            }}
          >
            <img 
              src="/pic2.jpg" 
              alt="About Illustration" 
              style={{ width: '100%', height: 'auto' }} 
            />
          </Box>

          {/* Right: Content */}
          <Box sx={{ flex: 1 }}>
           
            
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 2, 
                lineHeight: 1.3,
                fontSize: { xs: '1.4rem', md: '2rem' }
              }}
            >
              I am passionate about creating <span style={{ color: '#f04e23' }}>beautiful & functional</span> software that makes a positive impact.
            </Typography>

            <Typography 
              sx={{ 
                color: '#a0a0a0', 
                mb: 4, 
                lineHeight: 1.8, 
                fontSize: '1.05rem' 
              }}
            >
              As a software Engineering student passionate about leveraging technology to solve real-world problems, 
              I’m excited to introduce myself. With strong analytical and problem-solving skills, 
              I bring a solid foundation in software Engineering principles and modern programming languages 
              like React Native, Spring Boot, and Node.js.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: '#333', // Dark grey button like the image
                color: '#fff',
                borderRadius: '30px',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#f04e23', // Glow orange on hover
                }
              }}
            >
              Read More
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;