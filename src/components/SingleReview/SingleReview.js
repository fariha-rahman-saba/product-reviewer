import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    console.log(props);
    const { name, review, rating, image } = props.review;
    return (
        <div className='single-review'>
            <img src={image} alt="" width="200px" height="130px" />
            <h2>{name}</h2>
            <p>{review}</p>
            <h5>Rating: {rating}</h5>

        </div>
    );
};

export default SingleReview;