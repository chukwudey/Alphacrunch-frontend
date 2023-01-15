import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import signin_bg from '../assets/signin_bg.png';
import { product_name } from '../constants/details';
import LogoBtn from '../components/LogoBtn';
import axios from 'axios';
import { GET_USER_BY_EMAIL, REQUEST_PASSWORD_CHANGE_URL } from '../constants/links';
import { Bars } from 'react-loader-spinner';

const ForgotPasswordPage = () => {
    const [foundEmail, setFoundEmail] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [sentEmail, setSentEmail] = useState(false);

    const [email , setEmail] = useState('');

    async function checkEmail(e){
      setLoading(true);
      if (email === '') {
        e.preventDefault();
        setMessage('email is required');
        setTimeout(()=>{
          setMessage('');
          setLoading(false);
        }, 1000)

        return;
      }

      await axios.get(GET_USER_BY_EMAIL,{
        params: {email}
      }).then(res => {
          setLoading(false);
          console.log(res.data.data);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          setFoundEmail(true);
          setMessage('found user, request for reset password otp?')
      }).catch(err => {
          setLoading(false);
          console.log(err);
          setMessage(err.response.data.message);
          setFoundEmail(false);
          setTimeout(()=>{
            setMessage('');
            setLoading(false);
          }, 1000)
      });

    }

    async function handleSubmit(e){
      e.preventDefault();
      setLoading(true);
      
      await axios.post(REQUEST_PASSWORD_CHANGE_URL, {
            email: email
        }).then(res => {
            setLoading(false);
            console.log(res);
            setMessage(res.data.message);
            setSentEmail(true);
        }).catch(err => {
            setLoading(false);
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
                <p className=' text-center text-xl mb-8'>Forgot Your Password? No problem.</p>
                <div className=' border border-solid border-gray-500 rounded-lg p-0 overflow-hidden focus:outline-none mx-auto w-2/3 mt-4 mb-1'>
                    <input type="email" className=' pl-6 pr-1 py-2 w-full' name="email" disabled={loading} value={email} onChange={(e)=> setEmail( e.target.value)} placeholder='Enter Your Email' required/>
                </div>
                <p className={` text-center ${foundEmail? 'text-green-700': 'text-red-700' } -mt-2 mb-4`}>{message}</p>

                    { !loading && !foundEmail? 
                      <input type='button' 
                        value='Check For Email' 
                        onClick={checkEmail}
                        disabled={loading}
                        className=' text-white block bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-10 text-center'/>
                      : foundEmail?
                      <input type='submit' value='Requst Password Change' disabled={sentEmail} className={` text-white block bg-black ${sentEmail? ' cursor-text': 'cursor-pointer'} rounded-lg px-6 py-4 w-4/6 mx-auto mb-10 text-center`}/>
                      :
                      <button className=' text-white flex justify-center bg-black cursor-pointer rounded-lg px-6 py-4 w-4/6 mx-auto mb-10 text-center'
                      type="submit" disabled={loading}>
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
                
                {sentEmail && <Link to='/reset-password' > <p type="button" className=' text-center text-green-600'>Go to Reset Password</p></Link>}
                <p className=' text-center mb-6'>New to {product_name}? <Link to='/signup'><span className=' cursor-pointer text-gray-500'>Sign Up</span></Link> here</p>
                <p className=' text-xs text-center'>By continuing you agree to the <b className=' text-gray-700'>Policy and Rules</b></p>
            </form>
            
          </div>
        </div>
    </div>
    
  )
}

export default ForgotPasswordPage;
