import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 375,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function Reviews(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className='review-column'>
        <h3>Read the Reviews</h3>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Kerri H.
            </Typography>
            <Typography variant="h5" component="h2">
            'The Perfect Getaway!'
            </Typography>
            <br />
            <Typography component="p">
              We are so happy to have found this perfect cabin! S'mores on the open fire were sooo good :0!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
          <hr/>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Mallorie I.
            </Typography>
            <Typography variant="h5" component="h2">
              Awesome Hikes
            </Typography>
            <br />
            <Typography component="p">
              This cabin is perfectly located if you are looking for hiking action. Plenty of hike levels to choose from, too!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
          <hr/>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Matt P.
            </Typography>
            <Typography variant="h5" component="h2">
              The Great Outdoors
            </Typography>
            <br />
            <Typography component="p">
              Few things beat being able to completely check out of social media for a weekend. This cabin lets you do just that. Peace and quiet for 24 hours!! We can't wait to go back.
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
          <hr/>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Josh K.
            </Typography>
            <Typography variant="h5" component="h2">
          Loved the Fire Pit
            </Typography>
            <br/>
            <Typography component="p">
            Hots dogs cooked over a campfire is maybe my favorite thing in life. This cabin is worth it for that fact alone.
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
          <hr/>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Katie T.
            </Typography>
            <Typography variant="h5" component="h2">
            Pick up some Long Trail!
            </Typography>
        <br/>
            <Typography component="p">
              We were really excited to find out that Long Trail is right down the street from this cabin. This means we had plenty of growlers of Double Bag around to rehydrate after the long hikes. Be sure you stop in and tell them 'Katie sent you'!
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
          
        </Card>
    </div>
  );
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reviews);