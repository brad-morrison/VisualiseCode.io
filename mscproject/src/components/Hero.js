import React from 'react'
import './Hero.css'
import heroPlaceholder from '../images/hero.jpg'

function Hero() {
    return (
        <div className='wrapper'>
            <div className='hero-items'>
                <h1>Visualizing Code</h1>
                <h3>Learn the abstract concepts of coding!</h3>
                <button>Get Started!</button>
                
            </div>
            <img className='image-splash' src={heroPlaceholder} alt="hero placeholder" />
        </div>
    )
}

export default Hero
