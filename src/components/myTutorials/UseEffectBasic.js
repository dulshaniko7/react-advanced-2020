import React from 'react';
import {useEffect, useState} from 'react'


function UseEffectBasic(props) {

    const [value,setValue] = useState(0)
    useEffect(() => {

        document.title = `New Messages ${value}`
    },[value])

    return (
        <div>
            <h2>{value}</h2>
            <button className='btn' onClick={() => setValue(value+1)}>Increase</button>
        </div>
    );
}

export default UseEffectBasic;