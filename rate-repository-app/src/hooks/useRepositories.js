//import { useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = (sort, search) => {

  let variables = [];

  switch (sort) {
    case 'highAverage':
      variables = {
        "orderBy":"RATING_AVERAGE", 
        "orderDirection": "DESC",
        "searchKeyword": search
      }; 
      break;
    case 'lowAverage':
      variables = {
        "orderBy":"RATING_AVERAGE", 
        "orderDirection": "ASC",
        "searchKeyword": search
      }; 
      break;
    default:
      variables = {
        "orderBy":"CREATED_AT", 
        "orderDirection": "DESC",
        "searchKeyword": search
      };
  }

  const {data, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
    // Other options
  });
  return { repositories: data ? data.repositories : undefined, loading};
};

export default useRepositories;