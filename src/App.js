import React from 'react';
import {useState} from 'react';
import {Message} from "./Message.js"
import './App.css';

function App(props) {

  let [count, setCount]= useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div class={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>WELCOME TO BOOTCAMP2020 CLASS no.4 (URDU Session)</h1>

      <h2>Good {isMorning ? 'Morning': 'Night'}</h2>
      
      <h3>Value of counter variable is: {count} </h3>
      <Message count_message={count}></Message>

      <br/>
      <br/>

      <button onClick={

        () => setCount(count + 1)
        //() => setCount(++count)
        //() => setCount(count++)
        //() => alert('Button Pressed')
        }>
          Update Counter
          </button>


          <button onClick={()=>setMorning(!isMorning)}>
          Update DayTime
          </button>

          <p>Assignment submitted by : {props.name}</p>
    </div>

  );
}


export default App;
