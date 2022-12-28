import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import map_white from '../assets/map_white.svg';
import hand_bitcoin from '../assets/hand_bitcoin.png';
import grey_suitcase from '../assets/grey_suitcase.svg'
import { product_name, trans_card_details } from '../constants/details';
import PaymentSteps from '../components/PaymentSteps';
import BlackBtn from '../components/BlackBtn';
import FeaturesCard from '../components/FeaturesCard';

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
            <div className=' my-8'>
                <h2 className=' text-4xl text-center font-bold'>We Are More Than An Exchange.</h2>
                <p className=' text-center'>An awesome place to trade securely with no worries or delay. It is perfectly built for you.</p>
                <div className=' grid grid-cols-2 w-max mx-auto my-4 place-items-center'>
                    {trans_card_details? trans_card_details.map(e => 
                        <FeaturesCard title={e.title} description={e.description} image={e.image} />
                    ): <p>loading...</p>
                }
                </div>
            </div>
            <div className=' flex space-x-4 items-center mx-auto md:text-base text-sm my-2'>
                <NavLink exact='true' className={({isActive}) => !isActive? cardNavLinkStyle : cardNavLinkStyle +' bg-black text-white'} to='/cryptocurrency-card'>
                    <p>CryptoCurrency</p>
                </NavLink>
                <NavLink exact='true' className={({isActive}) => !isActive? cardNavLinkStyle : cardNavLinkStyle +' bg-black text-white'} to='/giftcard-card'>
                    <p>GiftCards</p>
                </NavLink>
                <NavLink exact='true' className={({isActive}) => !isActive? cardNavLinkStyle : cardNavLinkStyle +' bg-black text-white'} to='/rates-card'>
                    <p>Rates</p>
                </NavLink>
            </div>
            <Outlet/>
            {/* steps section */}
            <div className={` flex flex-col-reverse md:flex md:flex-row justify-start items-center mx-auto bg-gray-100 w-full pt-4`}>
                <div className=' md:w-3/5'>
                    <img className='md:w-3/5 -ml-1' src={hand_bitcoin} alt="hand holding bitcoin"/>
                </div>
                <div className=' w-2/5 mb-4'>
                    <p className=' font-Space-Grotesk text-2xl font-bold mb-6'>Get started with <br/> {product_name} in {steps.length} easy steps.</p>
                    {steps.map(e =>
                        <PaymentSteps position={e.position} description={e.description} title={e.title} icon={grey_suitcase}/>
                    )}
                    <BlackBtn url='' text='Start Trading'/>
                </div>
            </div>

            {/* map section */}
            <div className='flex justify-center h-auto bg-black text-white items-center text-4xl p-5 space-x-10'>
                <div>
                    <img src={map_white} alt="map of the world in dotted black and white with black background"/>
                </div>
                <div className='hidden md:block'>
                    <p>Be Limitless, Get a secure <br/> wallet address in 5 seconds.</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;
