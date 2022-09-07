import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Gallery} from "./Gallery";
import {ButtonBar} from "./buttonBar";

function App() {
 let [artId, setArtId] = useState(100)
 let [data, setData] = useState({})

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
<Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title}/>
<ButtonBar handleIterate={handleIterate}
/>
 </div>
 )

  
}

export default App;
