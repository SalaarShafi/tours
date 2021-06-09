import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTours}) => {
  return(
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
      <main>
      {tours.map((tour)=> {
      const {id, name, info, image, price} = tour;
          return <Tour tour={tour} removeTours={removeTours}/>
      })}
      </main>;
      </div>
    </section>
  ) ;
};

export default Tours;
