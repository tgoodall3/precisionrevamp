import React from 'react';
import Hero from '../Hero';
import WhatWeDo from '../What-we-do';
import About from '../About';
import Projects from '../Projects';
import Testimonials from '../Testimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <WhatWeDo />
            <About />
            <Projects />
            <Testimonials />
        </div>
    );
};

export default Home;