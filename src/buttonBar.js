import React, {useState} from "react";

export function ButtonBar(props){

    
    let [input,setInput] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        props.inputId(input)
    }
   
    function rando(){
        return Math.floor(Math.random() * (400 - 1 + 1) + 1);
    }

    return(
        <div className="button-bar">
            <button value={-5} onClick={props.handleIterate}>Way Back</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={5} onClick={props.handleIterate}>BigNext</button>
            <button value={rando()} onClick ={props.random}>Random</button>
                        <form onSubmit={handleSubmit}>
                <input type = "text"
                onChange = {(e)=>setInput(e.target.value)}/>
                <button type="submit!">Submit!</button>
            </form>
        </div>
    )
}