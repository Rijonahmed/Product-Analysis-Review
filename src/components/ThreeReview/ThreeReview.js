import React from 'react';
import './ThreeReview.css'

const ThreeReview = (props) => {
  const { name, text, rating, images } = props.review
  return (
    <div className='three-review'>
      <img src={images} alt="" />
      <h2>{name}</h2>
      <p>{text}</p>
      <h4>Rating: <span className='red'>{rating} Star</span></h4>


    </div>
  );
};

export default ThreeReview;