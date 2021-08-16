import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import Unity, { UnityContext } from 'react-unity-webgl';
import Code from '../components/Code';

const unityApps = new UnityContext({
    loaderUrl: "unity/UnityApps.loader.js",
    dataUrl: "unity/UnityApps.data",
    frameworkUrl: "unity/UnityApps.framework.js",
    codeUrl: "unity/UnityApps.wasm",
  });

function loadScene() {
    unityApps.send("Scripts", "SetDestination", 1);
}


function UnityFoodApp() {

    const [loaded, setLoaded] = useState(false);

    function dropBun() {
        unityApps.send("SceneManager", "dropFood", "bun");
    }

    function dropPatty() {
        unityApps.send("SceneManager", "dropFood", "patty");
    }

    function dropLettuce() {
        unityApps.send("SceneManager", "dropFood", "lettuce");
    }

    function dropCheese() {
        unityApps.send("SceneManager", "dropFood", "cheese");
    }

    function dropBunTop() {
        unityApps.send("SceneManager", "dropFood", "bunTop");
    }

    function reset() {
        unityApps.send("SceneManager", "deleteFoodItems");
    }

    useEffect(function () {
        unityApps.on("loaded", function () {
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
                <Unity unityContext={unityApps} 
                style={{
                    height: "600px",
                    width: "800px"
                }}
                />
            </div>
            <div className="">
                <Panel header="Make a burger..." className="p-p-4">
                <p>Press each button to make a burger.</p>
                
                <div className="p-d-flex p-flex-md-row p-jc-center">
                  <Button label="Bun" icon="" onClick={dropBun} className="p-m-2" />
                  <Button label="Patty" icon="" onClick={dropPatty} className="p-m-2" />
                  <Button label="Lettuce" icon="" onClick={dropLettuce} className="p-m-2" />
                  <Button label="Cheese" icon="" onClick={dropCheese} className="p-m-2" />
                  <Button label="Bun Top" icon="" onClick={dropBunTop} className="p-m-2" />
                  <Button label="Reset" icon="pi pi-refresh" onClick={reset} className="p-m-2" />
                </div>
                

                </Panel>
            </div>
            
        </div>
      </div>

      
        
    )
}

export default UnityFoodApp
