import React from 'react';
import Styled from 'styled-components/native';

import Header from './Components/Header';
import MineSweeper from './Components/MineSweeper';

const Container = Styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <MineSweeper />
    </Container>
  );
};



export default App;
