import React from 'react'
import { Link } from 'react-router-dom'

import account from '../assests/account_circle_black_48dp.svg'
import searchImg from '../assests/search_black_48dp.svg'

import './styles/Navbar.css'

export default function Navbar(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header className="nav">
            <div className="nav-logo">
                <Link className='nav-links' to='/'>app logo</Link>
            </div>
            <div className="search-wrapper">
                <form>
                    <div className="search-bar">
                        <img className="search-img" src={searchImg} alt="seach" />
                        <input className="search-input" type="text" placeholder="Seach" />
                    </div>
                </form>
            </div>
            <div className="nav-links nav-links-right">
                {
                    currentUser ?
                        <>
                            <button onClick={handleLogout}>Logout</button>
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
                    currentUser &&
                    <>
                        <Link to='/user'>
                            <img className="account-icon" src={account} alt=""/>
                        </Link>
                    </>
                }
            </div>
        </header>
    )
}