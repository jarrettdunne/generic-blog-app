import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import PostMain from '../components/PostMain'
import { getUserPosts } from '../services/posts'

import './styles/UserHome.css'

export default function UserHome() {
    const [userPosts, setUserPosts] = useState([])
    const params = useParams()

    useEffect(() => {
        const fetchPosts = async () => {
            const postData = await getUserPosts(params.id)
            setUserPosts(postData)
        }
        fetchPosts()
    }, [params.id])

    const posts = () => {
        return userPosts.map((v, i) => (
            <div className="home-posts-container-item" key={i}>
                <Link to={`/posts/${v.id}`}>
                    <PostMain post={v} />
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
