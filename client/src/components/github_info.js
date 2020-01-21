import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
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
});

class GithubInfo extends React.Component {
  constructor(props) {
    super(props);
    // this.classes = useStyles();
    this.state = {
      value: 0
    };    
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue){
    this.setState({value: newValue});
  }

  componentDidMount() {
    fetch('/api/v1/total_repos')
    .then(r => r.json())
    .then(r => console.log(r))
    .catch(e => console.log(e))
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
            <LinkTab label="Repos" href="/" {...a11yProps(0)} />
            <LinkTab label="Organizations" href="/" {...a11yProps(1)} />
            {/* <LinkTab label="Page Three" href="/" {...a11yProps(2)} /> */}
          </Tabs>
        </Paper>
        <TabPanel value={this.state.value} index={0}>
          Page One
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