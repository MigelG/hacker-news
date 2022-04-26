import { useEffect, useRef } from 'react';
import CommentsList from '../CommentList/CommentsList';
import styles from './CommentItem.module.scss';

function CommentItem({ comment, changeAllKids, count }) {
    const ref = useRef();
    useEffect(() => {
        changeAllKids(1);
        count.current = count.current + 1;
        ref.current.insertAdjacentHTML("afterbegin", comment.text);
    }, []);

    return (
        <li className={styles.comment}>
            <p className={styles.author}>{comment.by}</p>
            <p ref={ref} className={styles.text}></p>

            {comment.kids ?
                <CommentsList
                    commentsList={comment.kids}
                    changeAllKids={changeAllKids}
                    count={count} /> :
                null}
        </li>
    );
}

export default CommentItem;