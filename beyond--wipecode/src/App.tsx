import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';
import Home from './pages/Home';
import { SidebarProvider } from './context/SidebarContext';

const drawerWidth = 240;

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Permanent Sidebar - Desktop - Hidden on Home */}
      {!isHomePage && (
        <Box
          component="nav"
          sx={{
            width: { md: drawerWidth },
            flexShrink: 0,
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Sidebar variant="permanent" />
        </Box>
      )}

      {/* Temporary Sidebar - Mobile - Hidden on Home */}
      {!isHomePage && (
        <Box
          component="nav"
          sx={{
            display: { xs: 'block', md: 'none' }
          }}
        >
          <Sidebar variant="temporary" />
        </Box>
      )}

      {/* Main Content */}
      {/* Main Content */}
<Box
  component="main"
  sx={{
    flexGrow: 1,
    width: { 
      md: isHomePage ? '100%' : `calc(100% - ${drawerWidth}px)`
    },
    mt: '64px',
    overflow: isHomePage ? 'hidden' : 'auto' // Prevent scroll on Home
  }}
>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/chapter/:chapterId" element={<Lesson />} />
  </Routes>
</Box>

    </Box>
  );
}

function App() {
  return (
    <Router>
      <SidebarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppContent />
        </ThemeProvider>
      </SidebarProvider>
    </Router>
  );
}

export default App;