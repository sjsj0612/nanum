import React, { useState } from 'react';
import Styled from 'styled-components/native';


const Label = Styled.Text`
    flex: 1;
    align-items: center;
    textAlign: center;
    fontSize: 20;
`;
const Button = Styled.TouchableOpacity`
    flex:1;
`;

interface Props { };

const Box = () => {
    const [ result, SetResult ] = useState<string>('뭘까용');
    const getRandom = () => Math.random();
    
    const OnPress = () => {
        let rand = getRandom();
        if(rand > 0.3){
            SetResult('통과');
            setTimeout(() => {SetResult('뭘까용')}, 10000);
        } else {
            SetResult('꽝');
            setTimeout(() => {SetResult('뭘까용')}, 10000);
        }
    };
    return (
        <Button onPress={OnPress}>
            <Label>{result}</Label>
        </Button>  
    );
}

export default Box;
