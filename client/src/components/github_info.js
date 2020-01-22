import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      component="div"
      role="tabpanel"
      style={{padding: 0}}
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}


{/* <Divider variant="inset" component="li" /> */}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rootList: {
    width: '100%',
    maxHeight: 200,
    padding: 0,
    overflow: 'scroll'    
  },
  inline: {
    display: 'inline',
  },
  tabPanel: {
    paddingTop: 0,
    paddingBottom: 0,
  }
});


class GithubInfo extends React.Component {
  constructor(props) {
    super(props);
    // this.classes = useStyles();
    this.state = {
      value: 0,
      dataLoaded: false,
      data: {}
    };    
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.repoListItem = this.repoListItem.bind(this);
    this.generateRepoList = this.generateRepoList.bind(this);
  }

  handleChange(event, newValue){
    this.setState({value: newValue});
  }

  componentWillMount() {
    fetch('/api/v1/total_repos')
    .then(r => r.json())
    .then(r => {
      this.setState({
        value: 0,
        dataLoaded: true,
        data: r
      }); 
      console.log(r);
    }).catch(e => console.log(e))
  }

  repoListItem(repo, classes, key){
    return (
      <ListItem key={key} alignItems="flex-start" button={true} divider={true} style={{width: '100%'}}>
      <ListItemAvatar>
        <Avatar alt={repo.name} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={repo.name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
            {`${repo.description} `}
            </Typography>
            <a target='blank' href={repo.html_url}>goto repo</a>
          </React.Fragment>
        }
      />
      </ListItem>
    );
  }

  generateRepoList(state, classes) {
    console.log('called', state, classes);
    if (state.dataLoaded){
      return state.data.last_5_repo.map((repo, index)=> this.repoListItem(repo, classes, index));
    } 
  }  
  
  render(){

    const { classes } = this.props;
    return (
      
      <div className={classes.root}>
        <Paper position="static">
          <Tabs
            variant="fullWidth"
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label={`Repos [ ${this.state.data.repo_count || ''} ]`} href="/" {...a11yProps(0)} />
            <LinkTab label="Organizations" href="/" {...a11yProps(1)} />
            {/* <LinkTab label="Page Three" href="/" {...a11yProps(2)} /> */}
          </Tabs>
        </Paper>
        <TabPanel value={this.state.value} index={0} className={classes.tabPanel} >
            <List className={classes.rootList}>
              {this.generateRepoList(this.state, classes)}
            </List>

        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          Page Two
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
          Page Three
        </TabPanel> */}
      </div>
    );
  }

}
export default withStyles(useStyles)(GithubInfo)