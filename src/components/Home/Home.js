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
                    <p style={textStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium at a doloribus, ullam, nobis sint maiores totam excepturi, voluptatem unde numquam odio vitae asperiores veritatis vero? Vero, similique vel? Consequatur molestiae sapiente dicta molestias, delectus natus eum unde, suscipit aut corporis quod reiciendis! Excepturi error nesciunt porro iusto ut.</p>
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