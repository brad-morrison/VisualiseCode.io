import React from 'react'
import Hero from '../components/Hero'
import UserBar from '../components/UserBar'
import ImageWithText from '../components/ImageWithText'
import Code from '../components/Code'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';

const code = `// this is a comment
moveForwards();
attack();
run();
`;

const itemTemplate = (car) => {
    return (
        <ImageWithText text={car}/>
    )
}

const fruit = [ "You'll be coding your dream products in no time!", 
                "Learn the abstract nature of code.", 
                "Test your knowledge to improve."];

function HomePage() {
    return (
        <div>
            <UserBar/>
            <Hero/>
            <ImageWithText text="You'll be coding your dream products in no time!"/>
            <div className="p-d-flex p-flex-column p-flex-sm-row p-jc-center p-ai-center p-mb-6">
                <InputText className="p-m-2"/>
                <Button label="Submit" icon="pi pi-check" className="p-m-2"/>
            </div>
            <Carousel value={fruit} itemTemplate={itemTemplate}></Carousel>
            <div className="p-d-flex p-jc-center p-ai-center p-flex-column p-flex-md-row">
            <Code code={code} language="javascript" />
            <Code code={code} language="javascript" />
            <Code code={code} language="javascript" />
            </div>
            
            <div className='spacer'></div>
        </div>
    )
}

export default HomePage
