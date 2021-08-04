import React from 'react'
import './UserBar.css'
import { FaUserCircle } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'

function UserBar() {
    return (
        <div className='userbar-wrapper'>
            <FaUserCircle className='user-icon'/>
            <div className='column-text'>
                <p className='user-text'>brad-morrison</p>
                <p className='skill-text'>Advanced</p>
            </div>
            <BsFillStarFill className='star-icon'/>
            <p className='star-text'>3829</p>
        </div>
    )
}

export default UserBar
