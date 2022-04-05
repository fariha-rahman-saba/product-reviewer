import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './HomeReview.css'

var buttonStyle = {
    textAlign: "center"
}

const HomeReview = () => {
    const [reviews] = useReviews();
    const threeReviews = reviews.slice(3);
    return (
        <div>
            <h1 className='title'>Customer Reviews(3)</h1>
            <div className='reviews'>
                {threeReviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)}
            </div>
            <div style={buttonStyle}>
                <Link className='link' to="/reviews">SEE ALL REVIEWS →</Link>
            </div>
        </div>
    );
};

export default HomeReview;