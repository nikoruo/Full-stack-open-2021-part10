import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    margin: 15
  }

});

const TextInput = ({ ...props }) => {
  //const textInputStyle = [style];

  return <NativeTextInput style={styles.inputBox} {...props} />;
};

export default TextInput;