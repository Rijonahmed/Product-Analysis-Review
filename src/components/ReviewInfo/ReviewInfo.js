import React from 'react';
import './ReviewInfo.css'

const ReviewInfo = (props) => {
  const { name, text, rating } = props.reviewBike
  return (
    <div className='review-info'>
      <h1>{name}</h1>
      <p>{text}</p>
      <h3>{rating}</h3>
    </div>
  );
};

export default ReviewInfo;