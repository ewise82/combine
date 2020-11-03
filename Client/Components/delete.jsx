import React, { useState, useEffect} from 'react';
import './style.css';

function Delete (props) {

const {word, setWord} = props;
    return (
        <button class="delete-button" onClick={() => setWord(word.substring(0, word.length - 1))}>Delete</button>
        
    )
}

export default Delete;