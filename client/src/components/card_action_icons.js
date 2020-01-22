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
      <a target='blank' href='https://github.com/iamshashank'>
        <IconButton aria-label="delete">
          <GitHubIcon />
        </IconButton>
      </a>
      <a target='blank' href='https://www.youtube.com/channel/UCrb1Jn4MLKzHcCffUk4Z3SA?view_as=subscriber'>
        <IconButton aria-label="delete">
          <YouTubeIcon />
        </IconButton>
      </a>
      <a target='blank' href='https://www.linkedin.com/in/iamshashankio/'>
        <IconButton aria-label="delete">
          <LinkedInIcon />
        </IconButton>
      </a>
      <a target='blank' href='https://twitter.com/shashank0x1'>
        <IconButton aria-label="delete">
          <TwitterIcon />
        </IconButton>
      </a>
      <a target='blank' href='mailto:shashank0x1@gmail.com?Subject=Hi%20Shashank'>
        <IconButton aria-label="delete">
          <EmailIcon />
        </IconButton>
      </a>
    </div>
  );
}