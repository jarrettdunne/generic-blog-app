import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import PostSmall from '../components/PostSmall'
import { getUserPosts } from '../services/posts'

import './styles/UserHome.css'

export default function UserHome(props) {
    const [userPosts, setUserPosts] = useState([])
    const params = useParams()
    const { handleDelete, currentUser } = props

    useEffect(() => {
        const fetchPosts = async () => {
            const postData = await getUserPosts(params.id)
            setUserPosts(postData)
        }
        fetchPosts()
    }, [params.id])

    const posts = () => {
        return userPosts.map((v, i) => (
            <div className="home-posts-container-item home-post" key={i}>
                <Link to={`/posts/${v.id}`}>
                    <PostSmall handleDelete={handleDelete} currentUser={currentUser} post={v} />
                </Link>
            </div>
        ))
    }
    return (
        <div className="home-posts-container">
            {posts()}
        </div>
    )
}
