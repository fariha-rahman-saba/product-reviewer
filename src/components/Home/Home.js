import React from 'react';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css'


var styles = {
    color: "blue"
}
var textStyles = {
    fontWeight: 400,
    fontSize: "medium"
}

const Home = () => {
    return (
        <div>
            <div className='home-component'>

                <div className='site-details'>
                    <h1>Your Next Camera <br />
                        <span style={styles}> Your Best Camera</span></h1>
                    <p style={textStyles}>Meet the world's fastest autofocus. The a6000 is a superb hybrid camera offering the quality of an interchangeable lens camera and ultra-fast shutter speed.</p>
                </div>
                <div className='site-image'>
                    <img src="https://www.startech.com.bd/image/cache/catalog/dslr-camera/sony/%20alpha-a6000/a6000-500x500.jpg" alt="" />
                </div>

            </div >
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;