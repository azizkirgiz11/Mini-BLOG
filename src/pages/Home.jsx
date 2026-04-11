import React from "react";

const Home = () => {
  return (
    <div>
      <section className="posts-section">
        <h2>All Posts</h2>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <PostList posts={posts} />
        )}
      </section>
    </div>
  );
};

export default Home;
