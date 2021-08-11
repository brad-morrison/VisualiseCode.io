import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import Unity, { UnityContext } from 'react-unity-webgl';
import Code from '../components/Code';
import './UnityWeatherApp.css';

const weather = new UnityContext({
    loaderUrl: "unity/weather.loader.js",
    dataUrl: "unity/weather.data",
    frameworkUrl: "unity/weather.framework.js",
    codeUrl: "unity/weather.wasm",
  });

function rain() {
    weather.send("TEST", "rain");
  }

  function wind() {
    weather.send("TEST", "wind");
  }

  function day() {
    weather.send("TEST", "day");
  }

  const code = `
    windOn();
    windOff();
    rainOn();
    rainOff();
    day();
    night();
    storm();
  `;

  


function UnityWeatherApp() {

    const [userInput, setTitle] = useState('');

    return (
        <div className="p-d-flex p-jc-center card">
            <div className="p-mr-5">
                <Unity unityContext={weather} 
                style={{
                    height: "600px",
                    maxWidth: "300px"
                }}
                />
            </div>
            <div className="">
                <Panel header="Change the weather...">
                <p>Using the appropriate method names - try to change the weather in the forest scene.</p>
                <p>!Hint - Remember the ';'!</p>
                
                <Divider type="dashed"/>
                
                <Code code={code} language="javascript" />
                
                <form>
                <InputText value={userInput} onChange={(e) => setTitle(e.target.value)} />
                </form>


                <Button onClick={wind}>Wind</Button>
                
                </Panel>
            </div>
            
        </div>
    )
}

export default UnityWeatherApp
