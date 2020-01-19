import React from 'react';
import logo from '../assets/icons/logo.svg';
import '../assets/css/App.css';
import Uploader from './uploader'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MainProfile from './main_profile';
import SecondaryProfile from './secondary_profile'

function App() {
  return (
    <Container className="App-header" style={{ display: 'flex', flexDirection: 'column',
    justifyContent: 'center', paddingTop: 24, paddingBottom: 24}} maxWidth={false} >
      <Grid container spacing={4}>
        <Grid key={1} item xs={12} md={4} style={{alignSelf: 'center'}}>
          <MainProfile />
        </Grid>
        <Grid key={2} item xs={12} md={8}>
          <SecondaryProfile />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
