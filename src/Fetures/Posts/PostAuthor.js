import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return <div> Author - {author ? author.name : "Unknown Author"}</div>;
};

export default PostAuthor;
