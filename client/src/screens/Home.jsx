import React from 'react'
import {Link} from 'react-router-dom'

import PostMain from '../components/PostMain'

import './styles/Home.css'

export default function Home() {
    const arr = [...Array(10).keys()]

    const posts = () => {
        return arr.map((v, i) => (
            <div key={i}>
                <Link to={`/posts/${v}`}>
                    <PostMain />
                </Link>
            </div>
        ))
    }

    return (
        <div className="home">
            <div className="home-options-container">
                <div className="home-option"></div>
                <div className="home-option"></div>
                <div className="home-option"></div>
            </div>
            <div className="home-posts-container">
                {posts()}
            </div>
        </div>
    )
}
