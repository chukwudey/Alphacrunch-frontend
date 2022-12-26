import React from 'react';
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { linkStyle } from '../../constants/styles';

const Footer = () => {
    const socialMedialContainerStyle = 'flex items-center space-x-1 w-min ';
    const footerColumnHeadStyle = ' font-semibold text-2xl mb-2 font-Space-Grotesk';
  return (
    <div className=' flex flex-col md:flex-row justify-between align-middle bg-pri-pink px-12 py-16 mt-auto'>
        <div className=' md:w-1/3 px-8 mb-6'>
            <p className=' font-semibold text-2xl mb-4'>Alphacrunch</p>
            <p>Alphacrunch is a company duly registered with RC Number: 1775651 under the Laws of the Federal Republic of Nigeria</p>
            
        </div>
        <div className='md:hidden flex-col space-x-2 px-8'>
                <p>hello@alphacrunch.co</p>
                <div className=' flex space-x-1'>
                    <Link className={socialMedialContainerStyle + linkStyle} to="">
                        <AiFillTwitterSquare/>
                    </Link>
                    <Link className={socialMedialContainerStyle + linkStyle} to="">
                        <AiFillInstagram/>
                    </Link>
                    <Link className={socialMedialContainerStyle + linkStyle} to="">
                        <AiFillYoutube/>
                    </Link>
                    <Link className={socialMedialContainerStyle + linkStyle} to="">
                        <AiFillFacebook/>
                    </Link>
            </div>
                </div>
                
        <div className='hidden md:flex justify-evenly space-x-6 w-9/12 px-8'>
            <div>
                <p className={footerColumnHeadStyle}>Company</p>
                <Link className={linkStyle} to="">
                    <p>About Us</p>
                </Link>
                <Link className={linkStyle} to="">
                    <p>Careers</p>
                </Link>
                <Link className={linkStyle} to="">
                    <p>Business</p>
                </Link>
            </div>
            <div>
                <p className={footerColumnHeadStyle}>Support</p>
                <Link className={linkStyle} to="">
                    <p>Terms of Service</p>
                </Link>
                <Link className={linkStyle} to="">
                    <p>Privacy Polices</p>
                </Link>
                <Link className={linkStyle} to="">
                    <p>FAQ</p>
                </Link>
            </div>
            <div>
                <p className={footerColumnHeadStyle}>Products</p>
                <Link className={linkStyle} to="">
                    <p>Giftcards</p>
                </Link>
                <Link className={linkStyle} to="">
                    <p>Buy and Sell Crypto Assets</p>
                </Link>
                <Link className={linkStyle} to="">
                    <p>Wallet</p>
                </Link>
            </div>
            <div>
                <p className={footerColumnHeadStyle}>Community</p>
                <p>hello@alphacrunch.co</p>
                <Link className={socialMedialContainerStyle + linkStyle} to="">
                    <AiFillTwitterSquare/>
                    <p>Twitter</p>
                </Link>
                <Link className={socialMedialContainerStyle + linkStyle} to="">
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </Link>
                <Link className={socialMedialContainerStyle + linkStyle} to="">
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </Link>
                <Link className={socialMedialContainerStyle + linkStyle} to="">
                    <AiFillFacebook/>
                    <p>Facebook</p>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Footer