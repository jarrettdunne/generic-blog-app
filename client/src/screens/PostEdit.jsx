import React from 'react'

export default function PostEdit() {
    return (
        <div className="post-create-wrapper">
            <form className="post-create-form">
                <div className="user-create-form-name">Edit this post</div>
                <input className="post-create-title" required type="text" name="title" placeholder="title (required)" />
                <textarea className="post-create-content" required name="content" placeholder="text (required)" cols="30" rows="10"></textarea>
                <input className="post-create-submit" type="submit" value="Post"/>
            </form>
        </div>
    )
}
