import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    bottom: 0,
    width: '100%'
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{backgroundColor: '#000'}}
    >
      <BottomNavigationAction label="Instagram" style={{color: 'white'}} icon={<InstagramIcon style={{color: 'white'}}/>} />
      <BottomNavigationAction label="Youtube" style={{color: 'white'}} icon={<YouTubeIcon style={{color: 'white'}}/>} />
      <BottomNavigationAction label="Twitter" style={{color: 'white'}} icon={<TwitterIcon style={{color: 'white'}}/>} />
    </BottomNavigation>
  );
}