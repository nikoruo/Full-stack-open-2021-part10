import { CHECK_AUTH } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useUser = ({reviews}) => {

  const variables = {"includeReviews": reviews};
  const {data, loading} = useQuery(CHECK_AUTH, {
    fetchPolicy: 'cache-and-network',
    variables
    // Other options
  });

  return { authorizedUser: data ? data.authorizedUser : undefined, loading};
};

export default useUser;