import React from 'react';
import Chuck from '../chuck_norris.jpg'

//Functional Component
const ListOfQuote = (props) => {

  // props.setIndexOnHover

  // JSX
  return (
    <div>
    <img src={Chuck} className="Chuck_Norris" alt="Chuck Norris" />
      <h2>Chuck Says...</h2>
          {props.quotes.map((quote, index)=> (
          <div onMouseOver={() => props.setIndexOnHover(index)} key={index}>
            <p>Quote: { quote.joke }</p>
            { props.currentIndex === index ? <a
              target="blank"
              href={`https://twitter.com/intent/tweet?text=${quote.joke}`}
            >
              Tweet Quote
            </a> : null }
          </div>
      ))}
    </div>
  );
};

export default ListOfQuote;