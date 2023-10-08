import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import Banner from '../../shared/Banner';
import Wthus from './Wthus';
import BgPhotoSec from './bgPhotoSec';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Home = () => {

   useEffect(() => {
    AOS.init({duration:"1000"})
   })



    const news = useLoaderData();
    console.log(news);
    return (
        <>
        <div className='pt-4 pb-16'>
                 
                 
                 <div data-aos="fade-right"><Banner></Banner></div> 
  
                {/* CourseCard */}
                <div data-aos="zoom-in-up" className=' p-1 grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                    {news.map(C => <CourseCard
                     key={C._id}
                     course ={C}>
                     </CourseCard>)}
                </div> 

              <div data-aos="fade-left"> <Wthus></Wthus></div>
               <div data-aos="fade-up" data-aos-duration="3000"> <BgPhotoSec></BgPhotoSec></div>
                
            </div>
       </>
    );
};

export default Home;