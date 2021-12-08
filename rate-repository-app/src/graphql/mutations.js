import { gql } from '@apollo/client';

//käyttäjän sisäänkirjautuminen
export const LOGIN_USER = gql`
    mutation loginUser($username: String!, $password: String!) {
        authorize (
            credentials: { username: $username, password: $password }
        ) {
            accessToken,
        }
  }
`;