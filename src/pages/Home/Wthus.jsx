import React from 'react';
import { BiBorderAll } from "react-icons/bi";
const Wthus = () => {
    return (
        <div className='border p-16 mt-12 bg-slate-100 mb-16'>
            <h2 className='text-2xl font-semibold text-center text-purple-500 underline'>why with us</h2>
            <div className='flex text-xl'>
            <ul className='w-[50%] pl-[20%]'>
                <li className='flex my-2'><BiBorderAll className='mt-1 '/>For Best services</li>
                <li className='flex my-2'><BiBorderAll className='mt-1'/>Group Work in spot</li>
                <li className='flex my-2'><BiBorderAll className='mt-1'/>Trained mentor</li>
                <li className='flex my-2'><BiBorderAll className='mt-1'/>24 Hour Guideline</li>
            </ul> 
            <ul className='w-[50%]  my-2 pl-[15%]'>
                <li className='flex my-2'><BiBorderAll className='mt-1'/> 100 % Effort</li>
                <li className='flex my-2'><BiBorderAll className='mt-1'/> Mental Support</li>
                <li className='flex my-2'><BiBorderAll className='mt-1'/> clean enviroment</li>
                <li className='flex my-2'><BiBorderAll className='mt-1'/> first class secure </li>
            </ul>
            </div>
        </div>
    );
};

export default Wthus;