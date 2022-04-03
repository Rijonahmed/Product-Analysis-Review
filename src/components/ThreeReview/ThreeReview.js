import React from 'react';
import './ThreeReview.css'

const ThreeReview = (props) => {
  const { name, text, rating } = props.review
  return (
    <div className='three-review'>
      <h2>name {name}</h2>
      <p>{text}</p>
      <h6>{rating}</h6>


    </div>
  );
};

export default ThreeReview;