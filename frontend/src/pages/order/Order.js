import React from 'react';
import { LoginContainer, LoginWrapper, Title, RegisterWrapper, Text, LoadingWrapper, Loader, WrongCredentials } from './style';
import { FullButton } from '../../components/FullButton';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import OrderForm from '../../forms/orderForm/OrderForm'


const Order = props => {

    const [ error, setError ] = useState('')
    const[ isLoading, setLoading ] = useState(false)



    const submit = values => {
        console.log(values);
        setLoading(true);
        const token = localStorage.getItem('FBIdToken')
        console.log(token);

        const orderData = {
            visors: values.visors,
            frames: values.frames,
            forms: values.forms,
            PETFilament: values.PETFilament,
            PETFoil: values.PETFoil,
            unit: values.unitName,
            unitAdress: values.unitAdress,
            contactName: values.contactName,
            contactSurname: values.contactSurname,
            contactPhone: values.contactPhone
        }

        console.log(orderData);

        const config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            }
        }

        axios.post('/order', orderData, config)
        .then(res => {
            console.log(res);
            setLoading(false);
            props.history.push('/pane');
            // window.location.reload()
        })
        .catch(err => {
            console.log(err);
            setError(err.response.data)
            setLoading(false)
        })
    }

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
                    Złóż zamówienie
                </Title>
                {error !== '' && <WrongCredentials>{error.general}</WrongCredentials>}
                <OrderForm onSubmit={submit} />
                <RegisterWrapper>
                    <Text>
                        Nie teraz?
                    </Text>
                    <Link to='/pane'>
                        <FullButton>Wróć do panelu</FullButton>
                    </Link>
                </RegisterWrapper>
            </LoginWrapper>
        </LoginContainer>
    )

}

export default Order;