import React, { useState, useEffect } from 'react';

export default function MCQ(props){
    useEffect(() => {
            var buttons =document.getElementById("test");
            for (var i =0; i < props.size;i++){
                var doc = document.createElement("button");
                doc.innerHTML = "hi";
                buttons.appendChild(doc);
      }});
    return(

        <div id ="test">
            <h4>MC Question</h4>
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