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
import { useSidebar } from '../context/SidebarContext';

const drawerWidth = 210;

interface SidebarProps {
  variant: 'permanent' | 'temporary';
}

const Sidebar = ({ variant }: SidebarProps) => {
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  
  // Add error handling for chapters data
  if (!chapters?.chapters) {
    console.error('Chapters data not found');
    return null;
  }

  return (
    <Drawer
      variant={variant}
      open={variant === 'temporary' ? isSidebarOpen : true}
      onClose={variant === 'temporary' ? toggleSidebar : undefined}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(190deg,rgb(14, 24, 35) 0%,rgb(16, 18, 83) 50%,rgb(67, 55, 225) 100%)',
          color: 'white',
          borderRight: '1px solid',
          borderColor: 'rgba(255, 255, 255, 0.12)'
        },
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 48, md: 56 } }} />
      <Box sx={{ height: 8 }} />
      
      <Box sx={{ overflow: 'auto' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            p: 2,
            pb: 3,
            color: 'white',
            letterSpacing: '.05rem',
            fontWeight: 500,
            textAlign: 'center'
          }}
        >
          Lessons
        </Typography>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
        <List sx={{ py: 3 }}>
          {chapters.chapters.map((chapter) => (
            <ListItem key={chapter.id} disablePadding>
              <ListItemButton 
                onClick={() => {
                  navigate(`/chapter/${chapter.id}`);
                  if (variant === 'temporary') {
                    toggleSidebar();
                  }
                }}
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