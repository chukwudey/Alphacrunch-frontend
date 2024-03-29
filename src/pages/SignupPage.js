import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose} from 'react-icons/ai';
import signin_bg from '../assets/signin_bg.png';
import { product_name } from '../constants/details';
import LogoBtn from '../components/buttons/LogoBtn';
import { CONFIRM_EMAIL_URL, CREATE_WALLET, SIGNUP_URL } from '../constants/links';
import { Bars } from 'react-loader-spinner';
import success_gold from '../assets/success_gold.svg';
import padlock from '../assets/padlock.svg'

const SignupPage = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [wallet_pin, setWallet_pin] = useState('');
    const [walletCreation, setWalletCreation] = useState(false);
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
    const errStyle = ` mx-auto w-2/3 -mt-4 text-red-500`;

    // eslint-disable-next-line
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    const checkPassword = (e) => {
      setFormData({...formData,password: e.currentTarget.value});
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
const user = JSON.parse(localStorage.getItem('user'));
    async function handleCreateWallet(e){
      e.preventDefault();
      setLoading(true);
       console.log(user._id)
       console.log(wallet_pin);
       await axios.post(CREATE_WALLET, {
            wallet_pin,
            id : user._id
        }).then(res => {
            setLoading(false);
            setEmailConfirmed(true);
            setWalletCreation(false);
            console.log(res);
        }).catch(err => {
            setLoading(false);
            setError(true);
            setErrorMessage(err.response.data.message);
            console.log(err);
        });
    }

    async function handleConfirmEmail(e){
      e.preventDefault();
      setLoading(true);
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
            setError(true);
            setErrorMessage(err.response.data.message)
            console.log(err);
        });
    }


    async function handleSubmit(e){
      e.preventDefault();
      setLoading(true);
      if (passwordStrength.name !== 'Strong') {
        setError(true);
        setErrorMessage(passwordStrength.message);
        setLoading(false)
        return;
      }
      await axios.post(SIGNUP_URL, {
            email: formData.email,
            password: formData.password,
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber
        }).then(res => {
            setLoading(false);
            setShowModal(true);
            setError(false)
            setEmailConfirmed(false)
            console.log(res);
            localStorage.setItem('user',JSON.stringify(res.data.data));
        }).catch(err => {
            setLoading(false);
            setError(true);
            setErrorMessage(err.response.data.message)
            console.log(err);
        });
    }

  return (
    <div className=' relative transition-all ease-in-out duration-300'>
      {loading && 
      <div className=' absolute shadow-lg z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Bars
            height="100"
            width="300"
            color="#FFBF00"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClassName=" mx-auto"
            visible={true}
            />
        </div>}
      {showModal && walletCreation && <div className=' bg-white absolute shadow-lg z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 w-3/4 md:w-1/3'>
            <div className=' text-right left-full w-max p-1 relative cursor-pointer hover:bg-gray-300' onClick={()=>setShowModal(false)}>
              <AiOutlineClose/>
            </div>
            <div className=' mx-auto w-1/5 md:mb-4'>
              <img src={padlock} alt="success" />
            </div>
            <form className=' text-center md:w-3/4 mx-auto' onSubmit={(e)=>handleCreateWallet(e)}>
              <p className=' md:text-3xl text-lg font-bold'>Set Transaction Pin</p>
              <p className=' md:text-sm text-xs'>Keep your transaction pin secure, we will never request for it.</p>
              <div className=' bg-gray-300  p-2 my-2 flex'>
                <input type={show? 'text': 'password'} 
                  className=' bg-gray-300 w-full tracking-widest focus:outline-none text-xl text-center' 
                  placeholder='1234' 
                  name="otp" 
                  inputMode='numeric'
                  disabled={loading}
                  value={wallet_pin} 
                  pattern='^\d{4}$'
                  typeof=''
                  max={9999}
                  min={1000}
                  maxLength={4}
                  minLength={4}
                  onChange={(e)=> setWallet_pin(e.currentTarget.value)}/>
                  {show? 
                      <div className={eyeStyle} onClick={()=> setShow(!show)}>
                          <AiOutlineEyeInvisible />
                      </div> : 
                      <div className={eyeStyle} onClick={()=> setShow(!show)}>
                          <AiOutlineEye />
                      </div> }
              </div>
              {error && <p className={errStyle}>{errorMessage}</p>}
              <div>
                <button className=' p-2 bg-black hover:bg-gray-900 text-white text-center rounded-md w-full'>Set Pin</button>
              </div>
              <p className=' text-xs text-red-500'>Do not share your pin with another person.</p>
            </form>
          </div>
          }
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
                  disabled={loading}
                  value={otp} 
                  max={999999}
                  min={100000}
                  onChange={(e)=> setOtp(e.currentTarget.value)}/>
              </div>
              {error && <p className={errStyle}>{errorMessage}</p>}
              <div>
                <button className=' p-2 bg-black hover:bg-gray-900 text-white text-center rounded-md'>Confirm Email</button>
              </div>
              <p className=' text-xs text-red-500'>If not found check your spam folder and star the email.</p>
            </form>
          </div>
          }
      {showModal && emailConfirmed && !walletCreation && <div className=' bg-white absolute shadow-lg z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 w-1/3'>
            <div className=' text-right left-full w-max p-1 relative cursor-pointer hover:bg-gray-300' onClick={()=>setShowModal(false)}>
              <AiOutlineClose/>
            </div>
            <div className=' mx-auto w-2/4'>
              <img src={success_gold} alt="success" />
            </div>
            <p className=' text-3xl text-center'>Success</p>
            <p className=' w-full py-6 text-center'>Your verification is successful, let's start making money</p>
            {wallet_pin === '' ?
                <div className=' text-center mx-auto'>
                  <button className=' p-2 bg-black text-white text-center rounded-md' onClick={()=> setWalletCreation(true)}>Set Transaction Pin</button>
                </div>
                :
                <Link to='/signin'>
                  <div className=' text-center mx-auto'>
                    <p className=' p-2 bg-black text-white text-center rounded-md'>Login</p>
                  </div>
                </Link>
                
            }
          </div>
          }
      <LogoBtn/>
      <div className=' flex justify-start items-center'>
        <div className=' hidden md:block h-screen w-5/12'>
          <img src={signin_bg} alt="futuristic computer desk with holographic bitcoin" className=' h-full'/>
        </div>
        <div className=' w-full md:w-7/12 mt-12 h-screen md:mt-0 overflow-y-scroll'>
          <form className=' mx-auto p-8 block' onSubmit={(e)=>handleSubmit(e)}>
              <h1 className=' text-center'>Welcome to {product_name}</h1>
              <h2 className=' text-3xl md:text-3xl text-yellow-500 text-center mb-4 '>So good to have you, Chief! <span role='img' aria-label="Waving Hand" className=' border-none'>&#128075;</span></h2>
              <p className=' text-center text-sm md:text-md mb-8'>Lets get you started ASAP! Kindly fill in the correct informations</p>
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
              {showPasswordStrength && formData.password !== "" && <p className={` mx-auto w-2/3 -mt-2 text-${passwordStrength.color}-500`}>{passwordStrength.name}</p>}
              {showPasswordStrength && formData.password !== "" && <p className={` text-xs mx-auto w-2/3 text-${passwordStrength.color}-300`}>{passwordStrength.message}</p>}
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
              {error && <p className={errStyle + ' text-xs'}>{errorMessage}</p>}

              {/* Sign up button */}
              <input type='submit' value='Sign Up' disabled={loading} className={`text-white block ${loading? 'bg-gray-700 cursor-wait': 'bg-black cursor-pointer'}  rounded-lg px-6 py-4 w-4/6 mx-auto mb-6 text-center`}/>
              
              <p className=' text-center'>Already have an account? <Link to='/signin'><span className=' cursor-pointer text-yellow-500'>Sign In</span></Link> here</p>
          </form>
          
        </div>
      </div>
    </div>
    
  )
}

export default SignupPage;
