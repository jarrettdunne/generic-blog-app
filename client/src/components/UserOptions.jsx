import React from 'react'
import { Link } from 'react-router-dom'

export default function UserOptions() {
    return (
        <>
            <Link to='/login'>
                <div className="nav-sign-in">Sign In</div>
            </Link>
            <Link to='/register'>
                <div className="nav-sign-up">Sign Up</div>
            </Link>
        </>
    )
}
