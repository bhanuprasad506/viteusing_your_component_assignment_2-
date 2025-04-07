import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        padding: "15px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={post.profilePic}
        alt="Profile"
        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
      />
      <div>
        <h3 style={{ margin: "0" }}>{post.username}</h3>
        <p style={{ margin: "5px 0" }}>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
