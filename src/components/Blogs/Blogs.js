import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ques-ans'>

            <h3>Q1: What is context</h3>
            <p>Ans: The Context API is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of our application. Context API is a kind of new feature added in version 16.3 of React that allows us to share state across the entire app lightly and with ease. Context provides a way to pass data through the component tree without having to pass props down manually at every level. It returns a consumer and a provider. Provider is a component that as its names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.</p>
            <h3>Q2: What is semantic tag?</h3>
            <p>Ans: Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header, footer, article, section and nav are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. It is much easier to read. As a programmer we can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes our job. It has greater accessibility.</p>
        </div>
    );
};

export default Blogs;