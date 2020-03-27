import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FieldContainer, StyledForm, ButtonContainer, FieldWrapper, StyledLabel, StyledInput, InputWrapper } from './style';
import { FullButton } from '../../components/FullButton';


const validate = values => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Uzupełnij wymagane pole!';
    }
    if (!values.pass) {
        errors.pass = 'Uzupełnij wymagane pole!';
    }
    return errors;
}


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <FieldWrapper>
      <StyledLabel>{label}</StyledLabel>
      <InputWrapper>
        <StyledInput {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </InputWrapper>
    </FieldWrapper>
  )


let LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field name='login' type='text' component={renderField} label='Login' />
            <Field name='pass' type='password' component={renderField} label='Hasło' />
            <ButtonContainer>
                <FullButton typ='submit'>Zaloguj</FullButton>
            </ButtonContainer>

        </StyledForm>
    )
}

LoginForm = reduxForm({
    form: 'Login',
    validate,
  })(LoginForm)

  export default LoginForm;