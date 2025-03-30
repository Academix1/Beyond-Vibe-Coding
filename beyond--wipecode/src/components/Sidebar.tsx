import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  ListItemButton,
  Box,
  Toolbar,
  Typography,
  Divider
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate, useParams } from 'react-router-dom';
import chapters from '../data/chapters.json';

const drawerWidth = 210;

const Sidebar = () => {
  const navigate = useNavigate();
  const { chapterId } = useParams();

  // Add error handling for chapters data
  if (!chapters || !chapters.chapters) {
    return null;
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          background: 'linear-gradient(90deg,rgb(6, 12, 18) 0%,rgb(41, 45, 179) 50%,rgb(41, 46, 198) 70%,rgb(36, 63, 185) 100%)',
          color: 'white',
          borderRight: '1px solid',
          borderColor: 'rgba(255, 255, 255, 0.12)'
        },
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 64, md: 50 } }} />
      <Box sx={{ height: 8 }} />
      
      <Box sx={{ overflow: 'auto',textAlign:'center'}}>
        <Typography 
          variant="h6" 
          sx={{ 
            p: 2,
            pb: 3,
            color: 'white',
            letterSpacing: '.05rem',
            fontWeight: 500,
          }}
        >
          Lessons
        </Typography>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
        <List sx={{ py: 3 }}>
          {chapters.chapters.map((chapter) => (
            <ListItem key={chapter.id} disablePadding>
              <ListItemButton 
                onClick={() => navigate(`/chapter/${chapter.id}`)}
                selected={Number(chapterId) === chapter.id}
                sx={{
                  py: 1.5,
                  px: 2,
                  transition: 'all 0.2s ease-in-out',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    '& .MuiListItemIcon-root': { color: '#42a5f5' },
                    '& .MuiListItemText-primary': { color: '#42a5f5' },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    '& .MuiListItemIcon-root': { color: '#42a5f5' },
                    '& .MuiListItemText-primary': { color: '#42a5f5' },
                  },
                }}
              >
                <ListItemIcon sx={{ 
                  color: 'white', 
                  minWidth: 40,
                  transition: 'color 0.2s ease-in-out',
                }}>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText 
                  primary={`Lesson ${chapter.id}`}
                  
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'white',
                    
                    mb: 0.5,
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.3,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;