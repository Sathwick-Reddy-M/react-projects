import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { saveReview } from "../../utils/firebase/firebase.utils";

export function AddReview({ movieId, movieTitle }) {
  const [value, setValue] = useState("");
  async function saveClickHandler() {
    const res = await saveReview(movieId, movieTitle, value);
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
      </div>
    </div>
  );
}
