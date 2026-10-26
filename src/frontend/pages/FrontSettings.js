import React, { useState } from 'react';
// import { SketchPicker } from 'react-color';

import { IMAGES } from '../constant/theme';

const inputDataBlog = [
    {title: "Restaurant Name" , textvalue: "John doe"},
    {title: "Restaurant Phone Number" , textvalue: "+1 133 458 2578"},
    {title: "Restaurant Email Address" , textvalue: "example@gmail.com"},
];
const inputDataBlog2 = [
    {title: "Account Number" , textvalue: "1234 5678 9120 1234"},
    {title: "Account Name" , textvalue: "Bank of Usa"},
    {title: "Bank Code" , textvalue: "685959" },
];

const FrontSettings = () => {
    const [colorChange, setColorChange] = useState(null);
    return (
        <>
             
            <div className="content-wrapper">
                {/* <!-- row --> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-black main-title mb-sm-4 mb-0 pb-2">Settings</h2>
                                    <form className="mb-5">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-upload">
                                                <div className="avatar-edit">
                                                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                    <label for="imageUpload"></label>
                                                </div>
                                                <div className="avatar-preview">
                                                    <div id="imagePreview" style={{backgroundImage: "url("+ IMAGES.Avatar1 + ")"}}>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fs-13 ms-sm-5 ms-3">Logo Should have in <br/>1:1 ratio for better viewing<br/> experience.</span>
                                        </div>
                                        {inputDataBlog.map((item, ind)=>(
                                            <div className="form-group mb-3 pb-3" key={ind}>
                                                <label className="font-w600">{item.title}</label>
                                                <input type="text" className="form-control solid" value={item.textvalue} />
                                            </div>
                                        ))}                                        
                                    </form>
                                    <hr/>
                                    <h2 className="text-black main-title mb-4 pb-2 mt-4">Bank Details</h2>
                                    <form className="mb-5">
                                        {inputDataBlog2.map((item, ind)=>(
                                            <div className="form-group mb-3 pb-3">
                                                <label className="font-w600">{item.title}</label>
                                                <input type="text" className="form-control solid" value={item.textvalue}/>
                                            </div>
                                        ))}                                       
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="text-black main-title mb-4 pb-2">Restaurant Timings</h2>
                                            <form>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="form-group">
                                                            <label className="font-w600">Opening Time</label>
                                                            <input className="form-control solid" type="time" id="opening-time" value="08:56" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="form-group">
                                                            <label className="font-w600">Closing Time</label>
                                                            <input className="form-control solid" type="time" id="closing-time" value="10:56" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="text-black main-title mb-4 pb-2">Restaurant Location</h2>
                                            <div className="map-box">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14448.885880295826!2d75.81852004999999!3d25.128202299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1626342496073!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="text-black main-title mb-4 pb-2">Order Color Setting</h2>
                                            <form>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            {/* <input type="text" className="as_colorpicker form-control" value="#2f4cdd" /> */}
                                                            {/* <SketchPicker /> */}
                                                            <input
                                                                type="color"
                                                                className="as_colorpicker form-control"
                                                                value={colorChange}
                                                                onChange={(e) => setColorChange(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input className="form-control solid" type="time" value="10:56" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="color" className="as_colorpicker form-control" value="#ff6d4d" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input className="form-control solid" type="time" value="10:56" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="color" className="as_colorpicker form-control" value="#f72b50" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input className="form-control solid" type="time" value="10:56" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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

export default FrontSettings;