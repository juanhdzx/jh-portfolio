import React from 'react';

// import selfPortrait from '../img/about/woman.png';

import { Link } from 'react-router-dom';


const About = () => {
    return  <section className='section'>
        <div className='container mx-auto h-full relative'>
            {/* text and pic wrapper */}
            <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
                {/* image */}
                <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
                    {/* <img  src={selfPortrait} alt='' /> */}
                    <img  src="https://qph.cf2.quoracdn.net/main-qimg-71945a3866d5d728a0b4d892a5f1f7d1-pjlq"/>
                </div>
                {/* text */}
                <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='h1' > About me </h1>
                    <p> some bulls hit about me em dhbsjdbcbhjbvjvberjhbivdfbv bdhbvb bci chbbchsc cbubbc </p>
                    <br />
                    <br />
                    <p> more bs here sndb vustdv beduy</p>
                    < Link to={'/portfolio'}> View my work </Link>
                </div>
            </div>
        </div>
        </section>
};

export default About;


// july 7, i left off at 36:17