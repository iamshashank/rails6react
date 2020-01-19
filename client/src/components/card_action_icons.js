import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles({
  socailIconHolder: {
    
  }
});

export default function CardActionIcons() {
  const classes = useStyles();

  return (
    <div className={ classes.socailIconHolder}>
        <IconButton aria-label="delete">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <YouTubeIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <EmailIcon />
        </IconButton>                                
    </div>
  );
}