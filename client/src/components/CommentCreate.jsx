import React from 'react'

import UserOptions from './UserOptions'

export default function CommentCreate(props) {
    const { currentUser } = props
    return (
        <form className="create-comment-wrapper">
            <textarea className="create-comment-textarea" placeholder="What are your thought?" name="" id="" cols="0" rows="0"></textarea>
            <div className="comment-create-options">
                {
                    currentUser
                    ?
                    <input className="comment-create-submit" type="submit" value="Comment" />
                    :
                    <UserOptions />
                }
            </div>
        </form>
    )
}
