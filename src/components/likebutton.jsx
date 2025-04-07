import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        padding: "6px 12px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: liked ? "#ff4d4d" : "#e0e0e0",
        color: liked ? "white" : "black",
        fontWeight: "bold",
      }}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
