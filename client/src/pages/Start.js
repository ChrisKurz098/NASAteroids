import React from "react";
import Footer from "../components/Footer";
import Leaderboard from "../components/Leaderboard";
import Login from "../components/Login";
import { Card, CardActions, Button, Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Press Start 2P"],
    body1: {
      textTransform: "uppercase",
    },
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&&::before": {
            borderBottom: "1px solid rgba(255, 255, 255, 1)"
          },
          "&&::after": {
            borderBottom: "1px solid rgba(255, 255, 255, 1)"
          }
        }
      }
    }
  }
});

const Start = () => {
  return (
    <ThemeProvider theme={theme}>
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
          <Leaderboard />
          <Card sx={{ justifyContent: "space-between", backgroundColor: "transparent" }}>
            <CardActions sx={{ justifyContent: "space-between", backgroundColor: "transparent" }}>
              <button type="button" className="nes-btn upperCase">
                Login
              </button>
              <button type="button" className="nes-btn upperCase">
                Signup
              </button>
            </CardActions>
          </Card>
          <Footer />
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Start;
