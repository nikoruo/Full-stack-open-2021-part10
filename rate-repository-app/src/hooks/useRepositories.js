//import { useState } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {
  //const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  const {data, loading} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  /*const fetchRepositories = async () => {
    setLoading(true);

    


    //const response = await fetch('http://192.168.1.103:5000/api/repositories');
    //const json = await response.json();

    setLoading(false);
    //setRepositories(json);
  };*/

  /*useEffect(() => {
    fetchRepositories();
  }, []);*/
  
//, refetch: fetchRepositories 
  return { repositories: data ? data.repositories : undefined, loading};
};

export default useRepositories;