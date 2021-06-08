import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
`;

const Card = styled.div`
  background: lightgray;
  width: 300px;
  padding: 2rem;
  margin: 1rem;
`;

const App = () => (
  <AppDiv>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Card>
        Testing
      </Card>
      <Card>
        Testing
      </Card>
      <Card>
        Testing
      </Card>

  </AppDiv>
);

export default App;
