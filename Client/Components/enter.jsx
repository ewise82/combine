import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
const db = require('../Database/index.js');

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
                .then((result) => {
                   console.log('result ', result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }





    }
    return (
        <button className="enter-button" onClick={() => checkWord()}>Enter</button>

    )
}

export default Enter;