import { Box, Grid, makeStyles } from '@material-ui/core';
import { useAppSelector } from '../../app/hooks';
import { selectArtist, selectLoading } from './artistsSlice';
import ArtistDetail from './components/ArtistDetail';
import Loading from '../../components/Loading';

const useStyles = makeStyles({
  artistDetailContainer: {
    marginTop: '50px',
  },
});

const ArtistSearchResult = () => {
  const classes = useStyles();
  const listArtist = useAppSelector(selectArtist);
  const loading = useAppSelector(selectLoading);

  console.log('in artists', loading, listArtist);
  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Grid className={classes.artistDetailContainer} container spacing={3}>
          {listArtist.map((artist) => (
            <ArtistDetail key={artist.id} artist={artist} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ArtistSearchResult;
