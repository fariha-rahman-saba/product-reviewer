import React from 'react';

const SingleReview = (props) => {
    const { name, review, rating, image } = props;
    return (
        <div className='single-review'>
            <img src={image} alt="" width="256px" height="256px" />
            <h2>{name}</h2>

        </div>
    );
};

export default SingleReview;