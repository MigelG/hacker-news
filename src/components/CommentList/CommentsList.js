import { useEffect, useState } from 'react';
import api from '../../utils/api';
import CommentItem from '../CommentItem/CommentItem';
import styles from './CommentsList.module.scss';

function CommentsList({ commentsList, changeAllKids, count }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const promises = commentsList.map((id) => {
            return api.getItemById(id);
        });
        Promise.all(promises)
            .then((results) => {
                return results.filter(c => !c.deleted && !c.dead);
            })
            .then((res) => {
                setComments(res);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className={styles.comments}>
            <ul className={styles.list}>
                {comments.map((comment) => <CommentItem
                    key={comment.id}
                    comment={comment}
                    changeAllKids={changeAllKids}
                    count={count} />)}
            </ul>
        </div>
    );
}

export default CommentsList;