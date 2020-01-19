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


const useStyles = makeStyles((theme) => ({
  card: {
    margin: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: { // eslint-disable-line no-useless-computed-key
      width: 600
    },
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      width: 700
    }    
  }, 
  media: {
    height: 300,
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      height: 350
    },
    [theme.breakpoints.up('lg')]: { // eslint-disable-line no-useless-computed-key
      height: 400
    }      
  },
  gitRepoInfo: {
    height: 150,
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      height: 150
    },
    [theme.breakpoints.up('lg')]: { // eslint-disable-line no-useless-computed-key
      height: 170
    } 
  },
  large: {
    width: 190,
    height: 190,
    position: 'absolute',
    top: 56,
    left: 25,
    borderRadius: 6,
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      top: 66,
      left: 33,
      width: 215,
      height: 215
    },
    [theme.breakpoints.up('lg')]: { // eslint-disable-line no-useless-computed-key
      top: 90
    }       
  },
  actionClass: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

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
      <CardContent className={classes.gitRepoInfo}>
        <Typography gutterBottom variant="h5" component="h2">
          Shashank Yadav
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          I am a Ruby on Rails/JS developer by profession. Passionate about computer harware and gaming in general.
        </Typography>
      </CardContent>      
    </Card>
  );
}