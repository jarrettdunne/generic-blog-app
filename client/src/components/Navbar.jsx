import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
            <header className="navbar">
                <h1>app</h1>
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
            </header>
        )
    }
}
