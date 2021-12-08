import { useHistory } from "react-router-native";
import { useMutation, useApolloClient } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    let history = useHistory();
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(LOGIN_USER);

  const signIn = async ({ username, password }) => {
    const result = await mutate({variables: {username, password}});
    await authStorage.setAccessToken(result.data.authorize.accessToken);
    apolloClient.resetStore();
    history.push("/");
    return result;
  };

  return [signIn, result];
};

export default useSignIn;