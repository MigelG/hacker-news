import CommentsList from './CommentsList';

function Comment({ comment }) {

    return (
        <li className="comments__comment">
            <p className="comments__author">{comment.by}</p>
            <p className="comments__text">{comment.text ? 'text' : ''}</p>

            {comment.kids ?
                <CommentsList
                    commentsList={comment.kids} /> :
                null}
        </li>
    );
}

export default Comment;