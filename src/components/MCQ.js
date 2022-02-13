import React, { useState, useEffect } from 'react';

export default function MCQ(props){
    useEffect(() => {
            var buttons =document.getElementById(props.num);
            for (var i =0; i < props.choices.length;i++){
                var doc = document.createElement("button");
                doc.carbon =props.value[i]
                doc.id = i
                doc.last = "-10"
                doc.onclick=function(){document.getElementById(0).last = this.carbon;}
                doc.innerHTML = props.choices[i];
                buttons.appendChild(doc);

      }});
    return(

        <div>
            <h4>{props.question}</h4>
            <div id = {props.num} className = "ButtonHolder">

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