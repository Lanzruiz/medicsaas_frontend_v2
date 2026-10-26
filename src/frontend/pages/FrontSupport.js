import React from 'react';
import {Link} from 'react-router-dom';
import { IMAGES } from '../constant/theme';

const FrontSupport = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-fluid">                                       
                    <div className="form-head dashboard-head d-md-flex d-block mb-5 align-items-start">
                        <h2 className="dashboard-title">Support</h2>
                    </div>
                    
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img src={IMAGES.Support} alt="support" className="img-fluid" />
                        </div>
                        <div className="col-lg-7">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-black main-title">Write us your query</h2>
                                    <p>We'l get back to you soon</p>
                                    <form className="mt-5">
                                        <div className="form-group mb-3 pb-3">
                                            <label className="font-w600">Phone Number</label>
                                            <input type="text" className="form-control solid" placeholder="" required="" value="+1 123 456 7891" />
                                        </div>
                                        <div className="form-group mb-3 pb-3">
                                            <label className="font-w600">Your Message</label>
                                            <textarea rows="5" className="form-control solid py-3" placeholder="Write your message"></textarea>
                                        </div>
                                        <Link to={"#"} className="btn btn-primary btn-rounded">submit</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default FrontSupport;