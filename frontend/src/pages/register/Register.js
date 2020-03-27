import React from 'react';
import RegisterForm from '../../forms/registerForm/RegisterForm';
import { RegisterContainer, RegisterWrapper, Title } from './style';
import { FullButton } from '../../components/FullButton';

const Login = () => {

    const submit = values => {
        console.log(values);
    }

    return (
        <RegisterContainer>
            <RegisterWrapper>
                <Title>
                    Zarejestruj się
                </Title>
                <RegisterForm onSubmit={submit} />
            </RegisterWrapper>
        </RegisterContainer>

    )
}

export default Login;