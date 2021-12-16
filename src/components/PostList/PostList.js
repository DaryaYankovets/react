import PostItem from "../PostItem/PostItem";

const PostList = (props) => {
    return (
        <div>
            {props.posts.map(post => <PostItem post={post} key={post.id}/>)}
        </div>
    );
}

export default PostList;