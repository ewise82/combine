import React, { useState, useEffect } from 'react';
import './style.css';
import Display from './display.jsx';
import Delete from './delete.jsx';
import Enter from './enter.jsx';
import WordList from './wordList.jsx';

function App() {
    const [word, setWord] = useState('');
    const [score, setScore] = useState(0);
    const [wordList, setWordList] = useState([]);
    const [validLength, setValidLength] = useState(true);
    const [validWord, setValidWord] = useState(true);
    const [scoreWord, setScoreWord] = useState(false);
    const [center, setCenter] = useState(true);




    return (
        <div className="wrapper">
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
                    <Delete word={word} setWord={setWord} />
                </div>

                <div className="column">
                    <Display word={word} />
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Enter
                        word={word}
                        wordList={wordList}
                        score={score}
                        setScore={setScore}
                        setWord={setWord}
                        setValidLength={setValidLength}
                        setValidWord={setValidWord}
                        setScoreWord={setScoreWord}
                        setCenter={setCenter}
                        setWordList={setWordList}
                    />
                    <br></br>
                    <br></br>
                    {!validLength ? <div className="invalid-length">Must be 4+ letters!</div> : null}
                    {!validWord ? <div className="invalid-length">Oops! Not a word!</div> : null}
                    {scoreWord ? <div className="valid-length">Nice! Keep Going!</div> : null}
                    {!center ? <div className="invalid-length">Must contain "E"!</div> : null}
                </div>
                <div className="column-wordlist">
                    <div className="score">Score {score}</div>
                    <div className="word-list-centered">
                        <WordList wordList={wordList} />
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>


        </div>





    );
}

export default App;