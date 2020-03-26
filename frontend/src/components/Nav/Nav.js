import React from 'react';
import { NavWrapper, NavLogo, NavButtons } from './style';
import { EmptyButton } from '../EmptyButton';
import { FullButton } from '../FullButton';

const Nav = () => (
    <NavWrapper>
        <NavLogo>
            LoremIpsum
        </NavLogo>
        <NavButtons>
            <EmptyButton>
                Info
            </EmptyButton>
            <FullButton>
                Zaloguj się / Zarejestruj się
            </FullButton>
        </NavButtons>
    </NavWrapper>
)

export default Nav;