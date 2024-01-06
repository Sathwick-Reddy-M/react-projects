import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../utils/requests/requests.utils";
import { Review } from "../review/review.component";
import { AddReview } from "../add-review/add-review.component";
import {
  MovieContainer,
  MovieTitle,
  MoviePoster,
  MovieTable,
} from "./movie.styles";
import { useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUserReviews,
} from "../../store/user/user.selector";

export function Movie() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const currentUser = useSelector(selectCurrentUser);
  const userReviews = useSelector(selectUserReviews);
  const reviewObj = userReviews
    ? userReviews.find((review) => review.movieId === movieId)
    : null;
  const review = reviewObj ? reviewObj.review : "";

  useEffect(() => {
    const asyncHandler = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };
    asyncHandler();
  }, []);

  const renderRows = () => {
    const removeKeys = ["Poster", "Title", "Response", "imdbID"];
    return Object.entries(movieDetails).map(
      ([key, value]) =>
        !removeKeys.includes(key) && (
          <Fragment key={key}>
            {Array.isArray(value) ? (
              value.map((item, index) => (
                <tr key={index}>
                  <td>
                    <b>
                      {key} - {item.Source}:
                    </b>
                  </td>
                  <td>{item.Value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <b>{key}:</b>
                </td>
                <td>{value}</td>
              </tr>
            )}
          </Fragment>
        )
    );
  };

  return movieDetails ? (
    <MovieContainer>
      <MovieTitle>{movieDetails.Title}</MovieTitle>
      <MoviePoster
        src={movieDetails.Poster}
        alt="Movie Poster"
        style={{ maxWidth: "100%" }}
      />
      <MovieTable>
        <tbody>{renderRows()}</tbody>
      </MovieTable>
      <Review movieId={movieId} />
      {currentUser && (
        <AddReview
          movieId={movieId}
          movieTitle={movieDetails.Title}
          movieReview={review}
        />
      )}
    </MovieContainer>
  ) : null;
}
