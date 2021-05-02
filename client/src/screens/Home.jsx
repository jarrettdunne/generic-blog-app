import React from 'react'
import {Link} from 'react-router-dom'

import PostMain from '../components/PostMain'

import add from '../assests/add_circle_black_48dp.svg'
import trend from '../assests/trending_up_black_48dp.svg'
import friend from '../assests/person_black_48dp.svg'
import clockIcon from  '../assests/schedule_black_48dp.svg'
import watchIcon from  '../assests/watch_later_black_48dp.svg'
import './styles/Home.css'

export default function Home(props) {
    const { currentUser } = props

    const posts = () => {
        return props.posts.map((v, i) => (
            <div className="home-posts-container-item" key={i}>
                <div className="home-post">
                    <Link to={`/posts/${v.id}`}>
                        <PostMain post={v}/>
                    </Link>
                </div>
            </div>
        ))
    }

    return (
        <div className="home-wrapper">
            <div className="home-trends-wrapper">
                <div className="home-trends-header">
                    Trending Topics 
                </div>
            </div>
            <div className="home-posts-wrapper">
                <div className="home-options-container">
                    {
                        currentUser 
                        ?
                        <Link className="links" to='/posts/create'>
                            <div className="home-option">
                                <img className="icon" src={add} alt="add"/>
                                Create a post
                            </div>
                        </Link>
                        :
                        null
                    }   
                    <Link className="links">
                        <div className="home-option middle">
                            Hot
                            <img className="icon" src={trend} alt=""/>
                        </div>
                    </Link>
                    <Link className="links" >
                        <div className="home-option">
                            Newest
                            <img className="icon" src={watchIcon} alt=""/>
                        </div>
                    </Link>
                    <Link className="links" >
                        <div className="home-option">
                            Only Friends
                            <img className="icon" src={friend} alt=""/>
                        </div>
                    </Link>
                </div>
                <div className="home-posts-container">
                    {posts()}
                </div>
            </div>
        </div>
    )
}
