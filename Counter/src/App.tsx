import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
  flex: 1;
  background-color= #EEE;
`;

/* 함수형 컴포넌트 */
const App = () => {
  return (
    <Container>
      <Counter title="This is a Counter App" initValue={5} />
    </Container>
  );
};

export default App;
