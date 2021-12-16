import React, {useState} from "react";

import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const PostForm = ({addNewPost}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const onAddNewPost = (event) => {
        event.preventDefault(); 
        const newPost = {
            ...post, id: Date.now()
        }
        addNewPost(newPost);
        setPost({title: '', body: ''});
      }
    
    return (
        <form>
             <h1 style={{textAlign: 'center'}}>Создание поста</h1>
            <MyInput  
                type="text" 
                placeholder="Введите название поста..."
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <MyInput 
                type="text" 
                placeholder="Введите описание поста..."
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
            />
            <MyButton onClick={onAddNewPost}>Создать</MyButton>
        </form>
    );
}

export default PostForm;