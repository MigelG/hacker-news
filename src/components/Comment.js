import { useEffect } from 'react';
import CommentsList from './CommentsList';

function Comment({ comment, changeAllKids, count }) {
    useEffect(() => {
        changeAllKids(1);
        count.current = count.current + 1;
    }, [])

    return (
        <li className="comments__comment">
            <p className="comments__author">{comment.by}</p>
            <p className="comments__text">{comment.text}</p>

            {comment.kids ?
                <CommentsList
                    commentsList={comment.kids}
                    changeAllKids={changeAllKids}
                    count={count} /> :
                null}
        </li>
    );
}

export default Comment;