import { useEffect } from "react";
import Comment from "./Comment";

function CommentsList({ commentsList, changeAllKids }) {

    useEffect(() => {
        changeAllKids(commentsList.length);
    }, []);

    return (
        <ul className='comments__list'>
            {
                commentsList.map((commentId) => <Comment
                    key={commentId}
                    commentId={commentId}
                    changeAllKids={changeAllKids} />)
            }
        </ul>
    );
}

export default CommentsList;