import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

function Enter(props) {
    const { word, setWord, validLength, setValidLength, validWord, setValidWord } = props;

    const checkWord = () => {
        setValidLength(true);
        setValidWord(true);
        if (word.length < 4) {
            setValidLength(false);
        } else if (!word.includes('E')) {
            setValidWord(false);
        } else {
            axios.get(`/api/words/${word}`)
                .then((response) => {
                    if (response.data) {
                       setWord('Calam');
                   } else {
                       setWord('Blah');
                   }
                })
                .catch((err) => {
                    console.log(err);
                    setWord('Error');
                    
                });
        }





    }
    return (
        <button className="enter-button" onClick={() => checkWord()}>Enter</button>

    )
}

export default Enter;