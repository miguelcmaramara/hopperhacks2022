import React, { useState, useEffect } from 'react';
export default function SliderQ(props){
    useEffect(() => {
    document.getElementById('textInput').value=document.getElementById("slide").value; 
    });
    const [val, setVal] = useState(0);
    return(
        <div>
            <h4>{props.name}</h4><br></br>
            <input id="slide" type="range" min={props.min} max={props.max} onChange={handleChange}/>
            <input type="text" id="textInput" value= {val}/>
        </div>
    )
    
}
function handleChange(event) {
    document.getElementById('textInput').value=event.target.value;
  }