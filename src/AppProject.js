import React from 'react'
import Tours from './components/projects/2/Tours'
import './components/projects/2/index.css'
import {useState, useEffect} from 'react'
import Loading from "./components/projects/2/Loading";
import axios from 'axios'

const url = 'https://course-api.com/react-tours-project'

function App() {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

//const fetchTours = axios.get(url)

    const fetchTours = async () => {
        setLoading(true);
        const response = await fetch(url)
        const tours = await response.json()
        if (tours.length > 0) {
            setLoading(false)
            setTours(tours)
        }
    }

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }

    useEffect(() => {
        //  axios.get(url).then(response => {
          //    console.log(response.data);
         // },[])


        fetchTours()

    }, [])


    if (loading) {
        return <Loading/>
    } else if (tours.length > 0) {
        return (
            <main>
                <Tours tours={tours} removeTour={removeTour}/>
            </main>
        )
    } else {
        return (
            <main>
                <h2>No Tour Left</h2>
                <button className='btn' onClick={fetchTours}>Refresh</button>
            </main>)
    }


}

export default App
