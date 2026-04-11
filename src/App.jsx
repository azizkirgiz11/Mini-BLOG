import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <header>
        <h3>Our blog</h3>
        <h1>Resources and insights</h1>
        <p>The latest industry news, interviews, technologies, and resources.</p>
      </header>
      <main>
        <Routers>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routers>
      </main>
    </div>
  );
};

export default App;
