import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import signin_bg from '../assets/signin_bg.png';
import { product_name } from '../constants/details';
import LogoBtn from '../components/LogoBtn';

const SignupPage = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        phoneNumber: ''
    });
    const [showPasswordStrength, setShowPasswordStrength] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
      name: 'weak',
      color: 'red',
      message: 'The string must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and at least one special character'
    })
    const eyeStyle = ' hover:bg-gray-200 p-3 cursor-pointer';

    // eslint-disable-next-line
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    const checkPassword = (e) => {
      setFormData({password: e.currentTarget.value});
      setShowPasswordStrength(true);
      if (strongRegex.test(formData.password + e.currentTarget.value)) {
        setPasswordStrength({
          name: 'Strong',
          color: 'green',
          message: 'Good to go'
        });
      }else if (mediumRegex.test(formData.password + e.currentTarget.value)) {
        setPasswordStrength({
          name: 'Medium',
          color: 'yellow',
          message: 'The password must be at least 8 character long.'
        });
      }else if (formData.password.length < 5) {
        setPasswordStrength({
          name: 'Weak',
          color: 'red',
          message: 'The password must contain at least 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character and at least one special character'
        });
      }
    }
  return (
    <div className=' relative'>
      <LogoBtn/>
      <div className=' flex justify-start items-center'>
        <div className=' hidden md:block h-screen w-5/12'>
          <img src={signin_bg} alt="futuristic computer desk with holographic bitcoin" className=' h-full'/>
        </div>
        <div className=' w-full md:w-7/12 mt-12 md:mt-2'>
          <form className=' mx-auto p-8 block'>
              <h1 className=' text-center'>Welcome to {product_name}</h1>
              <h2 className=' text-3xl md:text-3xl text-yellow-500 text-center mb-4 '>So good to have you, Chief! <span role='img' aria-label="Waving Hand" className=' border-none'>&#128075;</span></h2>
              <p className=' text-center text-sm md:text-lg mb-8'>Lets get you started ASAP! Kindly fill in the correct informations</p>
              <div className=' border-solid border-gray-500 border-2 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                  <input type="email" className=' pl-6 pr-1 py-2 w-full' name="email" value={formData.email} onChange={(e)=> setFormData({email: e.currentTarget.value})} placeholder='Enter Your Email' required/>
              </div>
              <div className=' flex justify-between items-center border-2 border-solid border-gray-500 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-2/3'>
                  <input type={show? 'text': 'password'} 
                      name="password"
                      className=' pl-6 pr-2 py-2 w-full focus:outline-none'
                      value={formData.password}
                      onChange={(e)=> checkPassword(e)}
                      placeholder='Password' required/>
                  {show? 
                      <div className={eyeStyle} onClick={()=> setShow(!show)}>
                          <AiOutlineEyeInvisible />
                      </div> : 
                      <div className={eyeStyle} onClick={()=> setShow(!show)}>
                          <AiOutlineEye />
                      </div> }
              </div>
              {showPasswordStrength && <p className={` mx-auto w-2/3 text-${passwordStrength.color}-500`}>{passwordStrength.name}</p>}
              {showPasswordStrength && <p className={` text-xs mx-auto w-2/3 text-${passwordStrength.color}-300`}>{passwordStrength.message}</p>}
              <div className=' border-2 border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                  <input type="text" minLength={3} className=' pl-6 pr-1 py-2 w-full' name="fullName" value={formData.fullName} onChange={(e)=> setFormData({fullName: e.currentTarget.value})} placeholder='Full Name' required/>
              </div>
              <div className=' border-solid border-gray-500 border-2 bg-pri-pink rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                  <input type="phone" className=' pl-6 pr-1 py-2 w-full' name="phoneNumber" value={formData.phoneNumber} onChange={(e)=> setFormData({phoneNumber: e.currentTarget.value})} placeholder='Phone Number' required/>
              </div>
              <div className=' flex justify-start gap-4 w-4/6 mb-12 mx-auto'>
                <input type="radio" className=' border-none' name="TC" value="TC" required/>
                <p>I agree with the <Link to=''><span className=' text-gray-700 cursor-pointer'>terms and conditions</span></Link>.</p>
              </div>
              <button type='submit' className=' text-white block bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-4 text-center'>Sign Up</button>
              <p className=' text-center'>Already have an account? <Link to='/signin'><span className=' cursor-pointer text-yellow-500'>Sign In</span></Link> here</p>
          </form>
          
        </div>
      </div>
    </div>
    
  )
}

export default SignupPage;
