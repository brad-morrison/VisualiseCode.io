import React from 'react'
import Hero from '../components/Hero'
import UserBar from '../components/UserBar'
import ImageWithText from '../components/ImageWithText'

function HomePage() {
    return (
        <div>
            <UserBar/>
            <Hero/>
            <ImageWithText/>
            <div className='spacer'></div>
        </div>
    )
}

export default HomePage
