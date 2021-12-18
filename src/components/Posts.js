import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ul class="list-group">
      {posts.map((p) => (
        <li class="list-group-item">{p.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
