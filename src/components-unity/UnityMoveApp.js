import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import Unity, { UnityContext } from 'react-unity-webgl';
import Code from '../components/Code';
import { user } from 'osenv';
import './UnityMoveApp.css';

const unityApps = new UnityContext({
    loaderUrl: "unity/UnityApps.loader.js",
    dataUrl: "unity/UnityApps.data",
    frameworkUrl: "unity/UnityApps.framework.js",
    codeUrl: "unity/UnityApps.wasm",
  });

function loadScene() {
    unityApps.send("Scripts", "SetDestination", 2);
}

function UnityMoveApp() {

    const [loaded, setLoaded] = useState(false);
    const [userInput, setTitle] = useState('');
    const [stringArray, setStringArray] = useState('');

    useEffect(function () {
        unityApps.on("loaded", function () {
        setLoaded(true);
      });
    }, []);

    useEffect(() => {
      loadScene();
    });

    function up() {
        setTitle(userInput + 'up(); ');
    }

    function down() {
        setTitle(userInput + 'down(); ');
    }

    function left() {
        setTitle(userInput + 'left(); ');
    }

    function right() {
        setTitle(userInput + 'right(); ');
    }

    function run() {
        unityApps.send("SceneManager", "SetList", userInput);
    }

    function clear() {
        setTitle('');
    }

    function splitString() {
        setStringArray(userInput.split(" "));
    }

    return (
      
      <div className="p-d-flex p-jc-center p-mb-5">
        <div className="p-d-inline-flex p-flex-column p-flex-xl-row p-jc-center card">
            <div className="p-as-center">
                <Unity unityContext={unityApps} 
                style={{
                    height: "600px",
                    width: "100%",
                    maxWidth: "1200px",
                    borderRadius: "15px"
                }}
                />
            </div>
            <div className="">
                <Panel header="Enter the correct move sequences to get to the food..." className="p-p-4">
                <p>Add commands using the buttons below and click run when ready.</p>
                <div className="cop">
                <InputTextarea placeholder={userInput} autoResize="true" rows="12" cols="50" className="cop"/>
                </div>

                <div className="p-d-flex p-flex-row">
                    <div className="p-d-flex p-flex-md-row p-jc-center">
                    <Button label="" icon="pi pi-arrow-left" onClick={left} className="p-m-2" />
                        <div className="p-d-flex p-flex-column">
                            <Button label="" icon="pi pi-arrow-up" onClick={up} className="p-m-2" />
                            <Button label="" icon="pi pi-arrow-down" onClick={down} className="p-m-2" />
                        </div>
                    <Button label="" icon="pi pi-arrow-right" onClick={right} className="p-m-2" />
                    </div>
                    <div className="p-d-flex">
                        <Button label="Run" icon="" onClick={run} className="p-m-2" />
                        <Button label="Clear" icon="" onClick={clear} className="p-m-2" />
                    </div>
                </div>
                
                

                </Panel>
            </div>
            
        </div>
      </div>

      
        
    )
}

export default UnityMoveApp
