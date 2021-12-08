import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

const useSignIn = () => {
 
  const [mutate, result] = useMutation(LOGIN_USER);

  const signIn = async ({ username, password }) => {
    const result = await mutate({variables: {username, password}});
    return result;
  };

  return [signIn, result];
};

export default useSignIn;