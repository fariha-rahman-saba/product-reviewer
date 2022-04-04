import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './HomeReview.css'

const HomeReview = () => {
    const [reviews] = useReviews();
    const threeReviews = reviews.slice(3);
    // console.log(threeReviews);
    return (
        <div>
            <h1 className='title'>Customer Reviews(3)</h1>
            {threeReviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)}
            <button>See All Reviews</button>
        </div>
    );
};

export default HomeReview;