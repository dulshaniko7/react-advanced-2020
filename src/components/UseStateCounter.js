import React from 'react';

function UseStateCounter(props) {

    const [value, setValue] = React.useState(0)
    const complex = () => {
        setTimeout(() => setValue(value + 1), 2000)
    }
    return (
        <div>

            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={() => setValue(value - 1)}>
                    decrease
                </button>
                <button className='btn' onClick={() => setValue(0)}>
                    reset
                </button>
                <button className='btn' onClick={() => setValue(value + 1)}>
                    increase
                </button>
            </section>
            <section style={{margin: '4rem 0'}}>
                <h2>more complex counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={complex}>
                    increase later
                </button>
            </section>

        </div>
    );
}

export default UseStateCounter;