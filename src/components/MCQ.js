import React, { useState, useEffect } from 'react';

export default function MCQ(props){
    useEffect(() => {
        console.log(2)
            var buttons =document.getElementById("test");
            for (var i =0; i < props.choices.length;i++){
                var doc = document.createElement("button");
                doc.innerHTML = props.choices[i];
                buttons.appendChild(doc);
      }});
    return(

        <div>
            <h4>{props.question}</h4>
            <div id = "test" classname = "ButtonHolder">

            </div>
        </div>
    )
    
}
//function makeButtons(num=1){
 //   var buttons =document.getElementById("test");
 //   for (var i =0; i < num;i++){
 //       var doc = document.createElement("button");
  //      doc.innerHTML = "hi";
  //      console.log(buttons);
  //      buttons.appendChild(doc);
  // }
//}