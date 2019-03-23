import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import BookNowBtn from './BookNowBtn';

const styles = {
  card: {
    width: 500,
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

const stylesPicker = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 500,
    },
  });

function DateSelect(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
        <div className="sticky">
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
              Book Your Adventure
              </Typography>
              <br />
            </CardContent>

            <form className={classes.container} noValidate>
              <TextField
                  id="date"
                  label="Adventure Start Dates"
                  type="date"
                  defaultValue="2019-03-25"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
              </form>
                  <br/>
                  <br/>
              <form className={classes.container} noValidate>
              <TextField
                  id="date"
                  label="Adventure End Date"
                  type="date"
                  defaultValue="2019-04-01"
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
              />
              </form>
              <br/>
              <br/>
              <BookNowBtn />
          </Card>
        </div>
    </div>
  );
}

DateSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateSelect);