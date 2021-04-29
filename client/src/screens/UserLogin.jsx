import React from 'react'
import { Link } from 'react-router-dom'

export default function UserLogin() {
    return (
        <div className="user-create-wrapper">
            <form className="user-create-form">
                <div className="user-create-form-name">Login</div> 
                <input className='user-create-input' type="text" placeholder='email' />
                <input className='user-create-input' type="text" placeholder='password' />
                <input className='user-create-submit' type="submit" value="submit"/>
                <div>Don’t have one? <Link to='/register'>Create account</Link></div>
                
            </form>
        </div>
    )
}
