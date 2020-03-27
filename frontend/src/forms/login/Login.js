import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Login = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (

    )
}

export default reduxForm({
    form: 'Login', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
  })(Login)