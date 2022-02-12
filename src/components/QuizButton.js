
export default function QuizButton(){
    return(
        <div>
            <button theme = "blue" onClick={StartQuiz}>
                Take Intro Quiz
            </button>
        </div>
    )
    
}

function StartQuiz(){
    window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: 'smooth',
    })
}