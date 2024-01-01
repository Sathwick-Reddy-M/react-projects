import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AddReview } from "../add-review/add-review.component";
import { UserContext } from "../../contexts/user.context";

export function ReviewEditor() {
  const { movieId } = useParams();
  const { userReviews } = useContext(UserContext);
  const review = userReviews.find((review) => review.movieId === movieId);

  return (
    <div>
      <h1>Edit review of {review.title}</h1>
      <AddReview
        movieId={movieId}
        movieTitle={review.title}
        movieReview={review.review}
      />
    </div>
  );
}
