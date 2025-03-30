import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { useSidebar } from '../context/SidebarContext';

const pages = ['Dashboard', 'Chapters', 'Resources', 'Settings'];

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(140deg,rgb(16, 24, 32) 0%,rgb(24, 26, 64) 50%,rgb(15, 52, 175) 100%)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.12)'
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 1, sm: 2 } }}>
        <Toolbar 
          disableGutters
          sx={{ 
            minHeight: { xs: 48, md: 56 },
            py: 0.5
          }}
        >
          {/* Mobile Menu Button */}
          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              color: 'white'
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

          {/* Desktop Logo */}
          <CodeIcon sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            mr: 1, 
            fontSize: 24 
          }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              fontSize: '1rem',
              mr: 2
            }}
          >
            BEYOND-VIBE-CODE
          </Typography>

          {/* Mobile Logo */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' }, 
            alignItems: 'center' 
          }}>
            <CodeIcon sx={{ fontSize: 20, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                fontSize: '0.9rem'
              }}
            >
              VIBE-CODE
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'flex-end',
            gap: 0.5,
            overflow: 'auto',
            '&': {
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ 
                  color: 'white',
                  fontSize: { xs: '0.75rem', md: '0.85rem' },
                  fontWeight: 500,
                  padding: { xs: '4px 8px', md: '4px 12px' },
                  minWidth: 'max-content',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    transform: { md: 'translateY(-1px)' }
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            gap: 0.5,
            justifyContent: 'flex-end',
            flexGrow: 1,
            overflow: 'auto',
            '&': {
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ 
                  color: 'white',
                  fontSize: { xs: '0.75rem', md: '0.85rem' },
                  fontWeight: 500,
                  padding: { xs: '4px 8px', md: '4px 12px' },
                  minWidth: 'max-content',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    transform: { md: 'translateY(-1px)' }
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
        
      </Container>
    </AppBar>
  );
};

export default Navbar;