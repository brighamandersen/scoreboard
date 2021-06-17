import React from "react";
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Card,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  postCard: {
    margin: "2rem",
    padding: "1rem",
    textAlign: "center",
  },
  playerItem: {
    textAlign: "center",
  },
  bolded: {
    fontWeight: "bold",
  },
});

const PostGame = (props) => {
  const { setGameStatus, players, setPlayers, mockData } = props;

  const classes = useStyles();

  const winnerObj = players.reduce((max, p) => {
    if (max.score > p.score) return max;
    else if (max.score === p.score) return { msg: "No winner, it's a tie!" };
    else return p;
  });

  return (
    <Container maxWidth="sm">
      <Card className={classes.postCard}>
        <Box p={2}>
          <Typography variant="h2" align="center" color="primary" gutterBottom>
            Results
          </Typography>
          <Typography variant="h4" color="secondary" gutterBottom>
            Winner
          </Typography>
          <Typography variant="p">{winnerObj.name || winnerObj.msg}</Typography>
        </Box>
        <Box p={2}>
          <Typography variant="h4" color="secondary">
            Final Scores
          </Typography>
          <List>
            {players.map((player) => (
              <ListItem key={player.id}>
                <ListItemText className={classes.playerItem}>
                  <Typography
                    variant="p"
                    className={player.id === winnerObj.id && classes.bolded}
                  >
                    {player.name}: {player.score}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setGameStatus("pre");
              setPlayers(mockData);
            }}
          >
            Start over
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default PostGame;
