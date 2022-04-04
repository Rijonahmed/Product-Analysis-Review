import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = (props) => {
  const { name, text, rating, images } = props.reviewBike
  return (
    <div className='review-info'>
      <img src={images} alt="" />
      <h1>{name}</h1>
      <p>{text}</p>
      <h4>Rating : <span className='red'> {rating} Star</span></h4>
    </div>
  );
};

export default ReviewInfo;