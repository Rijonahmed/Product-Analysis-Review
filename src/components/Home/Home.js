import React from 'react';
import './Home.css'
import useBikes from '../../hooks/useBikes';
import ThreeReview from '../ThreeReview/ThreeReview';
import { Link } from 'react-router-dom';


const Home = () => {
  const [reviewBikes] = useBikes();
  const threeReviews = reviewBikes.slice(0, 3);







  return (
    <div>
      <div className='container'>
        <div className="text-container">
          <h1>Yamaha R15 v3 <br /><span className='blue'> Your best Bike</span></h1>
          <p>The total series of R15 is very popular around the world, as well as Bangladesh. In continuation of this, Yamaha brought a new version of R15 to the market which is Yamaha R15 v3 in 2017. This new R15 is not an updated version of the previous model R15 v2. Now R15 v3 is a whole new sports bike with full of functions.</p>

        </div>
        <div className="images-container">
          <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190801020243_Yamaha-MotoGP-R15.jpg&w=700&q=90&c=1" alt="" />

        </div>
      </div>
      <div className="customer-review">
        <h2>Customer Reviews {threeReviews.name}</h2>
        <div className='three-review-grid'>
          {
            threeReviews.map(review => <ThreeReview
              key={review.id}
              review={review}
            ></ThreeReview>)
          }
        </div>
        <Link className='all-review-btn' to="/reviews">See all Review</Link>





      </div>
    </div>

  );
};

export default Home;