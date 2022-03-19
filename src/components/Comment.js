import { useEffect, useRef } from 'react';
import CommentsList from './CommentsList';

function Comment({ comment, changeAllKids, count }) {
    const ref = useRef();
    useEffect(() => {
        changeAllKids(1);
        count.current = count.current + 1;
        ref.current.insertAdjacentHTML("afterbegin", comment.text);
    }, []);



    return (
        <li className="comments__comment">
            <p className="comments__author">{comment.by}</p>
            <p ref={ref} className="comments__text"></p>

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