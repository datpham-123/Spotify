import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useAppDispatch } from '../../../app/hooks';
import { listTrack } from '../../track/tracksSlice';

interface ArtistDetailProps {
  artist: Artist;
}

const useStyles = makeStyles({
  card: {
    height: '380px',
  },
  image: {
    width: '100%',
    height: '250px',
  },
});

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { name, popularity, images, genres } = artist;

  const handleClick = () => {
    const actionType = listTrack.type;
    const actionPayload = artist.id;
    const action = {
      type: actionType,
      payload: actionPayload,
    };
    dispatch(action);
  };

  return (
    <Grid onClick={handleClick} item xs={12} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.image}
            image={
              images[0]?.url ||
              'http://aina.vn/wp-content/uploads/2021/08/default-image-620x600-1.jpg'
            }
            title="Contemplative Reptile"
          />
        </CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name.length <= 15 ? name : name.slice(0, 15) + ' ...'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Popularity: {popularity}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Genres: {genres.map((genre) => genre + ' | ')}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ArtistDetail;
