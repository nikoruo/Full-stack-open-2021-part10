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
