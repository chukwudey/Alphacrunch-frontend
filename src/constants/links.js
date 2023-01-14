export const interlinks ={
    signin_link: '/signin',
    signup_link: '/signup',
    dashboad: '/:id/dashboard'
}

const BASE_URL = 'https://aphacrunch-api.onrender.com';

// eslint-disable-next-line
export const GET_USERS = `${BASE_URL}/user/users`;
// eslint-disable-next-line
export const LOGIN_URL = `${BASE_URL}/auth/login`;
// eslint-disable-next-line
export const SIGNUP_URL = `${BASE_URL}/auth/signup`;
// eslint-disable-next-line
export const CONFIRM_EMAIL_URL = `${BASE_URL}/auth/confirm-email`;
// eslint-disable-next-line
export const REQUEST_PASSWORD_CHANGE_URL = `${BASE_URL}/auth/request-password-change`;
// eslint-disable-next-line
export const PASSWORD_RESET_URL = `${BASE_URL}/auth/reset-password`;
