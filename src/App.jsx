import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <div>
      <header>
        <h3>Our blog</h3>
        <h1>Resources and insights</h1>
        <p>The latest industry news, interviews, technologies, and resources.</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
