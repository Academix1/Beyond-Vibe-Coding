import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',

        height: '90vh',
        width: '95vw',
        overflowX: '-moz-hidden-unscrollable',
        overflowY: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        transition:'blur 0.5s ease-in-out',
        backgroundImage: theme => `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        mt:2,
        color: 'white',
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{
          textAlign: 'left',
          marginLeft: { xs: '16px', md: '64px' },
          animation: 'fadeIn 1.5s ease-in-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          zIndex: 1, // Ensure content appears above background
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4,
            maxWidth: '900px',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.8rem', sm: '3.0rem', md: '3.2rem' },
              lineHeight: 1.1,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              color: 'rgba(226, 238, 227, 0.9)',
              mb: 2,
            }}
          >
            Future Begins Here !
          </Typography>
          
          <Box
            sx={{
              width: '100px',
              height: '4px',
              backgroundColor: '#42a5f5',
              mb: 3,
            }}
          />
          
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
            }}
          >
            Building development - one architecture, practice, and framework at a time.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/chapter/1')}
            sx={{
              backgroundColor: 'rgba(22, 44, 206, 0.9)',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 700,
              padding: '15px 40px',
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              boxShadow: '0 4px 15px rgba(0, 3, 5, 0.5)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(12, 1, 69, 0.8)',
                transform: 'translateY(-3px)',
                boxShadow: '0 20px 20px rgba(2, 18, 31, 0.7)',
              }
            }}
          >
            START LEARNING
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;