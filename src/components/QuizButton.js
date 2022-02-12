
const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    }
}
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