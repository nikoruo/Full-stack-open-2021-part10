import { CHECK_AUTH } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useUser = () => {

  const {data, loading} = useQuery(CHECK_AUTH, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  return { authorizedUser: data ? data.authorizedUser : undefined, loading};
};

export default useUser;