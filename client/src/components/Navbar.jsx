import React from 'react'
import { Link } from 'react-router-dom'

import UserOptions from './UserOptions'

import account from '../assests/account_circle_black_48dp.svg'

import './styles/Navbar.css'

export default function Navbar(props) {
    const { currentUser, handleLogout } = props;
    return (
        <header className="nav">
            <div className="nav-logo">
                <Link className='nav-links' to='/'>b l o g s</Link>
            </div>
            {/* <div className="search-wrapper">
                <form className="search-form">
                    <img className="search-img" src={searchImg} alt="seach" />
                    <input className="search-input" type="text" placeholder="Seach" />
                </form>
            </div> */}
            <div className="nav-links nav-links-right">
                {
                    currentUser ?
                        <>
                            <button className="nav-logout-button" onClick={handleLogout}>logout</button>
                        </>
                        :
                        <UserOptions />
                }
                {
                    currentUser &&
                    <>
                        <Link to={`/user/${currentUser.id}/posts`}>
                            <img className="account-icon" src={account} alt=""/>
                        </Link>
                    </>
                }
            </div>
        </header>
    )
}