import React from "react";
import PostCard from "./components/postcard";
import "./App.css";

const posts = [
  {
    id: 1,
    username: "Alice",
    profilePic: "https://i.pravatar.cc/150?img=1",
    content: "Just had the best coffee ☕!",
  },
  {
    id: 2,
    username: "Bob",
    profilePic: "https://i.pravatar.cc/150?img=2",
    content: "Sunsets are amazing 🌅",
  },
  {
    id: 3,
    username: "Charlie",
    profilePic: "https://i.pravatar.cc/150?img=3",
    content: "Loving the new React update!",
  },
];

function App() {
  return (
    <div className="App" style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h1>Social Feed</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
