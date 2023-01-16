import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose} from 'react-icons/ai';
import signin_bg from '../assets/signin_bg.png';
import { product_name } from '../constants/details';
import LogoBtn from '../components/LogoBtn';
import { CONFIRM_EMAIL_URL, SIGNUP_URL } from '../constants/links';
import { Bars } from 'react-loader-spinner';
import success_gold from '../assets/success_gold.svg';

const SignupPage = () => {
    const [show, setShow] = useState(false);
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        phoneNumber: ''
    });
    const [otp, setOtp] = useState('')
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
      setFormData({...formData,password: e.currentTarget.value});
      setShowPasswordStrength(true);
      console.log(formData);
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

    async function handleConfirmEmail(e){
      e.preventDefault();
      setLoading(true);
       const user = JSON.parse(localStorage.getItem('user'));
       console.log(user)
       await axios.post(CONFIRM_EMAIL_URL, {
            otp,
            id : user._id
        }).then(res => {
            setLoading(false);
            setEmailConfirmed(true);
            console.log(res);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }


    async function handleSubmit(e){
      e.preventDefault();
      setLoading(true);
      await axios.post(SIGNUP_URL, {
            email: formData.email,
            password: formData.password,
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber
        }).then(res => {
            setLoading(false);
            setShowModal(true);
            setEmailConfirmed(false)
            console.log(res);
            localStorage.setItem('user',JSON.stringify(res.data.data));
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

  return (
    <div className=' relative ease-in-out 1s'>
      {showModal && !emailConfirmed && <div className=' bg-white absolute shadow-lg z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 w-1/3'>
            <div className=' text-right left-full w-max p-1 relative cursor-pointer hover:bg-gray-300' onClick={()=>setShowModal(false)}>
              <AiOutlineClose/>
            </div>
            <div className=' mx-auto w-2/5 md:mb-4'>
              <img src={success_gold} alt="success" />
            </div>
            <form className=' text-center md:w-3/4 mx-auto' onSubmit={(e)=>handleConfirmEmail(e)}>
              <p className=' text-sm'>Check email {formData.email} for an OTP to confirm your email</p>
              <div className=' bg-gray-300  p-2 my-2'>
                <input type="number" 
                  className=' bg-gray-300 w-full tracking-widest focus:outline-none text-center' 
                  placeholder='123456' 
                  name="otp" 
                  inputMode='numeric'
                  value={otp} 
                  max={999999}
                  min={100000}
                  onChange={(e)=> setOtp(e.currentTarget.value)}/>
              </div>
              <div>
                <button className=' p-2 bg-black hover:bg-gray-900 text-white text-center rounded-md'>Confirm Email</button>
              </div>
              <p className=' text-xs text-red-500'>If not found check your spam folder and star the email.</p>
            </form>
          </div>
          }
      {showModal && emailConfirmed && <div className=' bg-white absolute shadow-lg z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 w-1/3'>
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
              <h1 className=' text-center'>Welcome to {product_name}</h1>
              <h2 className=' text-3xl md:text-3xl text-yellow-500 text-center mb-4 '>So good to have you, Chief! <span role='img' aria-label="Waving Hand" className=' border-none'>&#128075;</span></h2>
              <p className=' text-center text-sm md:text-lg mb-8'>Lets get you started ASAP! Kindly fill in the correct informations</p>
              <div className=' border-solid border-gray-500 border-2 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                  <input type="email" 
                    className=' pl-6 pr-1 py-2 w-full' 
                    disabled={loading} 
                    name="email" 
                    value={formData.email} 
                    onChange={(e)=> setFormData({...formData,email: e.currentTarget.value})} 
                    placeholder='Enter Your Email' required/>
              </div>
              <div className=' flex justify-between items-center border-2 border-solid border-gray-500 rounded-lg p-0 overflow-hidden mx-auto mb-2 focus:outline-none w-2/3'>
                  <input type={show? 'text': 'password'} 
                      name="password"
                      className=' pl-6 pr-2 py-2 w-full focus:outline-none'
                      value={formData.password}
                      disabled={loading}
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
              {showPasswordStrength && <p className={` mx-auto w-2/3 -mt-2 text-${passwordStrength.color}-500`}>{passwordStrength.name}</p>}
              {showPasswordStrength && <p className={` text-xs mx-auto w-2/3 text-${passwordStrength.color}-300`}>{passwordStrength.message}</p>}
              <div className=' border-2 border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                  <input type="text" minLength={3} className=' pl-6 pr-1 py-2 w-full' name="fullName" value={formData.fullName} onChange={(e)=> setFormData({...formData,fullName: e.currentTarget.value})} placeholder='Full Name' required/>
              </div>
              <div className=' border-solid border-gray-500 border-2 bg-pri-pink rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 my-4'>
                  <input type="tel" disabled={loading} className=' pl-6 pr-1 py-2 w-full' name="phoneNumber" value={formData.phoneNumber} onChange={(e)=> setFormData({...formData,phoneNumber: e.currentTarget.value})} placeholder='Phone Number' required/>
              </div>
              <div className=' flex justify-start gap-4 w-4/6 mb-10 mx-auto'>
                <input type="checkbox" id='TC' disabled={loading} className=' w-4 h-4 text-gray-500 rounded cursor-point' name="TC" value="TC" required/>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor='TC'>I agree with the <Link to=''><span className=' text-gray-700 dark:text-blue-500 hover:underline'>terms and conditions</span></Link>.</label>
              </div>
              {!loading? 
                      <input type='submit' value='Sign Up' className=' text-white block bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-6 text-center'/>
                      : 
                      <button className=' text-white flex justify-center bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-6 text-center'
                      type="button">
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
              <p className=' text-center'>Already have an account? <Link to='/signin'><span className=' cursor-pointer text-yellow-500'>Sign In</span></Link> here</p>
          </form>
          
        </div>
      </div>
    </div>
    
  )
}

export default SignupPage;
