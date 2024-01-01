import { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveReview, deleteReview } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

export function AddReview({ movieId, movieTitle, movieReview }) {
  const [value, setValue] = useState(movieReview || "");
  const { userReviews, setUserReviews } = useContext(UserContext);

  async function deleteHandler() {
    const response = await deleteReview(movieId);

    const updatedUserReviews = userReviews.filter(
      (review) => review.movieId !== movieId
    );
    setUserReviews(updatedUserReviews);
    alert("Review deleted!");
    window.location.reload();
  }

  async function saveClickHandler() {
    const { userReviews } = await saveReview(movieId, movieTitle, value);
    setUserReviews(userReviews);
    alert("Review saved!");
    window.location.reload();
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
      <div>
        <button onClick={saveClickHandler}>Save Review</button>
        <button onClick={deleteHandler}>Delete Review</button>
      </div>
    </div>
  );
}
