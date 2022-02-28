import { useEffect, useState } from "react";
import api from "../utils/api";
import CommentsList from './CommentsList';

function Comment({ commentId, changeAllKids }) {
    const [comment, setComment] = useState({});

    useEffect(() => {
        api.getItemById(commentId)
            .then((c) => {
                setComment(c);
            })
            .catch(err => console.log(err));
    }, []);

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