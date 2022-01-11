import React from 'react';
import {useState} from 'react'
import {data} from '../data'

function UseStateArray(props) {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        let newPeople = people.filter((p) => 
            p.id !== id
        )
        setPeople(newPeople)
    }

    if(people.length ===0) {
        return <h2>No People</h2>
    }
    else {
        return (
            <div>
                {people.map((p) => {
                    const {id, name} = p;
                    return (
                        <div key={id} className='item'>
                            <h4>{name}</h4>
                            <button onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    )
                })}
                <button className='btn' onClick={() => setPeople([])}>Clear Items</button>
            </div>
        );
    }
}

export default UseStateArray;