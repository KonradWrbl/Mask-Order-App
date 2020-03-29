import React from 'react';
import { FullButton } from '../../components/FullButton'
import { Link } from 'react-router-dom';


const Pane = () => {
    return (
        <>
            <h1>Lorem ipsum dolor sit amet</h1>
            <Link to='/order'>
                <FullButton>
                    Złóż zamówienie
                </FullButton>
            </Link>
        </>
    )
}

export default Pane;