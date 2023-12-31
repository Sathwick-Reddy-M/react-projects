import { useParams } from "react-router-dom";
import { AddReview } from "../add-review/add-review.component";

export function ReviewEditor() {
  const { title, movieId } = useParams();

  return (
    <div>
      <h1>Edit review of {title}</h1>
      <AddReview movieId={movieId} movieTitle={title} />
    </div>
  );
}
