import React from 'react'
import Hero from '../components/Hero'
import UserBar from '../components/UserBar'
import ImageWithText from '../components/ImageWithText'
import Code from '../components/Code'

const code = `// this is a comment
moveForward();
attack();
run();
`;

function HomePage() {
    return (
        <div>
            <UserBar/>
            <Hero/>
            <ImageWithText/>
            <Code code={code} language="javascript" />
            <Code code={code} language="javascript" />
            <div className='spacer'></div>
        </div>
    )
}

export default HomePage
