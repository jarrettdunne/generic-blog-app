import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import searchImg from '../assests/search-icon.png'

import './styles/Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        const { currentUser, handleLogout } = props;
        this.currentUser = currentUser
        this.handleLogout = handleLogout
    }

    render() {
        return (
            <header className="nav">
                <div className="nav-logo">
                    <div>app logo</div>
                </div>
                <div className="search-wrapper">
                    <form>
                        <div className="search-bar">
                            <img className="search-img" src={searchImg} alt="seach"/>
                            <input className="search-input" type="text" placeholder="Seach" />
                        </div>
                    </form>
                </div>
                <div className="nav-links">
                    {
                        this.currentUser ?
                            <>
                                <p>{this.currentUser.username}</p>
                                <button onClick={this.handleLogout}>Logout</button>
                            </>
                            :
                            <Link to='/login'>Login/Register</Link>
                    }
                    {
                        this.currentUser &&
                        <>
                            <Link to='/foods'>Foods</Link>
                            <Link to='/flavors'>Flavors</Link>
                        </>
                    }
                </div>
            </header>
        )
    }
}
