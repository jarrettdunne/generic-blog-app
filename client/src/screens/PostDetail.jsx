import React from 'react'

import bookmarkIcon from '../assests/bookmark-icon.png'
import commentIcon from '../assests/comment-icon.png'
import heartIcon from '../assests/heart-icon.png'
import shareIcon from '../assests/share-icon.png'

export default function PostDetail(props) {
    return (
        <div className="post-wrapper">
            <div className="post-bar">
                <div className="post-bar-like icon">
                    <img src={heartIcon} alt="heart" />
                </div>
                <div className="post-bar-comment icon">
                    <img src={commentIcon} alt="comment" />
                </div>
                <div className="post-bar-saved icon">
                    <img src={bookmarkIcon} alt="bookmark" />
                </div>
                <div className="post-bar-share icon">
                    <img src={shareIcon} alt="share" />
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
