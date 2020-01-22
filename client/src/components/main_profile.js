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
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import GithubInfo from './github_info';



const useStyles = makeStyles((theme) => ({
  appDivider: {
    backgroundColor: 'rgba(255, 255, 255, 0.34) !important',
    bottom: 0,
    position: 'absolute',
    width: '140%',
    marginLeft: '-20%',
    marginRight: '-20%'  
  },  
  card: {
    margin: 'auto',
    width: '100%',
    overflow: 'unset',
    [theme.breakpoints.up('sm')]: { // eslint-disable-line no-useless-computed-key
      width: 600
    },
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      width: 700
    }    
  }, 
  media: {
    height: 200,
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      height: 300
    },
    [theme.breakpoints.up('lg')]: { // eslint-disable-line no-useless-computed-key
      height: 300
    }      
  },
  gitRepoInfo: {
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      height: 150
    },
    [theme.breakpoints.up('lg')]: { // eslint-disable-line no-useless-computed-key
      height: 170
    } 
  },
  large: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 56,
    left: 16,
    borderRadius: 6,
    [theme.breakpoints.up('sm')]: { // eslint-disable-line no-useless-computed-key
      top: 30,
      left: 30,
      width: 140,
      height: 140
    },    
    [theme.breakpoints.up('md')]: { // eslint-disable-line no-useless-computed-key
      top: 42,
      left: 33,
      width: 215,
      height: 215
    },
    [theme.breakpoints.up('lg')]: { // eslint-disable-line no-useless-computed-key
      top: 42
    }       
  },
  actionClass: {
    flexDirection: 'column',
    alignItems: 'center',
    padding:0
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
          <Divider absolute={true} light={true} className={classes.appDivider} />
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
        <GithubInfo />
      </CardContent>      
    </Card>
  );
}