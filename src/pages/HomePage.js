import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import map_white from '../assets/map_white.svg';
import hand_bitcoin from '../assets/hand_bitcoin.png';
import grey_suitcase from '../assets/grey_suitcase.svg'
import { product_name } from '../constants/names';
import PaymentSteps from '../components/PaymentSteps';

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
    return (
        <div className=' flex flex-col min-h-screen'>
            <Header/>
            <Outlet/>

            <div className={` flex flex-col-reverse md:flex md:flex-row justify-start items-center mx-auto bg-gray-100 w-full pt-4`}>
                <div className=' md:w-3/5'>
                    <img className='md:w-3/5 -ml-1' src={hand_bitcoin} alt="hand holding bitcoin"/>
                </div>
                <div className=' w-2/5 mb-4'>
                    <p className=' font-Space-Grotesk text-2xl font-bold mb-6'>Get started with <br/> {product_name} in {steps.length} easy steps.</p>
                    {steps.map(e =>
                        <PaymentSteps position={e.position} description={e.description} title={e.title} icon={grey_suitcase}/>
                    )}
                    
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
