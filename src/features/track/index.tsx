import { Box, Grid, makeStyles } from '@material-ui/core';
import { useAppSelector } from '../../app/hooks';
import Loading from '../../components/Loading';
import { selectLoading } from '../artist/artistsSlice';
import TrackDetail from './components/TrackDetail';
import { selectTrack } from './tracksSlice';

const useStyles = makeStyles({
  root: {
    marginTop: '30px',
  },
});

const TopTrack = () => {
  const classes = useStyles();
  const tracks = useAppSelector(selectTrack);
  const loading = useAppSelector(selectLoading);

  console.log('in top track', loading, tracks);

  return (
    <Box className={classes.root}>
      {loading && <Loading />}
      {!loading && (
        <Grid container spacing={3}>
          {tracks.map((track) => (
            <TrackDetail key={track.id} track={track} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TopTrack;
