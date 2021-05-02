import React, { useState } from 'react'

import unsavedIcon from '../assests/bookmark_border_black_48dp.svg'
import savedIcon from '../assests/bookmark_black_48dp.svg'
import commentIcon from '../assests/comment_black_48dp.svg'
import unfavIcon from '../assests/favorite_border_black_48dp.svg'
import favIcon from '../assests/favorite_black_48dp.svg'
import shareIcon from '../assests/share_black_48dp.svg'

import './styles/PostMain.css'

export default function PostMain(props) {
    const [fav, setFav] = useState(true)
    const [icon, setIcon] = useState(unfavIcon)
    const [likes, setLikes] = useState(0)
    const [save, setSave] = useState(true)
    const [saveIcon, setSaveIcon] = useState(unsavedIcon)
    const { post } = props

    const handleLike = (e) => {
        e.preventDefault()
        setFav(prev => !prev)
        if (fav) {
            setIcon(favIcon)
            setLikes(prev => prev += 1)
        } else {
            setIcon(unfavIcon)
            setLikes(prev => prev -= 1)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        setSave(prev => !prev)
        if (save) {
            setSaveIcon(savedIcon)
        } else {
            setSaveIcon(unsavedIcon)
        }
    }

    const handleShare = (e) => {
        e.preventDefault()
    }

    return (
        <div className="post-wrapper">
            <div className="post-bar">
                <div className="post-bar-like post-bar-item">
                    <button onClick={handleLike}>
                        <img className="icon clickable-icon" src={icon} alt="heart" />
                        <div className="num-likes">{likes}</div>
                    </button>
                </div>
                <div className="post-bar-saved post-bar-item">
                    <button onClick={handleSave}>
                        <img className="icon clickable-icon" src={saveIcon} alt="bookmark" />
                    </button>
                </div>
                <div className="post-bar-share post-bar-item">
                    <button onClick={handleShare}>
                        <img className="icon clickable-icon" src={shareIcon} alt="share" />
                    </button>
                </div>
                <hr/>
                <div className="post-bar-comment post-bar-item">
                    <img className="icon" src={commentIcon} alt="comment" />
                    <div className="num-comments">
                        {
                            post.comments
                            ?
                            post.comments.length
                            :
                            0
                        }
                    </div>
                </div>
            </div>
            <div className="post-contents">
                <div className="post-header">
                    <div className="post-header-about">{post.created_at}</div>
                    <div className="post-header-title">{post.title}</div>
                </div>
                <div className="post-content">{post.content}</div>
            </div>
        </div>
    )
}
