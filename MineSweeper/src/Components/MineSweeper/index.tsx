import React from 'react';
import Styled from 'styled-components/native';
import Box from './Box';

const Container = Styled.View`
    flex: 1;
    bottom: 5;
    flex-direction: row;
    background-color: #FFF;
    margin: 4px 20px;
    padding: 3px 20px;
    border-radius: 8px;
    align-items: center;
`;

interface Props { }

const MineSweeper = ({ }: Props) => {

    return (
        <>
            <Container>
                <Box/>
                <Box/>
                <Box/>
            </Container>
            
            <Container>
                <Box/>
                <Box/>
                <Box/>
            </Container>

            <Container>
                <Box/>
                <Box/>
                <Box/>
            </Container>
        </>
    );
};

export default MineSweeper;