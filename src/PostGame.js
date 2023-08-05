import React from 'react';
import {
  Container,
  Typography,
  Button,
  Card,
  makeStyles,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar
} from '@material-ui/core';
import RedoIcon from '@material-ui/icons/Redo';

const useStyles = makeStyles({
  postCard: {
    margin: '2rem 1rem',
    padding: '1rem',
    paddingBottom: '2rem',
    textAlign: 'center'
  },
  bolded: {
    fontWeight: 'bold'
  }
});

const PostGame = (props) => {
  const {
    setGameStatus,
    players,
    setPlayers,
    mockData,
    winnerHasHighestScore
  } = props;

  const classes = useStyles();

  let winningPlayers = [];
  if (winnerHasHighestScore) {
    const highestScore = Math.max(...players.map((player) => player.score));
    winningPlayers = players.filter((player) => player.score === highestScore);
  } else {
    const lowestScore = Math.min(...players.map((player) => player.score));
    winningPlayers = players.filter((player) => player.score === lowestScore);
  }
  const hasOneWinner = winningPlayers.length === 1;
  const winningPlayer = winningPlayers[0];

  return (
    <Container maxWidth='sm'>
      <Card className={classes.postCard}>
        <Box p={2}>
          <Typography variant='h2' align='center' color='primary' gutterBottom>
            Results
          </Typography>
          <Typography variant='h4' color='secondary' gutterBottom>
            Winner
          </Typography>
          <Typography variant='h5'>
            {hasOneWinner ? winningPlayer.name : "No winner, it's a tie!"}
          </Typography>
        </Box>
        <Box p={4}>
          <Typography variant='h4' color='secondary'>
            Final Scores
          </Typography>
          <Table p={2}>
            <TableHead>
              <TableRow>
                <TableCell>Icon</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id}>
                  <TableCell>
                    <Avatar>{player.name.charAt(0).toUpperCase()}</Avatar>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='h5'
                      className={
                        player.id === winningPlayer.id ? classes.bolded : ''
                      }
                    >
                      {player.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant='h5'
                      className={
                        player.id === winningPlayer.id ? classes.bolded : ''
                      }
                    >
                      {player.score}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Button
          variant='contained'
          color='primary'
          endIcon={<RedoIcon />}
          onClick={() => {
            setGameStatus('pre');
            setPlayers(mockData);
          }}
        >
          Start over
        </Button>
      </Card>
    </Container>
  );
};

export default PostGame;
