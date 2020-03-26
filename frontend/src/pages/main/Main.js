import React from 'react';
import { MainContainer, Title, MedicImg, H1 } from './style';
import { FullButton } from '../../components/FullButton'


const Main = () => {
    return (
        <MainContainer>
            <Title>
                <H1>Lorem ipsum dolor sit amet</H1>
                <FullButton>
                    Zaloguj się / Zarejestruj się
                </FullButton>
            </Title>
            <MedicImg/>
        </MainContainer>
    )
}

export default Main;