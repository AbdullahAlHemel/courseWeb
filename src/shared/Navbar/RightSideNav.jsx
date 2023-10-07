import { FaGoogle, FaGithub, FaFacebookF, FaYoutube} from 'react-icons/fa';
import qzone1 from '../../assets/assets/qZone1.png'
import qzone2 from '../../assets/assets/qZone2.png'
import qzone3 from '../../assets/assets/qZone3.png'

const RightSideNav = () => {
    return (
        <>
        <div className='mx-2'>  
            <h4 className='my-3 font-bold'>Login With</h4>
           <button className='btn w-full'><FaGoogle className='text-[25px]'></FaGoogle><span>Google</span></button>
           <button className='btn w-full my-3'><FaGithub className='text-[25px]'></FaGithub><span>Github    </span></button>
        </div>
        <div className='mx-2 mb-3'>  
            <h4 className='my-3 font-bold'>Find on Us</h4>
           <a className='flex font-normal border p-2 rounded-t-lg'><FaFacebookF className='text-[25px] mr-3'></FaFacebookF><span>Facebook</span></a>
           <a className='flex font-normal border p-2 rounded-b-lg'><FaYoutube className='text-[25px] mr-3'></FaYoutube><span>Youtube</span></a>
        </div>

        <div className='p-4 space-y-3 mb-6'>
            <h2 className='text-3xl'>Q zone</h2>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
        </>
    );
};

export default RightSideNav;