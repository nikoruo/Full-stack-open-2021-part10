import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
    flexContainerRow: {
        flexDirection: 'row',
        padding:20,
        backgroundColor: theme.colors.repositoryItem,
        height: 200
      },
      flexContainerCol: {
        flexDirection: "column",
        paddingLeft: 10,
        width: 0,
        flexGrow: 1,
        flex: 1,
      },
      rating: {
          width: 40,
          height: 40,
          borderRadius: 40/2,
          borderWidth:2,
          borderColor: theme.colors.primary,
          justifyContent: "center",
          alignItems: "center"
      }
});

const ReviewItem = ({review}) => {

    return (
        <View style={styles.flexContainerRow}>
            <View style={styles.rating}>
                <Text fontWeight="bold" fontSize="subheading" color="primary">{review.node.rating}</Text>
            </View>
            <View style={styles.flexContainerCol}>
                <Text fontWeight="bold" fontSize="subheading" color="textPrimary">{review.node.user.username}</Text>
                <Text color="textSecondary">{format(new Date(review.node.createdAt), "dd.MM.yyyy")}</Text>
                <Text>{review.node.text}</Text>
            </View>
      </View>
    );
};
  
  export default ReviewItem;