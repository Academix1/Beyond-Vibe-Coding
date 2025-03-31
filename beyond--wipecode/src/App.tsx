import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';
import Home from './pages/Home';
import Footer from './components/Footer';
import { SidebarProvider } from './context/SidebarContext';

const drawerWidth = 280; // Defined once here

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'rgb(207, 206, 206)',
    }}>
      <Navbar />

      <Box sx={{ 
        display: 'flex', 
        flexGrow: 1,
        position: 'relative',
      }}>
        {/* Desktop Sidebar */}
        {!isHomePage && (
          <Box sx={{
            width: drawerWidth,
            flexShrink: 0,
            display: { xs: 'none', md: 'block' },
            position: 'sticky',
            top: '84px',
            height: 'calc(100vh - 64px)',
            mb: 5,
            ml: 2,
            overflowY: 'auto',
          }}>
            <Sidebar variant="permanent" />
          </Box>
        )}

        {/* Main Content */}
        <Box component="main" sx={{
          flexGrow: 1,
          width: { md: isHomePage ? '100%' : `calc(100% - ${drawerWidth}px)` },
          mt: '64px',
          px: { xs: 2, md: 3 },
          pb: 4,
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/:chapterId" element={<Lesson />} />
          </Routes>
        </Box>

        {/* Mobile Sidebar - Now properly rendered */}
        {!isHomePage && (
          <Sidebar variant="temporary" />
        )}
      </Box>

      <Footer />
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