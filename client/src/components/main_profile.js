import React from 'react';
import logo from '../assets/images/420460.jpg';
import myImage from '../assets/images/my_image.png';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionIcons from './card_action_icons'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
  card: {
    height: 500,
    maxHeight: 600,
    margin: 'auto',
    maxWidth: 600
  },
  media: {
    height: 300
  },
  large: {
    width: 110,
    height: 110,
    position: 'absolute',
    top: 45,
    left: 25,
    borderRadius: 6      
  },
  actionClass: {
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export default function MainProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          style={{position: 'relative'}}
          title="Shashank">
          <Avatar variant="square" alt="Shashank Yadav" src={myImage} className={classes.large }>
          </Avatar>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shashank Yadav
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I am a Ruby on Rails/JS developer by profession. Passionate about computer harware and gaming in general.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionClass}>
        <CardActionIcons />
      </CardActions>
    </Card>
  );
}