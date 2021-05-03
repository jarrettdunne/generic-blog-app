import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function PostEdit(props) {
    const [formData, setFormData] = useState({
        name: ''
    })
    const { id } = useParams()
    const { posts, handleEdit } = props

    useEffect(() => {
        const prefillFormData = () => {
            const item = posts.find(i => i.id === Number(id))
            setFormData({
                title: item['title'],
                content: item['content']
            })
        }
        if (posts.length) {
            prefillFormData();
        }
    }, [posts])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEdit(id, formData)
    }

    return (
        <div className="post-create-wrapper">
            <form className="post-create-form" onSubmit={handleSubmit}>
                <div className="user-create-form-name">Edit this post</div>
                <input className="post-create-title" required type="text" name="title" placeholder="title (required)" value={formData['title']} onChange={handleChange} />
                <textarea className="post-create-content" required name="content" placeholder="text (required)" cols="30" rows="10" value={formData['content']} onChange={handleChange} ></textarea>
                <input className="post-create-submit" type="submit" value="Post" />
            </form>
        </div>
    )
}
