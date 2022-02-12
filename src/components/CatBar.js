import "./css/CatBar.css"

export default function CatBar(props){
    return(
        <div className="Catbar">
            <div className="Dropdown">
                Transportation
                <div className="DropdownMenu">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>

            <div className="Dropdown">
                Food
                <div className="DropdownMenu">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
            <div className="Dropdown">
                Appliances
                <div className="DropdownMenu">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
        </div>
    )
}