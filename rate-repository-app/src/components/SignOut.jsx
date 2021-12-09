import { useEffect, useContext } from 'react';
import { useHistory } from "react-router-native";
import { useApolloClient } from '@apollo/client';

import AuthStorageContext from '../contexts/AuthStorageContext';

const SignOut = () => {
    const history = useHistory();
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const signOut = async () => {
        await authStorage.removeAccessToken();        
        await apolloClient.resetStore();

        history.push("/");
    };

    useEffect(() => {
        signOut();
    }, []);
  
    return (null);
};

export default SignOut;