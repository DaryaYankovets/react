import React, { useState, useEffect} from "react";
import { usePosts } from "../../ hooks/usePosts";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import PostFilter from "../PostFilter/PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/MyButton/MyButton";
import './App.css';
import PostService from "../../API/PostService";
import Loader from "../UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', search: ''});
  const [visibleModal, setVisibleModal] = useState(false);
  const sortedAndSearchPost = usePosts(posts, filter.sort, filter.search);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost ]);
    setVisibleModal(false);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));  
  }

  
  return (
    <div className="app">
      <MyButton onClick={() => setVisibleModal(true)}>
        Создать пост
      </MyButton>
      <MyModal 
        visibleModal={visibleModal} 
        setVisibleModal={setVisibleModal}
      >
        <PostForm addNewPost={addNewPost}/>
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {
        isPostsLoading 
        ?  <Loader/>
        : <PostList deletePost={deletePost} posts={sortedAndSearchPost}/>
      }
      
    </div>
    
  );
}

export default App;
