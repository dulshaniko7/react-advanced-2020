import React from 'react';

function List({people}) {

    const reload = () => {
        window.location.reload();
    }
  if(people.length == 0){
      return (
          <div>
          <h3>No Birthdays Today</h3>
              <button onClick={reload}>Reload the page</button>
          </div>
      )
  } else{
      return (
          <div>
              {people.map((p) =>{
                  return (
                      <article key={p.id} className='person'>
                          <img src={p.image} alt={p.name}/>
                          <div>
                              <h2>{p.name}</h2>
                              <p>Is {p.age} old</p>
                          </div>
                      </article>
                  )
              } )}
              <h2></h2>

          </div>
      );
  }

}

export default List;