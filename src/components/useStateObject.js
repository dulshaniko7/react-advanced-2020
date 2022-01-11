import React from 'react';
import {useState} from 'react'

function UseStateObject(props) {
    const [person, setPeople] = useState({
        name: 'Peter',
        age: 24,
        message: 'Hi Peter'
    })
    const changeMessage = () => {
        if(person.message=='Hi Peter'){
           setPeople({...person, message:'Hello World'})
        }else{
            setPeople({...person,message:'Hi Peter'})
        }

    }


    return (
        <div>
            <h3>{person.name}</h3>
            <h4>{person.age}</h4>
            <p>{person.message}</p>
            <button className='btn' onClick={changeMessage}>change Message</button>
        </div>
    );
}

export default UseStateObject;