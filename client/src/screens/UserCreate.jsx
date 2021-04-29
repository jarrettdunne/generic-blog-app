import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/UserCreate.css'

export default function UserCreate(props) {
    const [formData, setFormData] = useState({
        username: '',
        email:'',
        password: ''
      })
      const { username, email, password } = formData;
      const {handleRegister} = props;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }))
      }

      const handleSubmit = (e) => {
          e.preventDefault()
          handleRegister(formData)
      }

    return (
        <div className="user-create-wrapper">
            <form className="user-create-form" onSubmit={handleSubmit}>
                <div className="user-create-form-name">Create an account</div> 
                <input className='user-create-input' type="text" name='username' placeholder='username' value={username} onChange={handleChange} />
                <input className='user-create-input' type="text" name='email' placeholder='email' value={email} onChange={handleChange} />
                <input className='user-create-input' type="password" name='password' placeholder='password' value={password} onChange={handleChange} />
                <input className='user-create-input' type="password" placeholder='confirm password' onChange={handleChange} />
                <input className='user-create-submit' type="submit" value="submit"/>
                <div>Have an account? <Link to='/login'>Login</Link></div>
            </form>
        </div>
    )
}
