import React from 'react';

// importing images from img file, i need pics from jocey
// import selfPortrait from '../img/home/portrait.png';

//importing link
import { Link } from 'react-router-dom';


const Home = () => {
return <section className='section'>
            <div className='container mx-auto'>
                {/* text & img wrapper */}
                <div className='flex flex-col justify-center'>
                    {/* portrait text */}
                    <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
                        <h1 className='h1'> photographer <br /> & filmaker / whatevsss </h1>
                        <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'> Charlotte, NC </p>
                        <Link to={'/contact'} className='btn mb-[30px]'> hire me.. </Link>
                    </div>
                    {/* portrait image */}
                    <div className='flex justify-end max-h-96 lg:max-h-max'>
                        <div className='relative lg:-right-40 overflow-hidden'>
                            {/* <img  src={selfPortrait} alt="portrait img"/> */} 
                            <img  src="https://qph.cf2.quoracdn.net/main-qimg-71945a3866d5d728a0b4d892a5f1f7d1-pjlq"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>;

};


export default Home;