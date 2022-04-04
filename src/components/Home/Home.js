import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../images/camera.jpg"
import HomeReview from '../HomeReview/HomeReview';


var styles = {
    color: "blue"
}
// var imageStyle = {
//     width: "100 px",
//     height: "100 px"
// }

const Home = () => {
    return (
        <div>
            <div className='home-component'>

                <div className='site-details'>
                    <h1>Your Next Camera</h1>
                    <h1 style={styles}>Your Best Camera</h1>
                </div>
                {/* <div className='site-image'>
                <img src={image} alt="" />
                </div> */}

            </div >
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;