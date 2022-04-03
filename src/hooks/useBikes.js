import { useEffect, useState } from 'react';

const useBikes = () => {
  const [reviewBikes, setReviewBikes] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviewBikes(data))

  }, []);


  return [reviewBikes, setReviewBikes]
};

export default useBikes;