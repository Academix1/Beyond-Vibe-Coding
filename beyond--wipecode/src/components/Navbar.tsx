import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';

const pages = ['Dashboard', 'Chapters', 'Resources', 'Settings'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(140deg,rgb(6, 12, 18) 0%,rgb(41, 45, 179) 50%,rgb(36, 63, 185) 100%)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.12)'
      }}
    >
      <Container maxWidth={false}>
        <Toolbar sx={{ minHeight: { xs: 48, md: 56 } }}>
          {/* Logo - Desktop */}
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 32 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            VIBE-CODE
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                mt: 1,
                '& .MuiPaper-root': {
                  backgroundColor: 'primary.light'
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    color: 'white',
                    transition: 'color 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'rgb(21,12,12)' // Light blue color
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'white',
            }}
          >
            WIPECODE
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'flex-end'
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  mx: 0.5,
                  my: 0.5,
                  color: 'white',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  padding: '4px 12px',
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'rgb(0,0,0)' // Light blue color
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