import React, {useRef, useState} from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";

import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', description: 'description post'},
    {id: 2, title: 'HTML', description: 'description post'},
    {id: 3, title: 'React JS', description: 'description post'},
  ]);

  
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost ]);
  }

  
  return (
    <div className="app">
      <PostForm addNewPost={addNewPost}/>
      <PostList posts={posts}/>
    </div>
    
  );
}

export default App;
