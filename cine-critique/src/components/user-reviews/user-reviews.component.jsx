import DOMPurify from "dompurify";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { getUserReviews } from "../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";

export function UserReviews() {
  const [reviews, setReviews] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    async function getReviews() {
      const reviews = await getUserReviews(currentUser);
      console.log(reviews);
      setReviews(reviews);
    }
    getReviews();
  }, [currentUser]);

  return (
    <div>
      <h1>User Reviews</h1>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index}>
            <Link to={`/reviewedit/${review.movieId}/${review.title}`}>
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
