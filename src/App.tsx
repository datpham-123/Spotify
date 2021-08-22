import { Box, makeStyles } from '@material-ui/core';
import Header from './components/Header';

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
    </Box>
  );
}

export default App;
