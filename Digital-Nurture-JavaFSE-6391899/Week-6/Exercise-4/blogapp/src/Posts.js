// src/Posts.js
import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      posts: [],
      error: null
    };
  }

  // Method to fetch posts
  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  // Lifecycle method (called after component is mounted)
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling lifecycle method
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    console.error("Error details: ", info);
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        {this.state.posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          this.state.posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    );
  }
}

export default Posts;
