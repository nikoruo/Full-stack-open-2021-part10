import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';

import ReviewItem from './ReviewItem';

import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
      separator: {
        height: 10,
      },
});
  
const ItemSeparator = () => <View style={styles.separator} />;

const ReposityView = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({id});

  const onEndReach = () => {
    fetchMore();
  };
  
    return (
        <FlatList
        data={repository.reviews.edges}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={({node}) => node.id}        
        ListHeaderComponent={() => <RepositoryItem repo={repository} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  };
  
  export default ReposityView;