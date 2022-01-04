import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ReviewItem from './ReviewItem';
import useUser from '../hooks/useUser';

const styles = StyleSheet.create({
      separator: {
        height: 10,
      },
});
  
const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  
    const reviews = true;
    const user = useUser({reviews});
    if(user.authorizedUser === undefined){
        return <View/>;
    }
    console.log("user", user);
    return (
        <FlatList
        data={user.authorizedUser.reviews.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <ReviewItem list={"true"} review={item} />}
        keyExtractor={({node}) => node.id}
      />
    );
  };
  
  export default UserReviews;