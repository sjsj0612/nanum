import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

// Props의 타입을 지정함으로써, 타입에 대한 버그와 에러를 줄임
interface Props {
  iconName: 'plus' | 'minus'; // : 필수항목
  onPress?: () => void; // 반환값이 없는 함수이지만 ?: 필수항목은 아님
}


const Button = ({ iconName, onPress }: Props) => {
  return (
    <Container onPress={onPress}> 
      <Icon
        source={
          iconName === 'plus'
            // 기본 이미지 사이즈를 연결하면, 해당 단말기 화면 사이즈에 맞는 이미지를 가져옴
            ? require('~/Assets/Images/add.png') 
            : require('~/Assets/Images/remove.png')
        }
      />
    </Container>
  );
};

export default Button;