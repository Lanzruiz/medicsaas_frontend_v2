import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constant/theme';

const FrontLogin = () => {
    const Nav = useNavigate();
    const formSubmit = (e) =>{
        e.preventDefault();
        Nav("/front-dashboard")
    }
    return (
        <>
            <div className="authincation front-end h-100">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-12 h-100 d-flex align-items-center">
                            <div className="authincation-content style-1">
                                <div className="row h-100">
                                    <div className="col-md-6 h-100">
                                        <div className="img-bx">
                                            <img src={IMAGES.login} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="auth-form">
                                            <h4 className="main-title">Sign in</h4>
                                            <form onSubmit={(e)=>formSubmit(e)}>
                                                <div className="form-group mb-3 pb-3">
                                                    <label className="font-w600">Phone Number</label>
                                                    <input type="text" className="form-control solid" placeholder="Enter Phone No." />
                                                </div>
                                                <div className="form-group mb-3 pb-3">
                                                    <label className="font-w600">OTP send on above number</label>
                                                    <input type="number" className="form-control solid" placeholder="Enter OTP" />
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary btn-block rounded">Sign Me In</button>
                                                </div>
                                            </form>
                                            <div className="new-account mt-3">
                                                <p>Don't have an account? <Link to={"/page-register"} className="text-primary">Sign up</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrontLogin;