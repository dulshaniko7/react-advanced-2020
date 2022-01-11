import React from 'react';
import {useState} from 'react'

function UseState(props) {
    const [title,setTitle] = useState('random title')
    const handleClick = () => {
        if(title =='random title') {
            setTitle('Hello World Guys')
        }else{
            setTitle('random title')
        }
    }
    return (
        <div className='container'>
            <h2>{title}</h2>

            <button type='button' className='btn' onClick={handleClick}> Change Title </button>
        </div>
    );
}

export default UseState;