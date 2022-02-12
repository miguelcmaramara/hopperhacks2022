import "./css/QuestionPage.css"
import Question from "./Question"
import InTrees from "./InTrees"

function QuestionPage(props){
    return(
        <div className="QuestionPage">
            <div className="QuestionBox">
                <Question></Question>
            </div>
            <InTrees></InTrees>
        </div>
    );
}

export default QuestionPage;