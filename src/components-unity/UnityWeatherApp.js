import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import Unity, { UnityContext } from 'react-unity-webgl';
import Code from '../components/Code';

const weather = new UnityContext({
    loaderUrl: "unity/UnityApps.loader.js",
    dataUrl: "unity/UnityApps.data",
    frameworkUrl: "unity/UnityApps.framework.js",
    codeUrl: "unity/UnityApps.wasm",
  });

function loadScene() {
  weather.send("Scripts", "SetDestination", 0);
}


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
    stormOn();
    stormOff();
  `;


  var dayOn = true;
  var windOn = false;
  var rainOn = false;


function UnityWeatherApp() {

    const [userInput, setTitle] = useState('');
    const [loaded, setLoaded] = useState(false);

    function action() {

      setTitle('');

      if (userInput == "windOn()" && windOn == false)
      {
        wind();
        windOn = true;
      }

      if (userInput == "windOff()" && windOn == true)
      {
        wind();
        windOn = false;
      }

      if (userInput == "rainOn()" && rainOn == false)
      {
        rain();
        rainOn = true;
      }

      if (userInput == "rainOff()" && rainOn == true)
      {
        rain();
        rainOn = false;
      }

      if (userInput == "day()" && dayOn == false)
      {
        day();
        dayOn = true;
      }

      if (userInput == "night()" && dayOn == true)
      {
        day();
        dayOn = false;
      }

      if (userInput == "stormOn()")
      {
        if (windOn == false){ wind(); windOn = true;}
        if (rainOn == false){ rain(); rainOn = true;}
      }

      if (userInput == "stormOff()")
      {
        if (windOn == true){ wind(); windOn = false;}
        if (rainOn == true){ rain(); rainOn = false;}
      }
    }

    useEffect(function () {
      weather.on("loaded", function () {
        setLoaded(true);
      });
    }, []);

    useEffect(() => {
      loadScene();
    });

    return (
      
      
      <div className="p-d-flex p-jc-center p-mb-5">
        <div className="p-d-inline-flex p-flex-column p-flex-md-row p-jc-center card">
            <div className="p-as-center">
                <Unity unityContext={weather} 
                style={{
                    height: "600px",
                    maxWidth: "300px"
                }}
                />
            </div>
            <div className="">
                <Panel header="Change the weather..." className="p-p-4">
                <p>Using the appropriate method names - try to change the weather in the forest scene.</p>
                <p>!Hint - Remember the ';'!</p>
                
                <Code code={code} language="javascript"/>
                
                <div className="p-d-flex p-flex-md-row p-jc-center">
                  <form>  
                  <InputText value={userInput} onChange={(e) => setTitle(e.target.value)}  className="p-m-2"/>
                  </form>
                  <Button label="Run command" icon="pi pi-play" onClick={action} className="p-m-2" />
                </div>
                

                </Panel>
            </div>
            
        </div>
      </div>

      
        
    )
}

export default UnityWeatherApp
