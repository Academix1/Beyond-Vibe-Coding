import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Typography,
  useTheme,
} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate, useParams } from 'react-router-dom';
import chapters from '../data/chapters.json';
import { useSidebar } from '../context/SidebarContext';

interface SidebarProps {
  variant: 'permanent' | 'temporary';
}

const Sidebar = ({ variant }: SidebarProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  if (!chapters?.chapters) {
    console.error('Chapters data not found');
    return null;
  }

  const handleChapterClick = (chapterId: number) => {
    navigate(`/chapter/${chapterId}`);
    if (variant === 'temporary') {
      toggleSidebar();
    }
  };

  return (
    <Drawer
      variant={variant}
      open={variant === 'temporary' ? isSidebarOpen : true}
      onClose={toggleSidebar}
      ModalProps={{
        keepMounted: true, // Better performance on mobile
        BackdropProps: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      }}
      sx={{
        display: {
          xs: variant === 'temporary' ? 'block' : 'none',
          md: variant === 'permanent' ? 'block' : 'none',
        },
        '& .MuiDrawer-paper': {
          width: {
            xs: variant === 'temporary' ? '280px' : '100%',
            md: '100%',
          },
          boxSizing: 'border-box',
          backgroundColor: 'white',
          borderRight: `1px solid ${theme.palette.divider}`,
          ...(variant === 'temporary'
            ? {
                position: 'fixed',
                top: '64px',
                height: 'calc(100vh - 64px)',
                zIndex: theme.zIndex.drawer - 1,
              }
            : {
                position: 'relative',
                height: 'calc(100vh - 64px)',
                borderRight: 'none',
              }),
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: 'text.secondary',
            mb: 2,
          }}
        >
          Concepts
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </Box>

      <List disablePadding>
        {chapters.chapters.map((chapter) => {
          const isSelected = Number(chapterId) === chapter.id;
          return (
            <ListItemButton
              key={chapter.id}
              onClick={() => handleChapterClick(chapter.id)}
              selected={isSelected}
              sx={{
                py: 1.5,
                px: 3,
                mx: 1,
                borderRadius: 1,
                '&.Mui-selected': {
                  bgcolor: 'rgba(255, 245, 225, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 232, 194, 0.9)',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main',
                  },
                },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <MenuBookIcon color={isSelected ? 'primary' : 'inherit'} />
              </ListItemIcon>
              <ListItemText
                primary={chapter.title}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: isSelected ? 600 : 500,
                  color: isSelected ? 'text.primary' : 'text.secondary',
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;