import logo from '../assets/assets/logo.png'
import banner from "../assets/assets/banner.jpg"



const Banner = () => {
    return (
        <>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-[400px] my-[20px] border rounded shadow'>
                <div className=' ml-4 font-bold text-center text-[30px] my-auto text-orange-400'>Join our Workshop and develop Your Skill and build up Your carrier
                <h2 className='text-[20px] font-semibold text-red-300 my-4'>your carrier, your Choice</h2> <button className='btn w-[150px] my-1'>Join</button></div>
                
                <div>
                    <img className='w-[100%]' src={banner} alt="" />
                </div>
        </div>
       
        </>
    );
};  

export default Banner;