import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { getReviewsForMovie } from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>Reviews</h1>
      <table>
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
      </table>
    </div>
  ) : (
    <div>
      <h1>Reviews</h1>
      <p>No reviews yet.</p>
    </div>
  );
}
