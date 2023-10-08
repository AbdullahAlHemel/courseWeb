import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import swal from 'sweetalert'
import { FaGoogle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect } from 'react';

const Login = () => {

  useEffect(() => {
    AOS.init({duration:"1100"})
    })

    const {signIn, signInWithGoogle} = useContext(AuthContext)
    const location = useLocation(); 
    const navigate = useNavigate();
    console.log('location in log in page', location);
    
    const handleLogin = e =>{
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result => {
          console.log(result.user );
          //navigate
          navigate(location?.state? location.state : '/' );   
        })
        .catch(error =>{
          return swal({
            title: "Error?",
            text: "try again with correct password and email",
            icon: "warning",
            
            dangerMode: true,
          })    
          // console.error(error);
        })
        }


        const handleGoogleSignIn = () => {
          signInWithGoogle()
          .then(result => {
              console.log(result.user);
          })
          .catch(error => {
              console.error(error)
          })
      }

    return (
        <div>
            
            <div className="hero pt-4 border-t mb-16">
    <div data-aos="zoom-in" className="md:w-3/4 lg:w-1/2 mx-auto border px-5 rounded py-8">
        <h2 className='text-center text-3xl font-semibold text-gray-600'>Login now</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-red-100">Login</button>
        </div>
      </form>
       <p className='text-center'>Don't have a account? <Link to='/register' className='underline text-blue-700 font-semibold'>Register</Link></p>
       <h1 className='ml-[100px] mt-4 text-[18px]] text-pink-500'>Login With</h1>
       <button onClick={handleGoogleSignIn} className='flex rounded text-2xl font-semibold w-[200px] md:mx-[80px] border-blue-400 md:px-[120px] bg-blue-200 p-2  md:w-[400px] border text-green-700'>
        <FaGoogle className='mr-3'/>
        Google</button>

    </div>
    
</div>
        </div>
    );
};

export default Login;