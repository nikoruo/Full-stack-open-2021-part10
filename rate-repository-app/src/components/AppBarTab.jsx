import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        padding: 20,
      },
    color: {
       color: "#FFFFFF" 
    }
});

const AppBarTab = ({text, target}) => {
    return (
      <Pressable>
        <Text to={target} style={styles.container}>
            <Text style={styles.color} fontWeight="bold" fontSize="subheading">{text}</Text>
        </Text>
      </Pressable>
    );
  };
  
  export default AppBarTab;