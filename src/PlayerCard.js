import React from 'react';
import styled from 'styled-components';
import { BOX_SHADOW } from './constants';
import { PrimaryBtn, SecondaryBtn } from './Styled';
import { ButtonGroup, Button, Card, CardContent, CardActions, CardHeader } from '@material-ui/core';


const Wrapper = styled.div`
  margin: 2rem;
  padding: 1rem;
  /* background: white; */
  text-align: center;
  /* ${BOX_SHADOW}; */
`;

const PlayerCard = ({player, changeScore}) => (
  <Wrapper as={Card}>
    <CardHeader 
      title={player.name}
    />
    {/* <h2>{player.name}</h2> */}
    {/* <CardContent> */}
    {/* <hr/> */}
    <h1>{player.score}</h1>
    {/* </CardContent> */}
    {/* <CardActions> */}
    <ButtonGroup variant="contained" color="default">
      <Button 
        color="secondary" 
        onClick={() => changeScore(player, -5)}
      >
        -5
      </Button>
      <Button 
        color="secondary" 
        onClick={() => changeScore(player, -1)}
      >
        -1
      </Button>
      <Button 
        color="primary" 
        onClick={() => changeScore(player, 1)}
      >
        +1
      </Button>
      <Button 
        color="primary" 
        onClick={() => changeScore(player, 5)}
      >
        +5
      </Button>
    </ButtonGroup>
    {/* </CardActions> */}
  </Wrapper>
);

export default PlayerCard;
