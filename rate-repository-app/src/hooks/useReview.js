import { useMutation, useApolloClient } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReview = () => {
    const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async ({ owner, name, rating, text }) => {
    const result = await mutate({variables: {"repositoryName": name, "ownerName": owner, "rating": parseInt(rating), "text": text}});
    apolloClient.resetStore();

    return result;
  };

  return [review, result];
};

export default useReview;