import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';

import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories }) => {
    const history = useHistory();

    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    const renderItem = ({item}) => (
        <Pressable onPress={() => handleClick(item)}>
            <RepositoryItem repo={item} />
        </Pressable>
    ); 

    const handleClick = ({id}) => {        
        history.push(`/repositories/${id}`);
    };

    return (
        <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={repo => repo.id}
      />
    );
  };