import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveReview, deleteReview } from "../../utils/firebase/firebase.utils";
import {
  ReviewContainer,
  QuillContainer,
  ButtonContainer,
  SaveButton,
  DeleteButton,
} from "./add-review.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectUserReviews } from "../../store/user/user.selector";
import { setUserReviews } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";

export function AddReview({ movieId, movieTitle, movieReview }) {
  const [value, setValue] = useState(movieReview || "");
  const userReviews = useSelector(selectUserReviews);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function deleteHandler() {
    const response = await deleteReview(movieId);

    const updatedUserReviews = userReviews.filter(
      (review) => review.movieId !== movieId
    );
    dispatch(setUserReviews(updatedUserReviews));
    alert("Review deleted!");
    navigate(0);
  }

  async function saveClickHandler() {
    const { userReviews } = await saveReview(movieId, movieTitle, value);
    dispatch(setUserReviews(userReviews));
    alert("Review saved!");
    navigate(0);
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
    <ReviewContainer>
      <QuillContainer>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </QuillContainer>

      <ButtonContainer>
        <SaveButton onClick={saveClickHandler}>Save Review</SaveButton>
        <DeleteButton onClick={deleteHandler}>Delete Review</DeleteButton>
      </ButtonContainer>
    </ReviewContainer>
  );
}
