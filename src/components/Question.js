import "./css/Question.css"
import "./QuizButton"
import MCQ from "./MCQ"
import SliderQ from "./SliderQ";
import React, { useState, useEffect } from 'react';


function Question(props){
    var placer = document.getElementsByClassName("Question")[0];
        var quizQuestion;
        console.log(props.info);
        if(props.info.type =="MCQ"){
            quizQuestion =(<MCQ question ={props.info.question} choices ={props.info.choices} value ={props.info.value} num = {"p"+props.info.num}></MCQ>)
            //quizQuestion =document.createElement("MCQ");
            //quizQuestion.setAttribute("question",props.info.question);
            //quizQuestion.setAttribute("choices",props.info.choices);
        }
        else if(props.info.type == "SliderQ"){
            quizQuestion =(<SliderQ question = {props.info.question} min = {props.info.min} max = {props.info.max}></SliderQ>)
            //quizQuestion = document.createElement("SliderQ");
            //quizQuestion.setAttribute("question",props.info.question);
            //quizQuestion.setAttribute("min",props.info.min);
            //quizQuestion.setAttribute("max",props.info.max);
        }
        //placer.innerHTML = quizQuestion;
    //useEffect(() => {
     //   console.log(1)
      //  var placer = document.getElementsByClassName("Question")[0];
      //  var quizQuestion;
      //  console.log(props.info);
      //  if(props.info.type =="MCQ"){
      //      quizQuestion =(<MCQ question ={props.info.question} choices ={props.info.choices}></MCQ>)
            //quizQuestion =document.createElement("MCQ");
            //quizQuestion.setAttribute("question",props.info.question);
            //quizQuestion.setAttribute("choices",props.info.choices);
       // }
       // else if(props.info.type == "SliderQ"){
       //     quizQuestion =(<SliderQ question = {props.info.question} min = {props.info.min} max = {props.info.max}></SliderQ>)
            //quizQuestion = document.createElement("SliderQ");
            //quizQuestion.setAttribute("question",props.info.question);
            //quizQuestion.setAttribute("min",props.info.min);
            //quizQuestion.setAttribute("max",props.info.max);
        //}
        //placer.innerHTML = quizQuestion;  
    //});
    return(
        <div className="Question">
            <h1>{props.name}</h1>
            <form onSubmit={handleSubmit} >{quizQuestion}
            <input type = "submit" value = "Submit"id={props.info.activity}/>
            </form>

        </div>
    );
}
function handleSubmit(event){
    console.log(event.target[event.target.length-1].id);
    event.preventDefault();
    if(event.target[0].id=="slide")
        console.log(event.target[0].value)
    else
        console.log(event.target[0].last)
}

export default Question;