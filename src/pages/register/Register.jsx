import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import swal from 'sweetalert'
import { useState } from 'react';

const Register = () => {
  const [registerError, setRegisterError]  = useState('');

    const {createUser} = useContext(AuthContext)

      const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password);

        

        //createUser
        createUser(email, password)
        .then(result => {
          console.log(result.user);
          e.target.reset();
        })
        .catch(error => {
          return swal({
            title: "Error!",
            text: "try again with password, email and name ",
            icon: "warning",
            
            dangerMode: true,
          })    
        })

        if(password.length < 6){
          setRegisterError('password should not be at least 6 characters or longer');
          return;
        }else if(!/[A-Z]/.test(password)){
          setRegisterError('Your Password should have at least one uppercase characters');
          return;
        }else if(!/[!"#$%&'()*+,-./:;<>=?@[\^_`|{}~]/.test(password)){
          setRegisterError('Please Use a Special character in password');
          return;
        }else{
          setRegisterError()
        return swal({
          title: "Register Sucessful!",
          text: "Thank You ",
         
        })  }  
        }
        
    return (
        <div>
        
        <div className="hero pt-16 border-t mb-36">

<div className="md:w-3/4 lg:w-1/2 mx-auto">
<h2 className='text-center text-3xl font-semibold text-blue-700'>Register now</h2>
  <form onSubmit={handleLogin} className="my-3">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="name" placeholder="Your name" name='name' className="input input-bordered" required />
    </div>
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
        
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-blue-100">Register</button>
    </div>
  </form>
  {registerError && <p className=" mt-2 text-center mb-4 mt-1 text-red-600">{registerError}</p> }
   <p className='text-center'>Already have a account? <Link to='/login' className='underline text-blue-700 font-semibold'>Login</Link></p>
</div>
</div>
    </div>
    );
};

export default Register;