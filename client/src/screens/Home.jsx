import React from 'react'
import {Link} from 'react-router-dom'

import PostMain from '../components/PostMain'

import add from '../assests/add_circle_black_48dp.svg'
import trend from '../assests/trending_up_black_48dp.svg'
import friend from '../assests/person_black_48dp.svg'
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
                <Link to='/posts/create'>
                    <div className="home-option">
                        <img className="icon" src={add} alt="add"/>
                        Create a post
                    </div>
                </Link>
                <div className="home-option">
                    Treding
                    <img className="icon" src={trend} alt=""/>
                </div>
                <div className="home-option">
                    Only Friends
                    <img className="icon" src={friend} alt=""/>
                </div>
            </div>
            <div className="home-posts-container">
                {posts()}
            </div>
        </div>
    )
}
