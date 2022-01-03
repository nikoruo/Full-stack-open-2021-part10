import React, {useState} from 'react';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';
import { useHistory } from "react-router-native";
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {


  const [selectedOrder, setSelectedOrder] = useState("latest");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterDebounce] = useDebounce(selectedFilter, 500);


  const { repositories } = useRepositories(selectedOrder, filterDebounce);


  const history = useHistory();


  console.log("selector");
  return <RepositoryListContainer 
      repositories={repositories}
      selectedOrder={selectedOrder} 
      setSelectedOrder={setSelectedOrder}
      history={history} 
      setSelectedFilter={setSelectedFilter}
      selectedFilter={selectedFilter}
    />;
};

export default RepositoryList;