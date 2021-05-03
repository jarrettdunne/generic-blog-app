import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import PostMain from '../components/PostMain'
import Search from '../components/Search'

import add from '../assests/add_circle_black_48dp.svg'
import trend from '../assests/trending_up_black_48dp.svg'
import friend from '../assests/person_black_48dp.svg'
// import clockIcon from  '../assests/schedule_black_48dp.svg'
import watchIcon from '../assests/watch_later_black_48dp.svg'

import { getTrendingPosts } from '../services/posts'

import './styles/Home.css'

export default function Home(props) {
    const { currentUser } = props
    const [trending, setTrending] = useState(null)
    const [queriedPosts, setQueriedPosts] = useState([])

    const onChange = event => {
        const newQueriedPosts = props.posts.filter(post => post.title.toLowerCase().includes(event.target.value.toLowerCase()))
        setQueriedPosts(newQueriedPosts)
    }

    const handleSearchSubmit = event => event.preventDefault()

    const posts = () => {
        return queriedPosts.map((v, i) => (
            <div className="home-posts-container-item" key={i}>
                <div className="home-post">
                    <Link to={`/posts/${v.id}`}>
                        <PostMain post={v} currentUser={currentUser} />
                    </Link>
                </div>
            </div>
        ))
    }

    useEffect(() => {
        const fetchTrending = async () => {
            const trending = await getTrendingPosts()
            setTrending(trending)
        }
        setQueriedPosts(props.posts)
        fetchTrending()
    }, [props.posts])

    const renderTrending = () => {
        return (
            <div className="home-trends-topics">
                {trending && [...Array(10).keys()].map((i) => (
                    <div key={i}>
                        {i + 1}. {trending[i][0]}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="home-wrapper">
            <div className="home-trends-wrapper">
                <div className="home-trends-header">
                    Trending Topics
                </div>
                {renderTrending()}
            </div>
            <div className="home-posts-wrapper">
                <div className="home-search-wrapper">
                    <Search handleSearchSubmit={handleSearchSubmit} onChange={onChange} />
                </div>
                <div className="home-options-container">
                    {
                        currentUser
                            ?
                            <Link className="links" to='/posts/create'>
                                <div className="home-option">
                                    <img className="icon" src={add} alt="add" />
                                Create a post
                            </div>
                            </Link>
                            :
                            null
                    }
                    <Link className="links" to='/'>
                        <div className="home-option middle">
                            Hot
                            <img className="icon" src={trend} alt="" />
                        </div>
                    </Link>
                    <Link className="links" to='/' >
                        <div className="home-option">
                            Newest
                            <img className="icon" src={watchIcon} alt="" />
                        </div>
                    </Link>
                    <Link className="links" to='/' >
                        <div className="home-option">
                            Only Friends
                            <img className="icon" src={friend} alt="" />
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
