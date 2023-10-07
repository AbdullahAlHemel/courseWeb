import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../shared/Navbar/Navbar';



    
const Roots = () => {
    return (
        <>
        <div className='font-Poppins max-w-[1150px] mx-auto'> 
            <Navbar></Navbar>   
            <Outlet></Outlet> </div>
            <Footer></Footer>
        </>
    );
};

export default Roots;