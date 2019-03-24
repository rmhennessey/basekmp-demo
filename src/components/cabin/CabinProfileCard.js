import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 550,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#00A388',
  },
});

class CabinProfileCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
            BK
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Off the Grid in the White Mountains"
          subheader="Lincoln, New Hampshire"
        />
        <CardMedia
          className={classes.media}
          image="/cabinAssets/Adventure Snapshot.png"
          title="Adventure Snapshot"
        />
        <CardContent>
          <Typography component="p">
            Unplug and recharge in this perfect White Mountains Cabin. Enjoy 55 acres to yourself (complete with an outdoor shower and firepit) or be on hiking trails in under 10 minutes.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph><strong>What We Love About the Cabin:</strong></Typography>
            <Typography paragraph>
              It's just you and the trees up here. No neighbors, no traffic, no problems :)
            </Typography>
            <Typography className='profile-card-type' paragraph>
              Live free or die! And we mean it. When staying at the cabin, you will feel the freedom that comes with being off of the grid. The cabin provides everything you need - hot water, cold fridge (for cold beer), a fire pit and a comfy bed. Just bring your own s'mores kit and you are all set!
            </Typography>
            <Typography className='profile-card-type' paragraph>
              While there is plenty to see and do off of the property (Franconia Notch is only 10 minutes away), you don't have to leave to experience some of the best that New Hampshire offers. If you are fans of snow-shoeing, we have trail access right from the backyard.
            </Typography>
            <Typography className='profile-card-type'>
              Questions? Feel free to reach out and we will respond asap.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

CabinProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CabinProfileCard);