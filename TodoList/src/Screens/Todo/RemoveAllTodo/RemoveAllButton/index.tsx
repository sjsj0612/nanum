
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    position: absolute;
    bottom: 0;
    align-self: auto;
    justify-content: flex-end;
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
`;

const Text = Styled.Text``;

interface Props {
    onPress?: () => void;
}

const RemoveAllButton = ({ onPress }: Props) => {
    return(
        <Container>
            <ButtonContainer onPress={onPress}>
                <Text>모두 지우기</Text>
            </ButtonContainer>
        </Container>
    );
};


export default RemoveAllButton;








