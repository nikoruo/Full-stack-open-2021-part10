import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    flexContainerRow: {
        flexDirection: 'column',
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 15 
      },
});

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
}

const StatsItem = ({name, count, testID}) => {
    const inThousands = kFormatter(count);
    
    return (
      <View style={styles.flexContainerRow}>
          <Text testID={testID} fontWeight="bold">{inThousands}</Text>
          <Text color="textSecondary">{name}</Text>          
      </View>
    );
  };
  
  export default StatsItem;