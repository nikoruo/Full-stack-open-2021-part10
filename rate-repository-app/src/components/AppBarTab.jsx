import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
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
    console.log("target", target);
    return (
      <Pressable>
        <Link to={target} style={styles.container}>
            <Text style={styles.color} fontWeight="bold" fontSize="subheading">{text}</Text>
        </Link>
      </Pressable>
    );
  };
  
  export default AppBarTab;