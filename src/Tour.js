import React, { useState } from 'react';

const Tour = ({tour, removeTours}) => {
  const [readmore, setReadmore] = useState(true);

      const {id, name, info, image, price} = tour;

      return <article className="single-tour" key={id}>
        
        <img src={image} alt={name}/>
        <footer>
          <div className="tour-info">
          <h4 >{name}</h4>
          <h4 className="tour-price">${price}</h4>
          </div>
          <p>
          {readmore ? `${info.substring(0,200)}...` : info}
          <button  className="" onClick={()=>{setReadmore(!readmore)}}>{readmore? `read more`: `show less`}
          </button>
          </p>
          <button onClick={()=> {removeTours(id)}} className="delete-btn">Not Interested
          </button>
        </footer>
        
      </article>
};

export default Tour;
