import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😯",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionsButtons = ({ post }) => {

    // console.log("post", post)
    const dispatch = useDispatch()
    const reactionsButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionsButtons btn"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}

            </button>
        );
    })
    return <div>{reactionsButtons}</div>
};

export default ReactionsButtons;
