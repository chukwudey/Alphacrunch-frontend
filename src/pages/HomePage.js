import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
// import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import map_white from '../assets/map_white.svg';
import hand_bitcoin from '../assets/hand_bitcoin.png';
import $ from '../assets/$.svg'
import grey_suitcase from '../assets/grey_suitcase.svg';
import group_phone_coins from '../assets/group_phone_coins.svg';
import { product_name, trans_card_details } from '../constants/details';
import PaymentSteps from '../components/PaymentSteps';
import BlackBtn from '../components/BlackBtn';
import FeaturesCard from '../components/FeaturesCard';
import { interlinks } from '../constants/links';

const HomePage = () => {
    const steps = [
        {
            position: '1',
            title: 'Smooth Payments',
            description: 'An awesome place to trade securely with no worries or delays.'
        },
        {
            position: '2',
            title: 'Smooth Payments',
            description: 'An awesome place to trade securely with no worries or delays.'
        },{
            position: '3',
            title: 'Smooth Payments',
            description: 'An awesome place to trade securely with no worries or delays.'
        },
    ]
    const cardNavLinkStyle = ' w-max text-black hover:text-black hover:bg-white hover:border-black border-2 border-transparent px-4 py-1 md:px-14 md:py-2 rounded-2xl'
    return (
        <div className=' flex flex-col min-h-screen'>
            <Header/>
            <section className=' block md:flex justify-center mx-auto'>
                <div className=' p-4 md:w-5/12'>
                    <h2 className=' font-bold text-4xl md:text-6xl my-8 font-Space-Grotesk w-3/4 md:w-full text-center md:text-left mx-auto'>Your one stop solution for your Giftcard and Crypto exchange</h2>
                    <p className=' md:w-11/12 mb-8 text-center mx-auto'>An awesome place to trade securely with no worries or delay. It is perfectly built for you.</p>
                    <div className=' hidden md:flex justify-start items-center space-x-2 mx-auto'>
                        <BlackBtn url='/signup' text='Start Trading'/>
                        <Link to=''>
                            <div className=' flex justify-center items-center bg-white hover:bg-black hover:text-white px-8 py-4 border border-black w-max rounded-2xl'>
                                <p>Checkout Rates</p>
                                <img src={$} alt="dollar"/>
                            </div>
                        </Link>
                    </div>
                    <div className=' md:hidden mx-auto'>
                        <Link to={interlinks.signup_link}>
                            <div className=' flex justify-center items-center bg-black text-white hover:bg-white hover:text-black px-8 py-4 border border-black w-full rounded-2xl'>
                                <p>Start Trading</p>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className=' flex justify-center items-center bg-white hover:bg-black hover:text-white px-8 py-4 border border-black w-full rounded-2xl'>
                                <p>Checkout Rates</p>
                                <img src={$} alt="dollar"/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <img src={group_phone_coins} alt="phone with bitcoin, etheruem, litecoin and other shapes around"/>
                </div>
            </section>

            <section className=' w-5/6 mx-auto my-8'>
                <h2 className=' text-xl md:text-4xl text-center font-bold'>We Are More Than An Exchange.</h2>
                <p className=' text-xs md:text-base text-center'>An awesome place to trade securely with no worries or delay. It is perfectly built for you.</p>
                <div className=' flex overflow-hidden md:grid md:grid-cols-2 w-max mx-auto my-4 place-items-center'>
                    {trans_card_details? trans_card_details.map(e => 
                        <FeaturesCard title={e.title} description={e.description} image={e.image} />
                    ): <p>loading...</p>
                }
                </div>
            </section>

            <nav className=' flex space-x-4 items-center mx-auto md:text-base text-sm my-2'>
                <NavLink exact='true' className={({isActive}) => !isActive? cardNavLinkStyle : cardNavLinkStyle +' bg-black text-white'} to='/cryptocurrency-card'>
                    <p>CryptoCurrency</p>
                </NavLink>
                <NavLink exact='true' className={({isActive}) => !isActive? cardNavLinkStyle : cardNavLinkStyle +' bg-black text-white'} to='/giftcard-card'>
                    <p>GiftCards</p>
                </NavLink>
                <NavLink exact='true' className={({isActive}) => !isActive? cardNavLinkStyle : cardNavLinkStyle +' bg-black text-white'} to='/rates-card'>
                    <p>Rates</p>
                </NavLink>
            </nav>
            <Outlet/>
            {/* steps section */}
            <section className={` flex flex-col-reverse md:flex md:flex-row justify-start items-center mx-auto bg-gray-100 w-full pt-4`}>
                <div className=' md:w-3/5'>
                    <img className='md:w-3/5 -ml-1' src={hand_bitcoin} alt="hand holding bitcoin"/>
                </div>
                <div className=' w-10/12 md:w-2/5 mb-4 text-center md:text-left'>
                    <p className=' font-Space-Grotesk text-2xl font-bold mb-6'>Get started with <br/> {product_name} in {steps.length} easy steps.</p>
                    {steps.map(e =>
                        <PaymentSteps position={e.position} description={e.description} title={e.title} icon={grey_suitcase}/>
                    
                    )}
                    <BlackBtn url='' text='Start Trading'/>
                </div>
            </section>

            {/* map section */}
            <section className='flex justify-center h-auto bg-black text-white items-center text-4xl p-5 space-x-10'>
                <div>
                    <img src={map_white} alt="map of the world in dotted black and white with black background"/>
                </div>
                <div className='hidden md:block'>
                    <p>Be Limitless, Get a secure <br/> wallet address in 5 seconds.</p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default HomePage;
