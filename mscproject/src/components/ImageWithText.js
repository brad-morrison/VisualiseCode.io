import React from 'react'
import './ImageWithText.css'

function ImageWithText(props) {
    return (
        <div className='image-with-text-wrapper p-d-flex p-flex-column p-flex-md-row'>
            <img src="https://www.kindpng.com/picc/m/372-3725755_coding-isometric-illustration-hd-png-download.png" alt="" className='image-with-text-image'/>
            <p className='image-with-text-text'>{props.text}</p>
        </div>
    )
}

export default ImageWithText
