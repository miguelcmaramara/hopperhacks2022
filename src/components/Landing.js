import './css/Landing.css'

export default function Landing(props){
    return(
        <div className="Landing">
            <img src="/img/trees.jpeg" alt="" />
            <div className="LandingText">
                <h6>You</h6>
                <h1>In Trees</h1>
                <button>Track your CO<sub>2</sub> </button>
            </div>
        </div>
    )
}