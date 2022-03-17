import CommentsList from './CommentsList';

function Comment({ comment, changeAllKids }) {

    return (
        <li className="comments__comment">
            <p className="comments__author">{comment.by}</p>
            <p className="comments__text">{comment.text}</p>

            {comment.kids ?
                <CommentsList
                    commentsList={comment.kids}
                    changeAllKids={changeAllKids} /> :
                null}
        </li>
    );
}

export default Comment;