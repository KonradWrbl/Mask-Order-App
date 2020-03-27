import React from 'react';
import { NavWrapper, NavLogo, NavButtons } from './style';
import { EmptyButton } from '../EmptyButton';
import { FullButton } from '../FullButton';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => (
    <NavWrapper>
        <Link to='/'>
            <NavLogo>
                LoremIpsum
            </NavLogo>
        </Link>
        <NavButtons>
            <Link smooth to="#info">
                <EmptyButton>
                    Info
                </EmptyButton>
            </Link>
            <Link to='/login'>
                <FullButton>
                    Zaloguj się / Zarejestruj się
                </FullButton>
            </Link>
        </NavButtons>
    </NavWrapper>
)

export default Nav;