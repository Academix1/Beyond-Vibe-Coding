export const hideScrollbarStyles = {
  '&::-webkit-scrollbar': {
    display: 'none',
    width: 0,
  },
  '&::-webkit-scrollbar-track': {
    display: 'none',
  },
  '&::-webkit-scrollbar-thumb': {
    display: 'none',
  },
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  overflowY: 'auto'
};