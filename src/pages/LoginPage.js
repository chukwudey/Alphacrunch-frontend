import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import signin_bg from '../assets/signin_bg.png';
import { product_name } from '../constants/details';

const LoginPage = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const eyeStyle = ' hover:bg-gray-200 p-3 cursor-pointer';
  return (
    <div className=' flex justify-start items-center'>
      <div className=' hidden md:block h-screen w-5/12'>
        <img src={signin_bg} alt="futuristic computer desk with holographic bitcoin" className=' h-full'/>
      </div>
      <div className=' w-full md:w-7/12'>
        <form className=' mx-auto p-8 block'>
            <h1 className=' text-3xl md:text-5xl text-yellow-500 text-center mb-4 '>Welcome Chief! <span role='img' aria-label="Waving Hand" className=' border-none'>&#128075;</span></h1>
            <p className=' text-center text-xl mb-8'>Signin to continue</p>
            <div className=' border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                <input type="email" className=' pl-6 pr-1 py-2 w-full' name="email" value={formData.email} onChange={(e)=> setFormData({email: e.currentTarget.value})} placeholder='Enter Your Email'/>
            </div>
            <div className=' flex justify-between items-center border border-solid border-gray-500 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-2/3'>
                <input type={show? 'text': 'password'} 
                    name="password"
                    className=' pl-6 pr-2 py-2 w-full focus:outline-none'
                    value={formData.password}
                    onChange={(e)=> setFormData({password: e.currentTarget.value})}
                    placeholder='Password'/>
                {show? 
                    <div className={eyeStyle}>
                        <AiOutlineEyeInvisible onClick={()=> setShow(!show)}/>
                    </div> : 
                    <div className={eyeStyle}>
                        <AiOutlineEye onClick={()=> setShow(!show)}/>
                    </div> }
            </div>
            <Link>
                <p className=' text-yellow-500 cursor-pointer w-4/6 mx-auto mb-8'>Forgot password?</p>
            </Link>
            <Link>
                <button type='submit' className=' text-white block bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto text-center'>Sign In</button>
            </Link>
            <p className=' text-center'>New to {product_name}? <Link to='/signup'><span className=' cursor-pointer text-yellow-500'>Sign Up</span></Link> here</p>
        </form>
        
      </div>
    </div>
  )
}

export default LoginPage
