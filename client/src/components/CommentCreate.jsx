import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'

import { postComment } from '../services/comments'
import UserOptions from './UserOptions'

export default function CommentCreate(props) {
    const params = useParams()
    const history = useHistory()
    const { id } = params
    const { currentUser } = props
    const [content, setContent] = useState(
        {
            content: ''
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContent(prevState => ({
            ...prevState,   
            [name]: value
        }))
    }

    const handleCreate = async (id, content) => {
        console.log(id, content)
        const data = await postComment(id, content);
        setContent(prevState => [...prevState, data])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCreate(id, content)
        history.go(0)
    }

    return (
        <form className="create-comment-wrapper" onSubmit={handleSubmit}>
            <input 
                className="create-comment-textarea" 
                type="text" 
                required 
                placeholder="How does this make you feel?" 
                name="content"
                onChange={handleChange}>
            </input>
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
