import React from 'react';
import { IMAGES } from '../constant/theme';

const FrontTermsConditions = () => {
    return (
        <>
            <div className="content-wrapper">
                <div className="container-fluid">                    
                    <div className="form-head dashboard-head d-md-flex d-block mb-5 align-items-start">
                        <h2 className="dashboard-title">Terms & Conditions</h2>
                    </div>                    
                    <div className="row">
                        <div className="col-lg-5">
                            <img src={IMAGES.Terms} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-7">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-black main-title mb-3">Terms of use</h2>
                                    <p className="text-black mb-5">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                    </p>
                                    <h2 className="text-black main-title mb-3">Company Policy</h2>
                                    <p className="text-black mb-4">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                    </p>
                                    <p className="text-black mb-4">
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                    </p>
                                    <p className="text-black mb-4">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <p className="text-black mb-4">
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    <p className="text-black mb-4">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <p className="text-black">
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrontTermsConditions;