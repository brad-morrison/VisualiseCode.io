import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import Code from '../../components/Code';
import { RadioButton } from 'primereact/radiobutton';
import { Dialog } from 'primereact/dialog';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import { Divider } from 'primereact/divider';

const code = `
    int num = 5;

    for (int i = 0; i < num; i++)
    {
        print("I have been called " + i + " times.");
    }
  `;

function VariablesQuiz() {
    const [displayBasic, setDisplayBasic] = useState(false); 
    const [position, setPosition] = useState('center');

    const [question1Correct, setQuestion1] = useState(false);
    const [question2Correct, setQuestion2] = useState(false);
    const [question3Correct, setQuestion3] = useState(false);

    const [answer1, setAnswer1] = useState(null);
    const [answer2, setAnswer2] = useState(null);
    const [answer3, setAnswer3] = useState(null);

    const correctAnswer1 = 1;
    const correctAnswer2 = 1;
    const correctAnswer3 = 1;

    const [correctAmount, setCorrectAmount] = useState(0);
    let cA = 0;

    function CheckCorrectAmount() {
        if (answer1 == correctAnswer1) { setQuestion1(true); cA += 1; setCorrectAmount(cA);}
        if (answer2 == correctAnswer2) { setQuestion2(true); cA += 1; setCorrectAmount(cA);}
        if (answer3 == correctAnswer3) { setQuestion3(true); cA += 1; setCorrectAmount(cA);}
    }

    const onClick = (name, position) => {
        CheckCorrectAmount();
        setDisplayBasic(true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        setDisplayBasic(false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Try again" icon="pi pi-refresh" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Complete" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <div>
            <h1>Variables Quiz</h1>

                <Panel header="Question 1" toggleable className="p-mt-5">
                    {/* Question Text */}
                    <p>This is question 1, the answer is option 1</p>
                    {/* Answers */}
                    <div className="card">
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="a" name="answers" value="1" onChange={(e) => setAnswer1(e.value)} checked={answer1 === '1'}/>  
                            <label htmlFor="answer1">a</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="b" name="answers" value="2" onChange={(e) => setAnswer1(e.value)} checked={answer1 === '2'}/>  
                            <label htmlFor="answer2">b</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="c" name="answers" value="3" onChange={(e) => setAnswer1(e.value)} checked={answer1 === '3'}/>  
                            <label htmlFor="answer3">c</label>
                        </div>
                    </div>
                </Panel>

                <Divider type="dashed" />

                <Panel header="Question 2" toggleable className="p-mt-5">
                    {/* Question Text */}
                    <p>This is question 2, the answer is option 2</p>
                    {/* Answers */}
                    <div className="card">
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="a" name="answers" value="1" onChange={(e) => setAnswer2(e.value)} checked={answer2 === '1'}/>  
                            <label htmlFor="answer1">a</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="b" name="answers" value="2" onChange={(e) => setAnswer2(e.value)} checked={answer2 === '2'}/>  
                            <label htmlFor="answer2">b</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="c" name="answers" value="3" onChange={(e) => setAnswer2(e.value)} checked={answer2 === '3'}/>  
                            <label htmlFor="answer3">c</label>
                        </div>
                    </div>
                </Panel>

                <Divider type="dashed" />

                <Panel header="Question 3" toggleable className="p-mt-5">
                    {/* Question Text */}
                    <p>This is question 3, the answer is option 3</p>
                    {/* Answers */}
                    <div className="card">
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="a" name="answers" value="1" onChange={(e) => setAnswer3(e.value)} checked={answer3 === '1'}/>  
                            <label htmlFor="answer1">a</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="b" name="answers" value="2" onChange={(e) => setAnswer3(e.value)} checked={answer3 === '2'}/>  
                            <label htmlFor="answer2">b</label>
                        </div>
                        <div className="p-field-radiobutton">
                            <RadioButton inputId="c" name="answers" value="3" onChange={(e) => setAnswer3(e.value)} checked={answer3 === '3'}/>  
                            <label htmlFor="answer3">c</label>
                        </div>
                    </div>
                </Panel>

            <Button label="Submit" icon="" className="p-mt-3 p-mb-5" onClick={() => onClick(setDisplayBasic(true))} />

            <Dialog header="Results" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter} onHide={() => onHide()}>
                <h2>You got {correctAmount} answers correct!</h2>
                <div className="card p-d-flex p-flex-column">
                    {question1Correct ? <Message severity="success" text="Question 1 - Correct" /> : <Message severity="error" text="Question 1 - Incorrect" />}
                    {question2Correct ? <Message severity="success" text="Question 2 - Correct" /> : <Message severity="error" text="Question 2 - Incorrect" />}
                    {question3Correct ? <Message severity="success" text="Question 3 - Correct" /> : <Message severity="error" text="Question 3 - Incorrect" />}
                </div>
                
            </Dialog>
        </div>
    )
}

export default VariablesQuiz
