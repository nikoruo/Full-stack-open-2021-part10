import React, {useState} from 'react';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';


const RepositoryList = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const { repositories } = useRepositories(selectedFilter);
  console.log("selector", selectedFilter, repositories);
  return <RepositoryListContainer 
      repositories={repositories}
      selectedFilter={selectedFilter} 
      setSelectedFilter={setSelectedFilter} 
    />;
};

export default RepositoryList;