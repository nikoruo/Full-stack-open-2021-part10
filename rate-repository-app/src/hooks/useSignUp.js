import { useMutation, useApolloClient } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
    const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_USER);

  const review = async ({ username, password }) => {
    const result = await mutate({variables: {"username": username, "password": password}});
    apolloClient.resetStore();

    return result;
  };

  return [review, result];
};

export default useSignUp;