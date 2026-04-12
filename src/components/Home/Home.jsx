import React from 'react';
import Hero from '../Hero/Hero';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='max-w-11/12 mx-auto w-full'>
            <Hero/>
            <Books/>
        </div>
    );
};

export default Home;
