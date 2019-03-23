import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faFire, faHiking, faBeer, faMountain } from '@fortawesome/free-solid-svg-icons';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function CabinEssentials(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Property Overview</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
                <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faHiking} />
                            </ListItemIcon>
                            <ListItemText
                            primary="Hiking"
                            //   secondary={secondary ? 'Secondary text' : null}
                            />
                </ListItem>
                <ListItem>
                            <ListItemIcon>
                            <FontAwesomeIcon icon={faTree} />
                            </ListItemIcon>
                            <ListItemText
                            primary="In the Woods"
                            //   secondary={secondary ? 'Secondary text' : null}
                            />
                </ListItem>
                <ListItem>
                            <ListItemIcon>
                            <FontAwesomeIcon icon={faFire} />
                            </ListItemIcon>
                            <ListItemText
                            primary="Fire Pit"
                            //   secondary={secondary ? 'Secondary text' : null}
                            />
                </ListItem>
                <ListItem>
                            <ListItemIcon>
                            <FontAwesomeIcon icon={faBeer} />
                            </ListItemIcon>
                            <ListItemText
                            primary="Local Brewery"
                            //   secondary={secondary ? 'Secondary text' : null}
                            />
                </ListItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Recommended Trails</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <ListItem>
                <ListItemIcon>
                <FontAwesomeIcon icon={faMountain} />
                </ListItemIcon>
                <ListItemText
                primary="The Presidential Traverse"
                />
                 <Typography>
            Clocking in at 18.9 Miles, The Presidential Traverse is a serious hike. But if broken up into smaller day trips, you will happy you took it on.
          </Typography>
        </ListItem>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Weather History</Typography>
        </ExpansionPanelSummary>
        <Typography>
            Check the historical trends of the weather so you know what kind of clothes and gear you will want to pack!
          </Typography>
      </ExpansionPanel>
    </div>
  );
}

CabinEssentials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CabinEssentials);