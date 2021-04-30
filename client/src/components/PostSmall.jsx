import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import bookmarkIcon from '../assests/bookmark_border_black_48dp.svg'
import commentIcon from '../assests/mode_comment_black_48dp.svg'
import heartIcon from '../assests/favorite_border_black_48dp.svg'
import shareIcon from '../assests/share_black_48dp.svg'
import editIcon from '../assests/edit_black_48dp.svg'
import deleteIcon from '../assests/delete_black_48dp.svg'

import './styles/PostSmall.css'

export default class PostSmall extends Component {
    constructor(props) {
        super(props)
        this.post = props.post
        this.handleDelete = props.handleDelete
    }

    render() {
        return (
            <div className="post-wrapper home-post">
                <div className="post-bar">
                    <div className="post-bar-like">
                        <img className="icon" src={heartIcon} alt="heart" />
                    </div>
                    <div className="post-bar-saved">
                        <img className="icon" src={bookmarkIcon} alt="bookmark" />
                    </div>
                    <hr />
                    <div className="post-bar-comment">
                        <img className="icon" src={commentIcon} alt="comment" />
                    </div>
                    <div className="post-bar-share">
                        <img className="icon" src={shareIcon} alt="share" />
                    </div>
                </div>
                <div className="post-contents">
                    <div className="post-header post-small-header">
                        <div className="post-header-info">
                            <div className="post-header-about">{this.post.created_at}</div>
                            <div className="post-header-title">{this.post.title}</div>
                        </div>
                        <div className="post-controls">
                            <Link to={`/posts/${this.post.id}/edit`} ><img className="icon" src={editIcon} alt="edit" /></Link>
                            <a onClick={() => this.handleDelete(this.post.id)}><img className="icon" src={deleteIcon} alt="delete" /></a>
                        </div>
                    </div>
                    <div className="post-content">{this.post.content}</div>
                </div>
            </div>
        )
    }
}
