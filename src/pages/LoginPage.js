import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import signin_bg from '../assets/signin_bg.png';
import { product_name } from '../constants/details';
import LogoBtn from '../components/LogoBtn';
import axios from 'axios';
import { LOGIN_URL } from '../constants/links';
import { Bars } from 'react-loader-spinner';

const LoginPage = () => {
  const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const eyeStyle = ' hover:bg-gray-200 p-3 cursor-pointer';

    async function handleSubmit(e){
      e.preventDefault();
      setLoading(true);

      await axios.post(LOGIN_URL, {
            email: email,
            password: password
        }).then(res => {
            setLoading(false);
            console.log(res);
            localStorage.setItem('user',JSON.stringify(res.data));
            navigate('/dashboard');
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

  return (
    <div className=' relative'>
      <LogoBtn/>
        <div className=' flex justify-start items-center'>
          <div className=' hidden md:block h-screen w-5/12'>
            <img src={signin_bg} alt="futuristic computer desk with holographic bitcoin" className=' h-full'/>
          </div>
          <div className=' w-full md:w-7/12 mt-12 md:mt-2'>
            <form className=' mx-auto p-8 block' onSubmit={(e)=>handleSubmit(e)}>
                <h1 className=' text-3xl md:text-5xl text-yellow-500 text-center mb-4 '>Welcome Chief! <span role='img' aria-label="Waving Hand" className=' border-none'>&#128075;</span></h1>
                <p className=' text-center text-xl mb-8'>Sign In to continue</p>
                <div className=' border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                    <input type="email" className=' pl-6 pr-1 py-2 w-full' name="email" disabled={loading} value={email} onChange={(e)=> setEmail( e.target.value)} placeholder='Enter Your Email' required/>
                </div>
                <div className=' flex justify-between items-center border border-solid border-gray-500 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-2/3'>
                    <input type={show? 'text': 'password'} 
                        name="password"
                        className=' pl-6 pr-2 py-2 w-full focus:outline-none'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        disabled={loading}
                        required
                        placeholder='Password'/>
                    {show? 
                        <div className={eyeStyle}>
                            <AiOutlineEyeInvisible onClick={()=> setShow(!show)}/>
                        </div> : 
                        <div className={eyeStyle}>
                            <AiOutlineEye onClick={()=> setShow(!show)}/>
                        </div> }
                </div>
                <Link to='/forgot-password'>
                    <p className=' text-yellow-500 cursor-pointer w-4/6 mx-auto mb-8'>Forgot password?</p>
                </Link>
                    {!loading? 
                      <input type='submit' value='Sign In' className=' text-white block bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-10 text-center'/>
                      : 
                      <button className=' text-white flex justify-center bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-10 text-center'
                      type="submit">
                        <div>
                          <Bars
                            height="20"
                            width="60"
                            color="#ffffff"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClassName=" mx-auto"
                            visible={true}
                          />
                        </div>
                        
                    </button>
                    }
                
                <p className=' text-center mb-6'>New to {product_name}? <Link to='/signup'><span className=' cursor-pointer text-gray-500'>Sign Up</span></Link> here</p>
                <p className=' text-xs text-center'>By continuing you agree to the <b className=' text-gray-700'>Policy and Rules</b></p>
            </form>
            
          </div>
        </div>
    </div>
    
  )
}

export default LoginPage
