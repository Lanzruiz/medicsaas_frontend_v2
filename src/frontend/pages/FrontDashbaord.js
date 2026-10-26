import React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Nav, Dropdown} from 'react-bootstrap';
import { IMAGES } from '../constant/theme';

import DounutChart from '../elements/DounutChart';
import EarningBar from '../elements/EarningBar';
import CountUp from 'react-countup';


const widgetBlog = [
    {title:"Total Menus", number:"128", image:IMAGES.FoodIcon1},
    {title:"Revenue", number:"400", image:IMAGES.FoodIcon2},
    {title:"Items Sold", number:"678", image:IMAGES.FoodIcon3},
    {title:"Total Orders", number:"130", image:IMAGES.FoodIcon4},
];

const progressBlog = [
    {image: IMAGES.FoodIcon8, title:"Dine-in", number:"92%", percent1:"602", percent2:"92%"},
    {image: IMAGES.FoodIcon9, title:"Takeaway", number:"16%", percent1:"52", percent2:"16%"},
    {image: IMAGES.FoodIcon10, title:"Online", number:"5%", percent1:"3.1k", percent2:"5%"}
];

const mediaBlog = [
    {image: IMAGES.DishPic5, title:"Italiano Pizza", price:"$12.56", item:'124 '},
    {image: IMAGES.DishPic4, title:"Cheese Momos", price:"$14.10", item:'116'},
    {image: IMAGES.DishPic3, title:"French Fries", price:"$11.04", item:'200'},
    {image: IMAGES.DishPic2, title:"Cheese Sandwich", price:"$17.60", item:'50'}
];

const FrontDashbaord = () => {
    return (
        <>
            <div className="content-wrapper">
            {/* <!-- row --> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div id="user-activity" className="card">
                                <Tab.Container defaultActiveKey="Monthly">
                                    <div className="card-header border-0 pb-0 d-sm-flex d-block">
                                        <div>
                                            <h2 className="main-title mb-1">Earnings</h2>
                                        </div>
                                        <div className="card-action card-tabs mt-3 mt-sm-0">
                                            <Nav as="ul" className="nav nav-tabs" role="tablist">
                                                <Nav.Item as="li" className="nav-item">
                                                    <Nav.Link  eventKey="Monthly">
                                                        Monthly
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li" >
                                                    <Nav.Link  eventKey="Weekly">
                                                        Weekly
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link eventKey="Today">
                                                        Today
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Tab.Content  id="myTabContent">
                                            <Tab.Pane eventKey="Monthly">
                                                <EarningBar dataActive={0} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Weekly">
                                                <EarningBar dataActive={1} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Today">
                                                <EarningBar dataActive={2} />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                        </div>   
                        <div className="col-xl-6">
                            <div className="row">
                                {widgetBlog.map((item, ind)=>{
                                    return(                                        
                                        <div className="col-sm-6" key={ind}>
                                            <div className="widget-card-1 card">
                                                <div className="card-body">
                                                    <div className="media">
                                                        <img src={item.image} alt="" className="me-4" width="80" />
                                                        <div className="media-body">
                                                            <h3 className="mb-sm-3 mb-2 text-black">
                                                                <CountUp className="counter ms-0" end={item.number} duration={5}/>
                                                            </h3>
                                                            <p className="mb-0">{item.title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                        
                                    )
                                })}

                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body">                                           
                                            <DounutChart />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header border-0 d-sm-flex d-block">
                                            <div>
                                                <h2 className="main-title text-black mb-1">Orders from</h2>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {progressBlog.map((item,index)=>(
                                                <div className="progress-bar-box" key={index}>
                                                    <div className="img-bx me-3">
                                                        <img src={item.image} alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="bar-box d-flex w-100 align-items-center">
                                                        <h3 className="text-nowrap name mb-0">{item.title}</h3>
                                                        <div className="progress" style={{height: "20px", width: "100%"}}>
                                                            <div className="progress-bar bg-warning" style={{width: item.number}}></div>
                                                        </div>
                                                        <span className="text-end percentage">{item.percent1} <span>({item.percent2})</span></span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>   
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-header border-0 d-sm-flex d-block">
                                            <div>
                                                <h2 className="main-title text-black mb-1">Top Selling items</h2>
                                            </div>
                                        </div>
                                        <div className="card-body pt-3">
                                            {mediaBlog.map((data, ind)=>(
                                                <div className="media mb-3 pb-3 items-list-2 align-items-center" key={ind}>
                                                    <Link to={"#"}><img className="img-fluid rounded me-3" width="85" src={data.image} alt="DexignZone" /></Link>
                                                    <div className="media-body col-6 px-0">
                                                        <h3 className="mt-0 mb-3 sub-title">{data.title}</h3>
                                                        <span className="font-w500 mb-3">{data.item} times</span>
                                                    </div>
                                                    <div className="media-footer align-self-center ms-auto d-block align-items-center d-sm-flex">
                                                        <h3	className="mb-0 font-w600 text-secondary">{data.price}</h3>
                                                        <Dropdown className="dropdown ms-3 ">
                                                            <Dropdown.Toggle type="button" as="div" className="btn btn-secondary sharp tp-btn-light i-false" data-toggle="dropdown">
                                                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                                <Link to={"#"} className="dropdown-item" >Edit</Link>
                                                                <Link to={"#"} className="dropdown-item" >Delete</Link>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            ))}                                        
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

export default FrontDashbaord;