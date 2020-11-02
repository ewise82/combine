import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './style.css';
import Display from './display.jsx';
import Delete from './delete.jsx';

function App() {
const [word, setWord] = useState('');
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
        <div className="circle" onClick={() => setWord(word + 'S')}>S</div> 
    </div>
    <div className="circle-2">
        <div className="circle" onClick={() => setWord(word + 'P')}>P</div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Delete word={word} setWord={setWord}/>
  </div>

  <div className="column">
  <Display word={word}/>
  <br></br>
  <br></br>
    <div className="circle-3">
        <div className="circle" onClick={() => setWord(word + 'R')}>R</div>
    </div>
    <div className="circle-center">
        <div className="circle-middle" onClick={() => setWord(word + 'E')}>E</div>
    </div>
    <div className="circle-5">
        <div className="circle" onClick={() => setWord(word + 'A')}>A</div>
    </div>
  </div>

  <div className="column">
    <div className="circle-6">
        <div className="circle" onClick={() => setWord(word + 'D')}>D</div>
    </div>
    <div className="circle-7">
        <div className="circle" onClick={() => setWord(word + 'I')}>I</div>
    </div>
  </div>
</div>



    
);
}

export default App;