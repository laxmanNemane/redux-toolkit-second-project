import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import ReactionsButtons from "./ReactionsButtons";
import TimeAgo from "./TimeAgo";

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    console.log(posts);

    const orderedPostList = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPostlist = orderedPostList.map((post) => (
        <article key={post.id} style={{ border: "1px solid white", borderRadius: "10px" }} className="my-2 mx-2 px-3 py-3 ">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <div className="postcredit d-flex">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </div>
            <ReactionsButtons post={post} />
        </article>
    ));
    return (
        <div style={{ width: "50%", margin: "auto", }}>
            <h4 className="ms-2 py-2 mt-4">Posts</h4>
            {renderedPostlist}
        </div>
    );
};

export default PostList;
