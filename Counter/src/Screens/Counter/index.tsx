import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex:1
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CountContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-tiems: center;
`;

const CountLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title?: string;
    initValue: number; //필수
};

/* 함수형 컴포넌트 */ 
/* state를 사용하기 위해서 react 훅의 useState를 사용 */
const Counter = ({ title, initValue}: Props) => {
    const [count, setCount] = useState<number>(initValue); //count라는 immutable을 수정하기 위해 set함수 이름은 setCount

    return (
      <Container>
        {title && (  // A && B : A가 true로 변환될 수 있으면 B를 변환한다
          <TitleContainer>
            <TitleLabel>{title}</TitleLabel>
          </TitleContainer>
        )}
        <CountContainer>
          <CountLabel>{initValue + count}</CountLabel>
        </CountContainer>
        <ButtonContainer>
          <Button iconName='plus' onPress={() => setCount(count + 1)} />  
          <Button iconName='minus' onPress={() => setCount(count - 1)} />
        </ButtonContainer>
      </Container>
    );
};

export default Counter;
