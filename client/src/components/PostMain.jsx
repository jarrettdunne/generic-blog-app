import React, { Component } from 'react'

import './styles/PostMain.css'

export default class PostMain extends Component {
    render() {
        return (
            <div className="post-wrapper">
                <div className="post-bar"></div>
                <div className="post-contents">
                    <div className="post-header"></div>
                    <div className="post-content"></div>
                </div>
            </div>
        )
    }
}
