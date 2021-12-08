import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputBox: {
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    color: theme.colors.textPrimary
  },
  inputError: {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    color: theme.colors.error
  }
});

const TextInput = ({ error, ...props }) => {
  const textInputStyle = error ? styles.inputError : styles.inputBox;

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;