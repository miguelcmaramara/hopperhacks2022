import "./css/QuestionPage.css"
import Question from "./Question"
import InTrees from "./InTrees"

function QuestionPage(props){
    return(
        <div className="QuestionPage">
            <Question></Question>
            <InTrees></InTrees>
        </div>
    );
}

export default QuestionPage;