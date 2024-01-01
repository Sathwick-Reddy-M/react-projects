import DOMPurify from "dompurify";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  UserReviewsContainer,
  ReviewsTitle,
  ReviewItem,
  MovieLink,
  MovieTitle,
  ReviewContent,
} from "./user-reviews.styles";

export function UserReviews() {
  const { userReviews } = useContext(UserContext);

  return (
    <UserReviewsContainer>
      <ReviewsTitle>User Reviews</ReviewsTitle>
      {userReviews && userReviews.length > 0 ? (
        userReviews.map((review, index) => (
          <ReviewItem key={index}>
            <MovieLink to={`/reviewedit/${review.movieId}`}>
              <MovieTitle>{review.title}</MovieTitle>
            </MovieLink>
            <ReviewContent
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(review.review.substring(0, 50)),
              }}
            ></ReviewContent>
          </ReviewItem>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </UserReviewsContainer>
  );
}
