import React from "react";

 export function Gallery(props){

     return(
        <div className="gallery" style={{'width':'100%'}}>
            <p>Id #: {props.id} <br/>Artist: {props.artist}</p>
            
            <img src={props.objectImg} alt={props.title}/>
            
        </div>
     )
}