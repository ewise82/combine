import React, { useState, useEffect} from 'react';
import './style.css';

function Delete (props) {
console.log(props);
    return (
        <button class="delete-button" onClick={() => props.setWord(props.word.substring(0, props.word.length - 1))}>Delete</button>
        
    )
}

export default Delete;