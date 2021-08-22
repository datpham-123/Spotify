import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

interface TrackDetailProps {
  track: Track;
}

const useStyles = makeStyles({
  root: { marginBottom: '25px' },
  card: {
    width: '100%',
  },
  cardActionArea: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  cardMedia: {
    width: '100px',
    height: '100px',
  },
});

const TrackDetail: React.FC<TrackDetailProps> = ({ track }) => {
  const classes = useStyles();
  console.log('in track detail', track);
  const {
    name,
    album: { release_date, images },
  } = track;
  return (
    <Grid className={classes.root} item xs={12}>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia
            className={classes.cardMedia}
            image={
              images[0]?.url ||
              'http://aina.vn/wp-content/uploads/2021/08/default-image-620x600-1.jpg'
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Release Date: {release_date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TrackDetail;
