import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, deletePost}) => {
    
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Постов не найдено!
            </h1>
        );
    }
    
    return (
        <div>
            <TransitionGroup>
                {posts.map(post => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem post={post} deletePost={deletePost}/> 
                    </CSSTransition>  
            )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;