import { gql } from '@apollo/client';

//repojen haku
export const GET_REPOSITORIES = gql`
  query getRepositories{
    repositories {
      edges {
        node {
          id,
          ownerAvatarUrl,
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage
        }
      }
    }
  }
`;

//tarkistetaan onko kirjautunut
export const CHECK_AUTH = gql`
  query checkAuth{
    authorizedUser {
      id
      username
    }
  }
`;