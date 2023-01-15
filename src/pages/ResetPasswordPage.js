import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose} from 'react-icons/ai';
import signin_bg from '../assets/signin_bg.png';
import { mediumRegex, product_name, strongRegex } from '../constants/details';
import LogoBtn from '../components/LogoBtn';
import axios from 'axios';
import { PASSWORD_RESET_URL } from '../constants/links';
import { Bars } from 'react-loader-spinner';

import success_gold from '../assets/success_gold.svg';

const ResetPasswordPage = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [otp , setOtp] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [showPasswordStrength, setShowPasswordStrength] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
      name: 'weak',
      color: 'red',
      message: 'The string must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and at least one special character'
    })

    const checkPassword = (e) => {
      setPassword(e.currentTarget.value);
      setShowPasswordStrength(true);
      if (strongRegex.test(password + e.currentTarget.value)) {
        setPasswordStrength({
          name: 'Strong',
          color: 'green',
          message: 'Good to go'
        });
      }else if (mediumRegex.test(password + e.currentTarget.value)) {
        setPasswordStrength({
          name: 'Medium',
          color: 'yellow',
          message: 'The password must be at least 8 character long.'
        });
      }else if (password.length < 5) {
        setPasswordStrength({
          name: 'Weak',
          color: 'red',
          message: 'The password must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and at least one special character'
        });
      }
    }

    const user = JSON.parse(localStorage.getItem('user'));

    const eyeStyle = ' hover:bg-gray-200 p-3 cursor-pointer';

    async function handleSubmit(e){
      e.preventDefault();
      setLoading(true);

      if (password === confirmPassword) {
        await axios.post(PASSWORD_RESET_URL, {
            otp,
            id: user._id,
            password
        }).then(res => {
            setLoading(false);
            setShowModal(true);
            console.log(res);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
      }else{
        return;
      }

      
    }

  return (
    <div className=' relative'>
          {showModal && <div className=' bg-white absolute shadow-lg z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 w-1/3'>
            <div className=' text-right left-full w-max p-1 relative cursor-pointer hover:bg-gray-300' onClick={()=>setShowModal(false)}>
              <AiOutlineClose/>
            </div>
            <div className=' mx-auto w-2/4'>
              <img src={success_gold} alt="success" />
            </div>
            <p className=' text-3xl text-center'>Success</p>
            <p className=' w-full py-6 text-center'>You can now go and login</p>
            <Link to='/signin'><p className=' p-2 bg-black text-white text-center rounded-md'>Go To Login</p></Link>
          </div>
          }
      <LogoBtn/>
        <div className=' flex justify-start items-center'>
          <div className=' hidden md:block h-screen w-5/12'>
            <img src={signin_bg} alt="futuristic computer desk with holographic bitcoin" className=' h-full'/>
          </div>
          <div className=' w-full md:w-7/12 mt-12 md:mt-2'>
            <form className=' mx-auto p-8 block' onSubmit={(e)=>handleSubmit(e)}>
                <h1 className=' text-3xl md:text-5xl text-yellow-500 text-center mb-4 '>Welcome Chief! <span role='img' aria-label="Waving Hand" className=' border-none'>&#128075;</span></h1>
                <p className=' text-center text-xl mb-8'>Reset Your Password</p>
                <div className=' border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                    <input type="number" className=' pl-6 pr-1 py-2 w-full'  name="otp" disabled={loading || showModal} value={otp} onChange={(e)=> setOtp( e.target.value)} placeholder='Enter OTP' required/>
                </div>
                <div className=' flex justify-between items-center border border-solid border-gray-500 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-2/3'>
                    <input type={show? 'text': 'password'} 
                        name="password"
                        className=' pl-6 pr-2 py-2 w-full focus:outline-none'
                        value={password}
                        onChange={(e)=>checkPassword(e)}
                        disabled={loading || showModal}
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
                {showPasswordStrength && <p className={` mx-auto w-2/3 text-${passwordStrength.color}-500`}>{passwordStrength.name}</p>}
                {showPasswordStrength && <p className={` text-xs mx-auto w-2/3 text-${passwordStrength.color}-300`}>{passwordStrength.message}</p>}

                <div className=' flex justify-between items-center border border-solid border-gray-500 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-2/3 mt-4'>
                    <input type={show? 'text': 'password'} 
                        name="password"
                        className=' pl-6 pr-2 py-2 w-full focus:outline-none'
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.currentTarget.value)}
                        disabled={loading || showModal}
                        required
                        placeholder='Confirm Password'/>
                    {show? 
                        <div className={eyeStyle}>
                            <AiOutlineEyeInvisible onClick={()=> setShow(!show)}/>
                        </div> : 
                        <div className={eyeStyle}>
                            <AiOutlineEye onClick={()=> setShow(!show)}/>
                        </div> }
                </div>
                {password !== confirmPassword && <p className=' text-center text-red-600'>password and confirm password not matching</p>}
                    {!loading? 
                      <input type='submit' disabled={showModal} value='Reset Password' className=' text-white block bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-10 text-center'/>
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
            </form>
            
          </div>
        </div>
    </div>

    
  )
}

export default ResetPasswordPage;
