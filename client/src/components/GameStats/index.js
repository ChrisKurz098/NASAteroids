import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import { GET_ME, GET_LEADERBOARD } from "../../utils/queries";
import Profile from "../Profile";
import Leaderboard from "../Leaderboard";
import {
  ADD_USER_HIGHSCORE,
  ADD_LEADERBOARD_HIGHSCORE,
  DELETE_USER_SCORE,
  DELETE_LEADERBOARD_SCORE,
  REPLACE_LEADERBOARD_SCORE,
} from "../../utils/mutations";

const GameOverStats = ({ gameState }) => {
  const currentScore = gameState.score;
  const { loading: loadingUser, data, refetch } = useQuery(GET_ME);
  const [addScore] = useMutation(ADD_USER_HIGHSCORE, {
    variables: { currentScore },
    refetchQueries: refetch,
  });
  const [deleteUserScore] = useMutation(DELETE_USER_SCORE);
  const [deleteLeaderScore] = useMutation(DELETE_LEADERBOARD_SCORE);
  const [replaceLeaderScore] = useMutation(REPLACE_LEADERBOARD_SCORE, {
    variables: { currentScore }
  });

  const [isHighScore, setIsHighScore] = useState({
    user: false,
    leaderboard: false,
  });

  const [doneUpdatingLeaders, setDoneUpdating] = useState(false)

  useEffect(() => {
    if (!loadingUser) {
      let userDataScores = data?.me.highscores || [];
      const scores = userDataScores.map((user) => user.score);

      const lowestScore = scores[0] ? Math.min(...scores) : 0;

      //if lowest score is beat or there are less than 5 scores...
      if (currentScore > lowestScore || scores.length < 5) {
        try {
          //if there are 5 or more scores, remove the lowest score
          if (scores.length >= 5) {
            deleteUserScore();
          }
          setIsHighScore((old) => ({ ...old, user: true }));
          //then add the new score
          addScore({
            variables: { score: currentScore },
          });
        } catch (e) {
          throw e;
        }
      }
    }
  }, [loadingUser]);

  const {
    loading: loadingLeaderboard,
    data: leaderboardData,
    refetch: leaderboardRefetch,
  } = useQuery(GET_LEADERBOARD);
  const [AddLeaderboardHighscore] = useMutation(ADD_LEADERBOARD_HIGHSCORE, {
    variables: { currentScore },
    refetchQueries: leaderboardRefetch,
  });

  useEffect(() => {
    if (!loadingLeaderboard && !loadingUser) {
      let leaderboardDataScores = leaderboardData?.leaderboard.highscores || [];
      const scores = leaderboardDataScores.map((user) => user.score); //get array of all leader scores in order
      const leaders = leaderboardDataScores.map(leader => leader.user); //get array of all leaders usernames in order

      const userLeaderBoardIndex = leaders.indexOf(data.me.username); //returns index of where current user is on leaderboard. If not on leaderboard returns -1
      console.log('Username: ', data.me.username, 'User index: ', userLeaderBoardIndex)
      const lowestScore = scores[0] ? Math.min(...scores) : 0;

      if (currentScore > lowestScore && userLeaderBoardIndex === -1) { //if user made the leaderboard and is not already on the leaderboard...
        if (scores.length >= 10) {
          deleteLeaderScore();
        }
        setIsHighScore((old) => ({ ...old, leaderboard: true }));
        try {
          AddLeaderboardHighscore({
            variables: { score: currentScore },
          });
        } catch (e) {
          throw e;
        }
       
      } else {
        if (currentScore > scores[userLeaderBoardIndex]) {
          setIsHighScore((old) => ({ ...old, leaderboard: true }));
          //replace users old leaderboard
          try{
            replaceLeaderScore({
              variables: { score: currentScore },
            })
          } catch (e) {
            throw e;
          }
          
        }
      }
    }
  }, [loadingLeaderboard, loadingUser]);

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" sx={{ mt: 10, p: 2 }}>
        {isHighScore.user ? <span>Personal highscore!</span> : ""}
        <br />
        {isHighScore.leaderboard ? <span> You Made the Leaderboard!</span> : ""}
      </Typography>
      <Typography variant="subtitle1" align="center">
        Final Score: {currentScore}
      </Typography>
      <Grid container spacing={4} sx={{ padding: 6 }}>
        <Grid item xs={6} align="center">
          <Profile />
        </Grid>
        <Grid item xs={6} align="center">
        <Leaderboard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GameOverStats;
