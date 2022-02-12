import React from 'react'
import './css/TEMPLATE.css';

function SkipButton(props){
    return(
        <div className="Skip Button">
            <button theme="pink" onClick={scroll}>
          Skip Quiz
            </button>
            <h1></h1>
        </div>
    );
}

function scroll() {
    window.scrollTo(0,document.body.scrollHeight);
}


export default SkipButton;