import DOMPurify from "dompurify";
import { useContext } from "react";
import {
  UserReviewsContainer,
  ReviewsTitle,
  ReviewItem,
  MovieLink,
  MovieTitle,
  ReviewContent,
} from "./user-reviews.styles";
import { useSelector } from "react-redux";
import { selectUserReviews } from "../../store/user/user.selector";

export function UserReviews() {
  const userReviews = useSelector(selectUserReviews);

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
