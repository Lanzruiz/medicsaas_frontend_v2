import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    Logout,
} from '../store/actions/AuthActions';

export function signUp(email, password) {
    //axios call
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        // `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        'http://localhost:5001/api/users',
        postData,
    );
}

export function login(email, password) {

     const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // const postData = {
    //     email,
    //     password,
    //     returnSecureToken: true,
    // };
    const body = JSON.stringify({ email, password });
    return axios.post(
        // `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        'http://localhost:5001/api/auth',
        body,
        config
    );
}

export function formatError(error) {
    const errorResponse = error?.response?.data ?? error;
    const message =
        errorResponse?.error?.message ??
        errorResponse?.message ??
        (typeof errorResponse?.error === 'string' ? errorResponse.error : undefined);
    const errorMessage = typeof message === 'string' ? message : undefined;

    switch (errorMessage) {
        case 'EMAIL_EXISTS':
            swal("Oops", "Email already exists", "error");
            return 'Email already exists';
        case 'EMAIL_NOT_FOUND':
            swal("Oops", "Email not found", "error", { button: "Try Again!" });
            return 'Email not found';
        case 'INVALID_PASSWORD':
            swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
            return 'Invalid Password';
        case 'USER_DISABLED':
            return 'User Disabled';

        default:
            return errorMessage || 'An unexpected error occurred. Please try again.';
    }
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        //dispatch(Logout(history));
        dispatch(Logout(navigate));
    }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
		return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(Logout(navigate));
        return;
    }
		
    dispatch(loginConfirmedAction(tokenDetails));
	
    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, navigate);
}
export function isLogin() {
    const tokenDetailsString = localStorage.getItem('userDetails');

    if (tokenDetailsString) {
        return true;
    }else{
        return false;
    }
}