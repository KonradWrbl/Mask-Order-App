import React, { useState } from 'react';
import LoginForm from '../../forms/loginForm/LoginForm';
import { LoginContainer, LoginWrapper, Title, RegisterWrapper, Text } from './style';
import { FullButton } from '../../components/FullButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [error, setError] = useState({})

    const submit = values => {
        console.log(values);

        // axios.post('http://localhost:5000/maskorder-adadd/europe-west2/api/login', {
        //     email: values.email,
        //     password: values.pass
        // }).then(res => {
        //     console.log(res.data);
        // }).catch(err => {
        //     console.log(err);
        // })

        axios({
            method: 'post',
            url: 'https://europe-west2-maskorder-adadd.cloudfunctions.net/api/login',
            data: {
                email: values.email,
                password: values.pass
            },
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET',
            }
          });
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
                    <Link to='/register'>
                        <FullButton>Zarejestruj się</FullButton>
                    </Link>
                </RegisterWrapper>
            </LoginWrapper>
        </LoginContainer>

    )
}

export default Login;