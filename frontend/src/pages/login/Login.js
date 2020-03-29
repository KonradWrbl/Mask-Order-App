import React, { useState } from 'react';
import LoginForm from '../../forms/loginForm/LoginForm';
import { LoginContainer, LoginWrapper, Title, RegisterWrapper, Text, LoadingWrapper, Loader, WrongCredentials } from './style';
import { FullButton } from '../../components/FullButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Redux stuff
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/userActions'

const Login = props => {

    const [ error, setError ] = useState('')

    const submit = values => {
        console.log(values);

        const userData = {
            email: values.email,
            password: values.pass
        }

        props.loginUser(userData, props.history)
    }

    const { UI: { isLoading } } = props;

    return (
        <LoginContainer>
            {isLoading &&
                <LoadingWrapper>
                    <Loader>
                        <div></div>
                        <div></div>
                    </Loader>
                </LoadingWrapper>
            }

            <LoginWrapper>
                <Title>
                    Zaloguj się
                </Title>
                {error !== '' && <WrongCredentials>{error.general}</WrongCredentials>}
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

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(Login);