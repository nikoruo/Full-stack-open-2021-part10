import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useRepository = ({id}) => {
  console.log("use",id);
  const variables = {id};
  console.log("vari",variables);
  const {data, loading} = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables
    // Other options
  });
  console.log("data", data);
  return { repository: data ? data.repository : undefined, loading};
};

export default useRepository;