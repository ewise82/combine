import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './style.css';

function App() {
const [wordList, setWordList] = useState([]);


const checkWord = (word) => {
    axios.get(`/api/words/${word}`)
      .then((result) => {
        // check result to see if entry was a word
      })
        .catch((err) => {
            console.log(err);
        });
}
    
return (

<div className="main-box">
  
  <div className="column">
    <div className="circle-1">
        <div className="circle">S</div> 
    </div>
    <div className="circle-2">
        <div className="circle">P</div>
    </div>
  </div>

  <div className="column">
    <div className="circle-3">
        <div className="circle">R</div>
    </div>
    <div className="circle-center">
        <div className="circle-middle">E</div>
    </div>
    <div className="circle-5">
        <div className="circle">A</div>
    </div>
  </div>

  <div className="column">
    <div className="circle-6">
        <div className="circle">D</div>
    </div>
    <div className="circle-7">
        <div className="circle">I</div>
    </div>
  </div>
</div>

    
);
}

export default App;