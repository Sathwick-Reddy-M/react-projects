import { useParams } from "react-router-dom";
import { AddReview } from "../add-review/add-review.component";
import { ReviewEditorContainer, EditorTitle } from "./review-editor.styles";
import { useSelector } from "react-redux";
import { selectUserReviews } from "../../store/user/user.selector";
import { Fragment } from "react";

export function ReviewEditor() {
  const { movieId } = useParams();
  const userReviews = useSelector(selectUserReviews);
  const review = userReviews
    ? userReviews.find((review) => review.movieId === movieId)
    : null;

  return (
    <ReviewEditorContainer>
      {review ? (
        <Fragment>
          <EditorTitle>Edit review of {review.title}</EditorTitle>
          <AddReview
            movieId={movieId}
            movieTitle={review.title}
            movieReview={review.review}
          />
        </Fragment>
      ) : (
        <h1>Review Deleted</h1>
      )}
    </ReviewEditorContainer>
  );
}
