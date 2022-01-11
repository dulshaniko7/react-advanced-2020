import React from 'react';
import {useState} from 'react'
import List from './List'
import data from "./data";

function Birthday1(props) {
    const [people, setPeople] = useState(data)
const clear = () => {
        setPeople([])
}
if(people.length < 1){
    return(
        <main>
            <section className='container'>
                <h3 >Sorry guys </h3>
                <List people={people}/>
            </section>
        </main>
    )
} else{
    return (
        <main>
            <section className='container'>
                <h3 >{people.length} Birthdays today </h3>
                <List people={people}/>
                <button onClick={clear}>Clear All</button>
            </section>
        </main>

    );
}

}

export default Birthday1;