import "./css/QuestionPage.css"
import Question from "./Question"
import InTrees from "./InTrees"

function QuestionPage(props){
    return(
        <div className="QuestionPage">
            <div className="QuestionBox">
                <Question></Question>
                <Question></Question>
            </div>
            <div className="InTreesBox">
                <InTrees></InTrees>
            </div>
        </div>
    );
}

export default QuestionPage;