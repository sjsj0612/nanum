
import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { Alert } from 'react-native';
import { TodoListContext } from '~/Context/TodoListContext';

const { removeAllTodoList } = useContext<ITodoListContext>(
    TodoListContext
);

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

interface Props {}

const RemoveAllButton = ({ }: Props) => {

    return(
        <>
            <Container>
                <ButtonContainer 
                    onPress={() => Alert.alert(
                                    "Alert Title",
                                    "정말로 모두 삭제하시겠습니까?",
                                    [
                                    {
                                        text: "아니오",
                                        onPress: () => console.log("우와"),
                                        style: "cancel"
                                    },
                                    { text: "네", 
                                        onPress: () => removeAllTodoList()
                                    }
                                    ],
                                    { cancelable: false }   
                            )} >
                <Text>모두 지우기</Text>
                </ButtonContainer>
            </Container>
        </>
    );
};


export default RemoveAllButton;








