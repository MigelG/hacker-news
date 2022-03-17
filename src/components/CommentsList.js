import { useEffect, useState } from "react";
import api from "../utils/api";
import Comment from "./Comment";

function CommentsList({ commentsList, changeAllKids }) {
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
                changeAllKids(res.length);
                setComments(res);
            })
            .catch(err => console.log(err));
    }, [])



    return (
        <ul className='comments__list'>
            {
                comments.map((comment) => <Comment
                    key={comment.id}
                    comment={comment}
                    changeAllKids={changeAllKids} />)
            }
        </ul>
    );
}

export default CommentsList;