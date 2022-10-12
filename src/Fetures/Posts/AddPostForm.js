import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOpetion = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section
      style={{
        width: "40%",
        margin: "auto",
        background: "#ced4da",
        borderRadius: "10px",
      }}
      className="px-3 py-3 text-dark mt-3"
    >
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle" className="fw-bold mb-1">
          Post Title:
        </label>{" "}
        <br />
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          className="form-control"
          onChange={onTitleChanged}
        />{" "}
        <br />
        <label htmlFor="postAuthor" className="fw-bold mb-2">
          Author:
        </label>
        <select
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
          className="form-control mb-3"
        >
          {userOpetion}
        </select>
        <label htmlFor="postContent" className="fw-bold mb-1 ">
          Content:
        </label>{" "}
        <br />
        <textarea
          className="form-control"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <br />
        <button
          type="button"
          className="btn btn-primary my-2 form-control"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
