import "./css/InTrees.css"
import TreeSec from "./TreeSec";


function InTrees(props){
    return(
        <div className="InTreesContainer">
            <div className="InTrees">
                <TreeSec color="red" size="10%"/>
                <TreeSec color="orange" size="30%"/>
            </div>
        </div>
    )
}

export default InTrees;