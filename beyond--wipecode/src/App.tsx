import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Lesson from './components/Lesson';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Navbar />
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              mt: 8,
              bgcolor: 'background.default',
              overflow: 'auto'
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="/chapter/1" replace />} />
              <Route path="/chapter/:chapterId" element={<Lesson />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;