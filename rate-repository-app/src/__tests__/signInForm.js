import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignInForm from '../components/SignInForm';
import { Formik } from 'formik';

describe('Form', () => {
    it('calls function provided by onSubmit prop after pressing the submit button', () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<Formik
        initialValues={{
            username: "",
            password: ""
        }}
        onSubmit={onSubmit}
        >
        {({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
      </Formik>);
  
      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));
  
      expect(onSubmit).toHaveBeenCalledTimes(1);
  
      // onSubmit.mock.calls[0][0] contains the first argument of the first call
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });