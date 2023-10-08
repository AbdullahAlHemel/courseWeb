
import Header from '../Home/Home';
import { useParams } from 'react-router-dom';
import RightSideNav from '../../shared/Navbar/RightSideNav';
import Navbar from '../../shared/Navbar/Navbar';
import coin from '../../../src/assets/assets/coins.jpg'

const News = () => {
    
     const {id,image} = useParams()




    return (
        <div>
        
            <div className='grid md:grid-cols-1'>
                
                {/* <h2>{id}</h2> */}
                <div className='w-[900px] mx-auto mt-8'>
                      <div className='w-[700px] mx-auto rounded'><img  src={coin} alt="" /></div>
                   <h2 className='mt-8 text-3xl font-semibold my-4 text-center'>Financial freedom <span className='text-[15px] ml-6 text-gray-500'>at</span><span className='ml-2 text-gray-500 font-medium'>250 $</span></h2>
                   <p className='font-medium pb-3 leading-8 text-justify'>Attaining financial freedom is an objective for most individuals. Financial freedom usually means having enough savings, financial investments, and cash on hand to afford the kind of life we desire for ourselves and our families. It means growing savings that enable us to retire or pursue the career we want without being driven by earning a set salary each year. Financial freedom means our money is working for us rather than the other way around.How do you become financially free?To become financially free, you must pay off your consumer debts, build a safety net of savings funds, and create enough passive income through investing or business ownership to pay for your current and expected future living expenses. We are burdened with increasing debt, monetary emergencies, excessive consumer spending, and other problems that keep us from reaching our most meaningful financial objectives. Such challenges confront everybody, but the following twelve habits can put you on the ideal path to financial wellness.</p>
                    <h2 className='mb-24 text-blue-600'>#money  #economy  #dollor</h2>
                </div>
            </div>
            
        </div>
    );
};

export default News;



