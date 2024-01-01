import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AddReview } from "../add-review/add-review.component";
import { UserContext } from "../../contexts/user.context";
import { ReviewEditorContainer, EditorTitle } from "./review-editor.styles";

export function ReviewEditor() {
  const { movieId } = useParams();
  const { userReviews } = useContext(UserContext);
  const review = userReviews.find((review) => review.movieId === movieId);

  return (
    <ReviewEditorContainer>
      <EditorTitle>Edit review of {review.title}</EditorTitle>
      <AddReview
        movieId={movieId}
        movieTitle={review.title}
        movieReview={review.review}
      />
    </ReviewEditorContainer>
  );
}
