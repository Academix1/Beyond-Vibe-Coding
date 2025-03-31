import { Box, Typography, Paper, Divider, List, ListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import chapters from '../data/chapters.json';

const scrollbarStyles = {
  scrollbarWidth: 'none',  // Firefox
  '&::-webkit-scrollbar': { // Webkit (Chrome, Safari, Edge)
    display: 'none'
  },
  '-ms-overflow-style': 'none',  // IE and Edge
  overflowY: 'scroll',
};

const Lesson = () => {
  const { chapterId } = useParams();
  const chapter = chapters.chapters.find(ch => ch.id === Number(chapterId));

  if (!chapter) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5">Chapter not found</Typography>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        position: 'relative',
        maxWidth: '1200px', 
        backgroundColor: 'white',
        margin: '0 auto', 
        padding: '10px',
        pl: 5,
        pr: 5,
        mt:2,
        borderRadius: '10px',
        mr: 2,
        p: 2,
        ...scrollbarStyles
      }}
    >
      <Typography variant="h4" gutterBottom sx={{fontSize: '1.5rem', fontWeight: 700, color: 'Black',mb: 5}}>
        {chapter.title}
      </Typography>

      <Paper elevation={0} sx={{ p: 3, mb: 3, bgcolor: 'background.paper' }}>
        <Typography variant="body1" paragraph>
          {chapter.content.introduction}
        </Typography>
      </Paper>

      {/* Sections */}
      {chapter.content.sections.map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'Black' }}>
            {section.title}
          </Typography>
          {section.content.map((paragraph, pIndex) => (
            <Typography key={pIndex} variant="body1" paragraph>
              {paragraph}
            </Typography>
          ))}
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      {/* Quotes */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Expert Insights
        </Typography>
        {chapter.content.quotes.map((quote, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{ p: 2, mb: 2, bgcolor: 'background.paper' }}
          >
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              "{quote.text}"
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1, color: 'text.secondary' }}>
              — {quote.author}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Key Points */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Key Points
        </Typography>
        <List>
          {chapter.content.keyPoints.map((point, index) => (
            <ListItem key={index}>
              <Typography variant="body1">• {point}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Tools Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recommended Tools
        </Typography>
        <Box sx={{ display: 'block', gap: 4 }}>
          <Box flex={1}>
            <Typography variant="subtitle1" gutterBottom color="Black">
              Primary Tools
            </Typography>
            <List>
              {chapter.tools.primary.map((tool, index) => (
                <ListItem key={index}>
                  <Typography variant="body2">• {tool}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box flex={1}>
            <Typography variant="subtitle1" gutterBottom color="Black">
              Alternatives
            </Typography>
            <List>
              {chapter.tools.alternatives.map((tool, index) => (
                <ListItem key={index}>
                  <Typography variant="body2">• {tool}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Lesson;