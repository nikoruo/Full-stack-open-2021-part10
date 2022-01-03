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

//uusi arvio
export const CREATE_REVIEW = gql`
    mutation createReview ($repositoryName: String!, $ownerName: String!, $rating: Int!, $text: String){
        createReview(
            review: {
                repositoryName: $repositoryName
                ownerName: $ownerName
                rating: $rating
                text: $text
            }
        ) {
            repositoryId
        }
      }
`;

//uusi arvio
export const CREATE_USER = gql`
    mutation createUser ($username: String!, $password: String!){
        createUser(
            user: {
                username: $username
                password: $password
            }
        ) {
            username
        }
      }
`;