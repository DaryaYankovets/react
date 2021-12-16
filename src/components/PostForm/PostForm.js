import React, {useState} from "react";

import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({addNewPost}) => {
    const [post, setPost] = useState({title: '', description: ''});

    const onAddNewPost = (event) => {
        event.preventDefault(); 
        const newPost = {
            ...post, id: Date.now()
        }
        addNewPost(newPost);
        setPost({title: '', description: ''});
      }
    
    return (
        <form>
            <MyInput  
                type="text" 
                placeholder="Input title post..."
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <MyInput 
                type="text" 
                placeholder="Input description post..."
                value={post.description}
                onChange={event => setPost({...post, description: event.target.value})}
            />
            <MyButton onClick={onAddNewPost}>Create post</MyButton>
        </form>
    );
}

export default PostForm;