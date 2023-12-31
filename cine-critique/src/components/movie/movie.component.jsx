import { useEffect, useState, Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../utils/requests/requests.utils";
import { Review } from "../review/review.component";
import { AddReview } from "../add-review/add-review.component";
import { UserContext } from "../../contexts/user.context";

export function Movie() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const { currentUser } = useContext(UserContext);

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
    <div>
      <h1>{movieDetails.Title}</h1>
      <img
        src={movieDetails.Poster}
        alt="Movie Poster"
        style={{ maxWidth: "100%" }}
      />
      <table>
        <tbody>{renderRows()}</tbody>
      </table>
      <Review movieId={movieId} />
      {currentUser && <AddReview movieId={movieId} />}
    </div>
  ) : null;
}
