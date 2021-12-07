import { Formik } from 'formik';
import React from 'react';
import FormikTextInput from './FormikTextInput';

const SignIn = () => {

    /*const onSubmit = (values) => {
        console.log(values);
      };*/

    return (
        <Formik>
            <FormikTextInput name="username" placeholder="Username"/>    
        </Formik>   
    );
};

export default SignIn;