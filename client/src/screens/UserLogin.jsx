import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserLogin(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const { username, password } = formData;
    const { handleLogin } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(formData)
    }

    return (
        <div className="user-create-wrapper">
            <form className="user-create-form" onSubmit={handleSubmit}>
                <div className="user-create-form-name">Login</div>
                <input className='user-create-input' type="text" name='username' placeholder='username' value={username} onChange={handleChange} />
                <input className='user-create-input' type="password" name='password' placeholder='password' value={password} onChange={handleChange} />
                <input className='user-create-submit' type="submit" value="submit" />
                <div>Don’t have one? <Link to='/register'>Create account</Link></div>
            </form>
        </div>
    )
}
