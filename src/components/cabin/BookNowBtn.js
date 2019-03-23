import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function BookNowBtn(props) {
  const { classes } = props;
  return (
    <div className='book-btn'>
      <Button variant="contained" color="primary" className={classes.button}>
        Book Now
      </Button>
    </div>
  );
}

BookNowBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookNowBtn);