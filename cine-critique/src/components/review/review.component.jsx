import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { getReviewsForMovie } from "../../utils/firebase/firebase.utils";
import {
  ReviewContainer,
  ReviewTitle,
  ReviewTable,
  NoReviewsMessage,
} from "./review.styles";

export function Review({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    try {
      const asyncHandler = async () => {
        const reviews = await getReviewsForMovie(movieId);
        setReviews(reviews);
      };
      asyncHandler();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return reviews ? (
    <ReviewContainer>
      <ReviewTitle>Reviews</ReviewTitle>
      <ReviewTable>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td>
                <b>{review.username}:</b>
              </td>
              <td
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(review.review),
                }}
              ></td>
            </tr>
          ))}
        </tbody>
      </ReviewTable>
    </ReviewContainer>
  ) : (
    <ReviewContainer>
      <ReviewTitle>Reviews</ReviewTitle>
      <NoReviewsMessage>No reviews yet.</NoReviewsMessage>
    </ReviewContainer>
  );
}
