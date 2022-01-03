import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import {Picker} from '@react-native-picker/picker';


import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, setSelectedFilter, selectedFilter }) => {
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
        ListHeaderComponent={() => <DropPicker 
              setSelectedFilter={setSelectedFilter}
              selectedFilter={selectedFilter}
              />}
      />
    );
  };

  const DropPicker = ({setSelectedFilter, selectedFilter}) => {

    return(
        <Picker
          style={{margin: 20}}
          selectedValue={selectedFilter}
          onValueChange={(itemValue) =>
            setSelectedFilter(itemValue)
          }>
          <Picker.Item label="Latest repositories" value="date" />
          <Picker.Item label="Highest rated repositories" value="highAverage" />
          <Picker.Item label="Lowest rated repositories" value="lowAverage" />
        </Picker>
    );
  };