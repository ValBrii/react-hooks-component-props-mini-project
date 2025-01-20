import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} /> {/* Pass the image and about text as props */}
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <ArticleList posts={blogData.posts} />

    </div>
  );
}

export default App;
