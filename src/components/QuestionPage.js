import "./css/QuestionPage.css"
import Question from "./Question"
import InTrees from "./InTrees"
import questions from "../data/questions.json"
import React, { useState, useEffect } from 'react';



function QuestionPage(props){
    var QuestionStack=questions.map((quest)=> <Question info={quest} name= {"Q"+quest.num}/>)
    //useEffect(() => {
      //  var box =document.getElementsByClassName("QuestionBox")[0];
        //for (var i=0; i< questions.length;i++){
            //var quest = document.createElement("Question");
          //  var nameid ="Q"+(i+1); 
            //var quest = (<Question info={questions[i]} name = {nameid} ></Question>)
            //quest.setAttribute("test","why");
            //quest.setAttribute("id","Q"+(i+1));
            //quest.setAttribute("name","Q"+(i+1));
            //quest.info= questions[i];
            //quest.setAttribute("test","pls")
            //console.log(quest)
            //console.log(quest.props.info)
            //console.log(questions[i])
            //box.innerHTML =quest;
        //}});
    console.log(questions);
    return(
        <div className="QuestionPage">
            <div className="QuestionBox">
                {QuestionStack};
            </div>
            <div className="InTreesBox">
                <InTrees></InTrees>
            </div>
        </div>
    );
}

export default QuestionPage;