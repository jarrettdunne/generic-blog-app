import React, { useState } from 'react'

import './styles/PostCreate.css'

export default function PostCreate(props) {
    const [formData, setFormData] = useState({
        title: ''
    })
    // const { name } = formData;
    const { handleCreate } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCreate(formData)
    }

    return (
        <div className="post-create-wrapper">
            <form className="post-create-form" onSubmit={handleSubmit} >
                <div className="user-create-form-name">Create a post</div>
                <input className="post-create-title" required type="text" name="title" placeholder="title (required)" onChange={handleChange} />
                <textarea className="post-create-content" required name="content" placeholder="text (required)" cols="30" rows="10" onChange={handleChange} ></textarea>
                <input className="post-create-submit" type="submit" value="Post" />
            </form>
        </div>
    )
}
