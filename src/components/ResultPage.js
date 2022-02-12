import "./css/ResultPage.css";
import CatBar from "./CatBar";
import InTrees from "./InTrees";

export default function ResultPage(props){
    return(
        <div className="ResultPage">
            <div className="CatBarBox">
                <CatBar></CatBar>
            </div>
            <div className="metrics">
                <p>metrics</p>
            </div>
            <div className="compare">
                <p>compare</p>
            </div>
            <div className="InTreesBox">
                <InTrees></InTrees>
            </div>
        </div>
    );
}