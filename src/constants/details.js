import bank_card from '../assets/bank_cards.svg';
import phone_crypto from '../assets/phone_crypto.svg';
import bitcoin_grey from '../assets/bitcoin_grey.svg';
import suitcase_flow from '../assets/suitcase_flow.svg';
import dollar_bitcoin from '../assets/dollar_bitcoin.svg';
import smooth_flow from '../assets/smooth_flow.svg';
import spinner from '../assets/Spinner.gif'

export const product_name = 'AlphaCrunch';
export const giftcard_card_details = {
    title : 'Giftcard',
    description: 'Our mission at AlphaCrunch is to offer a safe and uniquely user-friendly platform for everyday Nigerians to access the world of cryptocurrency starting with these recognised coins.',
    list:['Itunes', 'Steam', 'Google', 'Visa', 'Amazon', 'Nike'],
    image: bank_card
}

export const cryptocard_card_details = {
    title : 'Cryptocurrency',
    description: 'Our mission at AlphaCrunch is to offer a safe and uniquely user-friendly platform for everyday Nigerians to access the world of cryptocurrency starting with these recognised coins.',
    list:['Bitcoin', 'Ethereum', 'Litecoin', 'Tether', 'Dai'],
    image: phone_crypto
}

export const ratecard_card_details = {
    title : 'Rates',
    description: 'Our mission at AlphaCrunch is to offer a safe and uniquely user-friendly platform for everyday Nigerians to access the world of cryptocurrency starting with these recognised coins.',
    list:['Cheap', 'Current', 'Trusted'],
    image: bank_card
}


// transactions card details
export const trans_card_details = [
    {
        title : 'Swift Transactions',
        description: 'An awesome place to trade securely with no worries or delay.',
        image: dollar_bitcoin
    },
    {
        title : 'Best Rates',
        description: 'An awesome place to trade securely with no worries or delay.',
        image: bitcoin_grey
    },
    {
        title : 'Smooth Payments',
        description: 'An awesome place to trade securely with no worries or delay.',
        image: smooth_flow
    },
    {
        title : 'On-The-Go Solutions',
        description: 'An awesome place to trade securely with no worries or delay.',
        image: suitcase_flow
    }
]

export const GIFTCARDS = [
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
    {name : '', picture_url : spinner },
]



// eslint-disable-next-line
export const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
export const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");