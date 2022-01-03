import { gql } from '@apollo/client';

//repojen haku
export const GET_REPOSITORIES = gql`
  query getRepositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
    repositories (orderBy: $orderBy, orderDirection: $orderDirection) {
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

//yksittäisen repon haku
export const GET_REPOSITORY = gql`
  query getRepository($id: ID!){
    repository(id: $id){
      id,
      ownerAvatarUrl,
      fullName,
      description,
      language,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,
      url,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
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