import React, {useState} from 'react';


// import icons 
import { ImMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';

//import link 
import { Link } from 'react-router-dom'; 

//import motion
import { motion } from 'framer-motion';

//menu variants

const menuVariants = {
    hidden: {
        x: '100%'
    },
    show: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
}



const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav className='text-primary xl:hidden'>
            {/* nav open button */}
            <div onClick={() => setOpenMenu(true)} className='text-3x1 cursor-pointer'>
                <CgMenuRight />
            </div>

            {/* menu */}
            <motion.div 
                variants={menuVariants} 
                initial='hidden'
                animate= {openMenu ? 'show' : ''}
                className='bg-white shadow-2x1 w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
                {/* icon */}
                <div 
                 onClick={() => setOpenMenu(false)}
                 className='text-4x1 absolute z-30 left-4 top-14 text-primary cursor-pointer'>
                    <ImMdClose />
                </div>
                {/* menu list */}

                <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3x1'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Me</Link>
                    </li>
                </ul>

            </motion.div>
        </nav>
    );
};


export default MobileNav;