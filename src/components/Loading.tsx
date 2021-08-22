import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: '20px',
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4">Loading...</Typography>
    </Box>
  );
};

export default Loading;
