import React from 'react';
import './Mapmethod.css';

function MapMethod(props){
    return(
        <div style={{marginTop: "100px"}}>
            <form>
                <input type="text" onChange={props.generate}/>
                <div><p>{props.willGenerate}</p></div>
            </form>
        <div className="box">
            <div className="box__element">
            <h1> {props.quest}</h1>
            <h3> {props.answ}</h3>
            <button type="button" onClick={props.showAnswer}>Ցուցադրել պատասխանը</button>
            </div>
            
        </div>
        </div>
    )
}
export default MapMethod