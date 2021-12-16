import './PostItem.css';


const PostItem = (props) => {
    return (
        <div className="post-item">
            <div>
                <div>
                    <h3>{props.post.title}</h3>
                </div>
                <div>
                    <p>{props.post.description}</p>
                </div>
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default PostItem;