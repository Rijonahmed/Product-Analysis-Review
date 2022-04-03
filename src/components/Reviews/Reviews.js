import React from 'react';
import './Reviews.css'
import useBikes from '../../hooks/useBikes';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Reviews = () => {
  const [reviewBikes,] = useBikes();

  return (
    <div className='review-grid'>

      {
        reviewBikes.map(reviewBike => <ReviewInfo
          key={reviewBike.id}
          reviewBike={reviewBike}
        ></ReviewInfo>)
      }


    </div>
  );
};

export default Reviews;