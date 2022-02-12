
export default function SliderQ(){
    return(
        <div>
            <h4>Slider</h4><br></br>
            <input type="range" min="1" max="100" defaultValue="50" name ="slide"/>
            <output for="slide" onforminput="value = slide.valueAsNumber;"></output>
        </div>
    )
    
}