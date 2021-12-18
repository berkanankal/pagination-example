import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <ul className="list-group">
      {posts.map((p, i) => (
        <li className="list-group-item" key={i}>
          {p.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
