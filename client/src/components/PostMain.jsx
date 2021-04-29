import React, { Component } from 'react'

import bookmarkIcon from '../assests/bookmark_border_black_48dp.svg'
import commentIcon from '../assests/mode_comment_black_48dp.svg'
import heartIcon from '../assests/favorite_border_black_48dp.svg'
import shareIcon from '../assests/share_black_48dp.svg'

import './styles/PostMain.css'

export default class PostMain extends Component {
    render() {
        return (
            <div className="post-wrapper home-post">
                <div className="post-bar">
                    <div className="post-bar-like">
                        <img className="icon" src={heartIcon} alt="heart"/>
                    </div>
                    <div className="post-bar-comment">
                        <img className="icon" src={commentIcon} alt="comment"/>
                    </div>
                    <div className="post-bar-saved">
                        <img className="icon" src={bookmarkIcon} alt="bookmark"/>
                    </div>
                    <div className="post-bar-share">
                        <img className="icon" src={shareIcon} alt="share"/>
                    </div>
                </div>
                <div className="post-contents">
                    <div className="post-header">
                        <div className="post-header-about"></div>
                        <div className="post-header-title"></div>
                    </div>
                    <div className="post-content"></div>
                </div>
            </div>
        )
    }
}
