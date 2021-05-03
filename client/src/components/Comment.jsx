import React, { Component } from 'react'

import { timeSince } from '../services/funcs'

import './styles/Comment.css'

export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.comment = props.comment
    }
    render() {
        return (
            <div className="comment-wrapper">
                <div className="comment-bar"></div>
                <div className="comment-contents">
                    <div className="comment-header">
                        <div className="comment-username">
                            {this.comment.user.username}
                            &nbsp;
                            <div className="comment-time">
                                {timeSince(this.comment.created_at)}
                            </div>
                        </div>
                        
                    </div>
                    <div className="comment-content">{this.comment.content}</div>
                </div>
            </div>
        )
    }
}
