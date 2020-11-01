import axios from 'axios';
import React, { useState, useEffect} from 'react';

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
    <div>Hello from React</div>
);
}

export default App;