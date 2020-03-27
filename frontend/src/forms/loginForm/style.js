import styled from 'styled-components'
import { Field } from 'redux-form';

export const StyledForm = styled.form`
    width: 100%;
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;

`

export const StyledLabel = styled.label`
    padding: 0 10px;
`

export const FieldWrapper= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`

export const InputWrapper= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const StyledInput = styled.input`
    border: none;
    background-color: #f3f3f3;
    padding: 10px;
    border-radius: 10px;
    font-family: inherit;
    font-size: 1em;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`