import MyButton from '../UI/MyButton/MyButton';
import './PostItem.css';


const PostItem = (props) => {

    return (
        <div className="post-item">
            <div>
                <div>
                    <h3>{props.post.title}</h3>
                </div>
                <div>
                    <p>{props.post.body}</p>
                </div>
            </div>
            <div>
                <MyButton onClick={() => props.deletePost(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
}

export default PostItem;