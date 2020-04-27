import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    height: 200px;
    justify-content: center;
    align-items: center;
`;

const TitleLabel = Styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

interface Props {}

const Header = ({ }: Props) => {
    return(
        <Container>
            <TitleLabel>지뢰를 찾아라</TitleLabel>
        </Container>
    );
};

export default Header;
