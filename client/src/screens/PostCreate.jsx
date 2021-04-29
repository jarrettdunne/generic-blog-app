import React from 'react'

import './styles/PostCreate.css'

export default function PostCreate() {
    return (
        <div className="post-create-wrapper">
            Create a post
            <form className="post-create-form">
                <input type="text" name="title" placeholder="title" />
                <textarea name="content" id="" cols="30" rows="10"></textarea>
                <input className="post-create-submit" type="submit" value="post"/>
            </form>
        </div>
    )
}
