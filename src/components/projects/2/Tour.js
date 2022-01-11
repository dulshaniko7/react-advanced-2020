import React from 'react';
import {useState} from 'react'

function Tour({name,info,image,price,removeTour,id}) {
    const [read,setRead] = useState(false)


    return (
        <article className='single-tour'>
            <img src={image} alt="image"/>
            <footer>
                <div className='tour-info'>
                    <h3>{name}</h3>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>{read ? info : `${info.substring(0,200)}...`}
                    <button onClick={() => setRead(!read)}>{read ?'show less':'read more'}</button></p>
                <button className='delete-btn' onClick={() => removeTour(id)}>Not Interest</button>
            </footer>
        </article>
    );
}

export default Tour;