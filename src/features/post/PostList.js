import { useSelector } from "react-redux";
import React from "react";
import { selectedPosts } from "./postsSlice";

function PostList() {
  const posts = useSelector(selectedPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostList;
