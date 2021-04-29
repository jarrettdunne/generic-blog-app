import React from 'react'
import { Link } from 'react-router-dom'

import './styles/UserCreate.css'

export default function UserCreate() {
    return (
        <div className="user-create-wrapper">
            <form className="user-create-form">
                <div className="user-create-form-name">Create an account</div> 
                <input className='user-create-input' type="text" placeholder='username' />
                <input className='user-create-input' type="text" placeholder='email' />
                <input className='user-create-input' type="text" placeholder='password' />
                <input className='user-create-input' type="text" placeholder='confirm password' />
                <input className='user-create-submit' type="submit" value="submit"/>
                <div>Have an account? <Link to='/login'>Login</Link></div>
            </form>
        </div>
    )
}
