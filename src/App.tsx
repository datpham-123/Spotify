import { Box, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import ArtistSearchResult from './features/artist';
import TopTrack from './features/track';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <ArtistSearchResult />
      <TopTrack />
    </Box>
  );
}

export default App;
