import { gql } from '@apollo/client';

//repojen haku
export const GET_REPOSITORIES = gql`
  query getRepositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
  query getRepository($id: ID!, $first: Int, $after: String){
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
      reviews (first: $first, after: $after){
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

//tarkistetaan onko kirjautunut
export const CHECK_AUTH = gql`
  query checkAuth ($includeReviews: Boolean = false){
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              name
              id
              ownerName
            }
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