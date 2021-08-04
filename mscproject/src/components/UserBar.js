import React from 'react'
import './UserBar.css'
import { FaUserCircle } from 'react-icons/fa'

function UserBar() {
    return (
        <div className='userbar-wrapper'>
            <FaUserCircle className='user-icon'/>
            <p className='user-text'>brad-morrison</p>
        </div>
    )
}

export default UserBar
