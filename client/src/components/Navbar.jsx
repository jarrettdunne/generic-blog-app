import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import searchImg from '../assests/search_black_48dp.svg'

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
                    <Link className='nav-links' to='/'>app logo</Link>
                </div>
                <div className="search-wrapper">
                    <form>
                        <div className="search-bar">
                            <img className="search-img" src={searchImg} alt="seach"/>
                            <input className="search-input" type="text" placeholder="Seach" />
                        </div>
                    </form>
                </div>
                <div className="nav-links nav-links-right">
                    {
                        this.currentUser ?
                            <>
                                <p>{this.currentUser.username}</p>
                                <button onClick={this.handleLogout}>Logout</button>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <div className="nav-sign-in">Sign In</div>
                                </Link>
                                <Link to='/register'>
                                    <div className="nav-sign-up">Sign Up</div>
                                </Link>
                            </>
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
