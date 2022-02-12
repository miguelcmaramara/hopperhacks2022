import "./css/TreeSec.css"

function TreeSec(props){
    var stl = {
        height: props.size,
        width: "100%",
        backgroundColor: props.color
    }

    return(
        <div className="TreeSec"
            style={stl}
        ></div>
    )
}

export default TreeSec;