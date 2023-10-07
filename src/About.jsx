import React from 'react';
import Wthus from './pages/Home/Wthus';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({duration:"1100"})
        })
    
    return (
        <>
        <div data-aos="zoom-in-up" className='mb-36'>
            <h2 className='text-center bg-fuchsia-400 p-48 text-[50px] font-extrabold text-white rounded'>"Gain Skill to be fittest"  <p className='text-[20px] font-medium ml-[40%]'>-Abraham Linkin</p></h2>
          
        </div>
        <div data-aos="zoom-in-up"><Wthus></Wthus></div>
        </>
     );
};

export default About;