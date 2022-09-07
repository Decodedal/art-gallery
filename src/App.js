import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Gallery} from "./Gallery";
import {ButtonBar} from "./buttonBar";

function App() {
 let [artId, setArtId] = useState(100)
 let [data, setData] = useState({})

const inputId = (input) =>{
   
       return setArtId(Number(input)) 
  
}

 const random = (e) =>{
  
      return setArtId(Number(e.target.value)) 
   
 }

 const handleIterate = (e) => {

       return setArtId(artId + Number(e.target.value))
 }

  useEffect(()=>{
       document.title ='welcome to ArtWorld'
       fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
       .then(response => response.json())
       .then(resData => setData(resData))
 },[artId])
 return(
 <div>
<Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} id= {artId}/>
<ButtonBar handleIterate={handleIterate} random = {random} inputId ={inputId}
/>
 </div>
 )

  
}

export default App;
