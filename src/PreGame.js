import React from 'react';
import {
  makeStyles,
  Button,
  Avatar,
  Container,
  Card,
  TextField,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Table,
  TableRow,
  TableCell,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TableBody
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  preCard: {
    margin: '2rem 1rem',
    padding: '1rem',
    textAlign: 'center'
  },
  preButton: {
    margin: '1rem'
  },
  nameText: {
    width: '100%'
  },
  tableRow: {
    '&:last-child td': {
      borderBottom: 0
    }
  }
});

const PreGame = (props) => {
  const {
    players,
    changeName,
    addPlayer,
    deletePlayer,
    setGameStatus,
    winnerHasHighestScore,
    setWinnerHasHighestScore
  } = props;

  const classes = useStyles();

  const playerNames = players.map((p) => p.name);

  const startGame = (e) => {
    e.preventDefault();
    setGameStatus('mid');
  };

  const validateName = (player) => {
    if (player.name === '') {
      return '';
    }

    // Check to see if this name already exists
    const matches = playerNames.filter((name) => name === player.name);
    if (matches.length > 1) {
      return 'No duplicates allowed';
    }

    return '';
  };

  // Loops through all players looking for duplicate names
  const checkForDuplicates = () => {
    const hasDuplicates = new Set(playerNames).size !== playerNames.length;
    return hasDuplicates;
  };

  // Loops through all players looking for blank names
  const checkForBlankNames = () => {
    return playerNames.some((name) => name === '');
  };

  return (
    <Container maxWidth='sm'>
      <Card className={classes.preCard}>
        <Typography variant='h2' align='center' color='primary' gutterBottom>
          Game Setup
        </Typography>
        <form onSubmit={startGame}>
          <Table>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.id} className={classes.tableRow}>
                  <TableCell>
                    <Avatar>
                      {player.name.charAt(0).toUpperCase() || '?'}
                    </Avatar>
                  </TableCell>
                  <TableCell>
                    <TextField
                      required
                      label='Name'
                      placeholder='Enter name here'
                      className={classes.nameText}
                      value={player.name}
                      onChange={(e) => changeName(player, e.target.value)}
                      error={validateName(player) !== ''}
                      helperText={validateName(player)}
                    />
                  </TableCell>
                  <TableCell>
                    <Tooltip title='Delete Player'>
                      <IconButton onClick={() => deletePlayer(player)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box p={2} display='flex' justifyContent='center' alignItems='center'>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={winnerHasHighestScore}
                    onChange={(event) =>
                      setWinnerHasHighestScore(event.target.checked)
                    }
                  />
                }
                label='Player with the highest score wins'
              />
            </FormGroup>
          </Box>
          <Box p={2}>
            <Button
              variant={players.length < 2 ? 'contained' : 'outlined'}
              color='secondary'
              className={classes.preButton}
              endIcon={<PlaylistAddIcon />}
              onClick={addPlayer}
            >
              Add new player
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.preButton}
              endIcon={<SendIcon />}
              type='submit'
              disabled={
                players.length < 2 ||
                checkForDuplicates() ||
                checkForBlankNames()
              }
            >
              Start game
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default PreGame;
