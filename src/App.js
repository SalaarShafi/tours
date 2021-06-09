import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() { 
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const removeTours = (id) => {
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  };

  async function data() {
    setLoading(true);
    
    try {
    let response = await fetch(url);
    let tours = await response.json();
    setLoading(false);
    setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  }

  useEffect(() => {

    data();
  }, [refresh])
  
  if(loading) {

  return <Loading/>

  } else if(tours.length == 0) {
    return(    
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <button className="refresh-btn" onClick={()=> setRefresh(!refresh)}>Refresh</button>
      </div>
    </section>
) 
  } else {
    return <Tours tours={tours} removeTours={removeTours}/>
  }
  
}

export default App
