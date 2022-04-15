import React from 'react';
import { useHistory } from 'react-router-dom';
import Profile from '../components/Profile';
import Leaderboard from '../components/Leaderboard';
import Footer from '../components/Footer';
import { Box, Grid, Card, CardActions } from '@mui/material';

const Start = () => {

  const navigate = useHistory();

  const handleStart = () => {
    navigate.push("/main");
  }
  const handleLogout = () => {
    navigate.push("/");
  }

  return (
    <Box>
      <Grid
        container
        columnSpacing={{ md: 1 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <div className="logo">
          <h1>ASTEROIDS</h1>
        </div>
        <Grid
          container
          columnSpacing={{ md: 1 }}
          direction="row"
          justifyContent="center"
        >
          <Profile />
          <Leaderboard />
        </Grid>
        <CardActions
            sx={{
              justifyContent: "space-between",
              backgroundColor: "transparent",
              mt: 10,
              gap: 20
            }}
          >
            <button 
              type="button" 
              className="nes-btn upperCase"
              onClick={handleStart}
              >
              Start
            </button>
            <button 
              type="button" 
              className="nes-btn upperCase"
              onClick={handleLogout}>
              Logout
            </button>
          </CardActions>
        <Footer />
      </Grid>
    </Box>

  )
};

export default Start;