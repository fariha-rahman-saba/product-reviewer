import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='title'>Our customer reviews</h1>
            <div className='reviews'>
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;