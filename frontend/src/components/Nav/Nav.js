import React from 'react';
import { NavWrapper, NavLogo, NavButtons } from './style';
import { EmptyButton } from '../EmptyButton';
import { FullButton } from '../FullButton';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => (
    <NavWrapper>
        <NavLogo>
            LoremIpsum
        </NavLogo>
        <NavButtons>
            <Link smooth to="#info">
                <EmptyButton>
                    Info
                </EmptyButton>
            </Link>
            <FullButton>
                Zaloguj się / Zarejestruj się
            </FullButton>
        </NavButtons>
    </NavWrapper>
)

export default Nav;