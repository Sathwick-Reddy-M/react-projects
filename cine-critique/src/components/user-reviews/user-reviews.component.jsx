import DOMPurify from "dompurify";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Link } from "react-router-dom";

export function UserReviews() {
  const { userReviews } = useContext(UserContext);

  return (
    <div>
      <h1>User Reviews</h1>
      {userReviews && userReviews.length > 0 ? (
        userReviews.map((review, index) => (
          <div key={index}>
            <Link to={`/reviewedit/${review.movieId}`}>
              <h2>{review.title}</h2>
            </Link>
            <span
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(review.review.substring(0, 50)),
              }}
            ></span>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
