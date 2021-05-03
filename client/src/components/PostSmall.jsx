import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import unsavedIcon from '../assests/bookmark_border_black_48dp.svg'
import savedIcon from '../assests/bookmark_black_48dp.svg'
import commentIcon from '../assests/comment_black_48dp.svg'
import unfavIcon from '../assests/favorite_border_black_48dp.svg'
import favIcon from '../assests/favorite_black_48dp.svg'
import shareIcon from '../assests/share_black_48dp.svg'
import editIcon from '../assests/edit_black_48dp.svg'
import deleteIcon from '../assests/delete_black_48dp.svg'

import { timeSince } from '../services/funcs'

import './styles/PostSmall.css'

export default function PostSmall(props) {
    const { post, currentUser, handleDelete } = props
    const [fav, setFav] = useState(true)
    const [icon, setIcon] = useState(unfavIcon)
    const [likes, setLikes] = useState(post.likes.length)
    const [save, setSave] = useState(true)
    const [saveIcon, setSaveIcon] = useState(unsavedIcon)

    useEffect(() => {
        const id = post.likes.filter(i => i?.user_id === currentUser?.id)
        if (id[0]?.user_id) {
            if (currentUser?.id === id[0]?.user_id) {
                setIcon(favIcon)
                setFav(false)
            } else {
                setIcon(unfavIcon)
                setFav(true)
            }
        }
    }, [currentUser?.id, post.likes])

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
                    <button onClick={(e) => handleLike(e)}>
                        <img className="icon clickable-icon" src={icon} alt="heart" />
                        <div className="num-likes">{likes}</div>
                    </button>
                </div>
                <div className="post-bar-saved post-bar-item">
                    <button onClick={(e) => handleSave(e)}>
                        <img className="icon clickable-icon" src={saveIcon} alt="bookmark" />
                    </button>
                </div>
                <div className="post-bar-share post-bar-item">
                    <button onClick={(e) => handleShare(e)}>
                        <img className="icon clickable-icon" src={shareIcon} alt="share" />
                    </button>
                </div>
                <hr />
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
                <div className="post-header post-small-header">
                    <div className="post-header-info">
                        <div className="post-header-about">posted {timeSince(post.created_at)}</div>
                        <div className="post-header-title">{post.title}</div>
                    </div>
                    <div className="post-controls">
                        <Link to={`/posts/${post.id}/edit`} ><img className="icon clickable-icon" src={editIcon} alt="edit" /></Link>
                        <button onClick={() => handleDelete(post.id)}><img className="icon clickable-icon" src={deleteIcon} alt="delete" /></button>
                    </div>
                </div>
                <div className="post-content">{post.content}</div>
            </div>
        </div>
    )
}
