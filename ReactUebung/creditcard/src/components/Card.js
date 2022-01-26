import React from 'react';
import './cardstyle.css';


function Card({personName, expirationDate, creditcardNumber, bankName}) {
  return (<div className='Card'>
    <h1>{bankName}</h1>
    <br></br>
    <h2>{creditcardNumber}</h2>
    <p>{expirationDate}</p>
    <p>{personName}</p>

  </div>
  );
}

export default Card;
