import React from 'react'
import './Layout.css'
import Nav from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = (props) => (
    <div className='layout'>
        <Nav currentUser={props.currentUser} handleLogout={props.handleLogout} />
        <div className="layout-children">
            {props.children}
        </div>
        <Footer />
    </div>
)

export default Layout