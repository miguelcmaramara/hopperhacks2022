import React, { useState, useEffect } from 'react';
export default function SliderQ(props){
    useEffect(() => {
    document.getElementById('textInput'+props.num).value=document.getElementById("slide").value; 
    });
    const [val, setVal] = useState(0);
    return(
        <div>
            <h4>{props.question}</h4><br></br>
            <input num = {props.num} id="slide" type="range" min={props.min} max={props.max} onChange={handleChange}/>
            <input type="text" id={"textInput"+props.num} value= {val}/>
        </div>
    )
    
}
function handleChange(event) {
    document.getElementById('textInput'+event.target.getAttribute("num")).value=event.target.value;
  }