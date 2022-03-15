import Comment from "./Comment";

function CommentsList({ commentsList }) {

    return (
        <ul className='comments__list'>
            {
                commentsList.map((comment) => <Comment
                    key={comment.id}
                    comment={comment} />)
            }
        </ul>
    );
}

export default CommentsList;