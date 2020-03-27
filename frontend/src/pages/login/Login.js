import React from 'react';
import LoginForm from '../../forms/loginForm/LoginForm';
import { LoginContainer, LoginWrapper, Title, RegisterWrapper, Text } from './style';
import { FullButton } from '../../components/FullButton';

const Login = () => {

    const submit = values => {
        console.log(values);
    }

    return (
        <LoginContainer>
            <LoginWrapper>
                <Title>
                    Zaloguj się
                </Title>
                <LoginForm onSubmit={submit} />
                <RegisterWrapper>
                    <Text>
                        Nie posiadasz konta?
                    </Text>
                    <FullButton>Zarejestruj się</FullButton>
                </RegisterWrapper>
            </LoginWrapper>
        </LoginContainer>

    )
}

export default Login;