import React from 'react';
import './style.css';
import axios from 'axios';

function Enter(props) {
    const { score, setScore, word, setWord, wordList, setWordList, setValidLength, setValidWord, setScoreWord, setCenter } = props;

    const checkWord = () => {
        setValidLength(true);
        setValidWord(true);
        setScoreWord(false);
        setCenter(true);
        if (word.length < 4) {
            setValidLength(false);
        } else if (!word.includes('E')) {
            setCenter(false);
        } else {
            axios.get(`/api/words/${word}`)
                .then((response) => {
                    if (response.data) {
                        if (!wordList.includes(word)) {
                            setScoreWord(true);
                            setWordList(currentArray => [...currentArray, word]);
                            setScore(score + calculateScore(word));
                        }
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setValidWord(false);

                });
        }

    }

    const calculateScore = (word) => {
        var score = word.length;
        if (score > 6) {
            score += 7;
        }
        return score;
    }
    return (
        <button className="enter-button" onClick={() => { checkWord(); setWord(word.substring(word.length)); }}>Enter</button>

    )
}

export default Enter;