import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {IMAGES} from '../constant/theme';
import FoodSlider from '../elements/FoodSlider';

const orderTabel = [
    {title:"Farm Ville Pizza", price:"12.00", total:"12.00"}, 
    {title:"Cheese Burst Sandwich", price:"8.00", total:"8.00"}, 
    {title:"White Source Pasta", price:"10.00", total:"10.00"}, 
    {title:"Veg Cheese Burger", price:"6.50", total:"6.50"}, 
];

const cardBlog = [
    {image: IMAGES.Dish1, title: 'Cheese Burger'}, 
    {image: IMAGES.Dish2, title: 'French fries'}, 
    {image: IMAGES.Dish3, title: 'Veg Pizza'}, 
    {image: IMAGES.Dish4, title: 'Cheese Pizza'}, 
    {image: IMAGES.Dish5, title: 'Veg Sandwich'}, 
    {image: IMAGES.Dish6, title: 'French fries'}, 
    {image: IMAGES.Dish7, title: 'French fries'}, 
    {image: IMAGES.Dish8, title: 'Veg Sandwich'}, 
    {image: IMAGES.Dish1, title: 'French fries'}, 
    {image: IMAGES.Dish2, title: 'Veg Burger'}, 
    {image: IMAGES.Dish3, title: 'Onion Pizza'}, 
    {image: IMAGES.Dish4, title: 'Cheese Pizza'}, 
];

const Pos = () =>{      
    function addOrder() {
        setTimeout(()=>{
            const homecontent = document.getElementById('home-counter');     
            const  ordercontent = document.getElementById('add-order-content');            
            if(ordercontent.classList.contains('d-none')){                
                ordercontent.classList.remove('d-none')
                homecontent.classList.add('d-none');                
            }else{
                homecontent.classList.remove('d-none');
                ordercontent.classList.add('d-none');                
            }
        },200);
    }
    function placeOrderHandle() {
        setTimeout(()=>{
            const placeorder = document.getElementById('place-order');
            const homecontent = document.getElementById('home-counter'); 
            const  ordercontent = document.getElementById('add-order-content');
            if(placeorder.classList.contains('d-none')){
                placeorder.classList.remove('d-none');
                placeorder.classList.remove('d-block');
                homecontent.classList.add('d-none');                
                ordercontent.classList.add('d-none');               
            }else{
                placeorder.classList.add('d-none');                
                ordercontent.classList.remove('d-none');
                ordercontent.classList.add('d-block');                
            }
           
        },300);
    }
    return(
        <>
           
              
                <div className="content-wrapper">
                    {/* <!-- row --> */}
                    <div className="listcontent-area">
                        <aside className="cart-area  dz-scroll" id="cart_area">
                            <div className="" >
                                <div id="home-counter"
                                    className="h-100"
                                    //className={`h-100 ${addTable ? 'd-block' : 'd-none'}`}
                                >
                                    <div className="card">
                                        <div className="card-body">
                                            <img src={IMAGES.Counter} className="img-fluid mb-5" alt="" />
                                            <h3 className="title mb-4">Your Order in Progress Check Order</h3>
                                            <p className="mb-sm-5 mb-3">Click on any item or Add Order Button to create order</p>
                                            <Link to={"#"} id="add-order" className="btn btn-warning btn-rounded me-3"
                                                // onClick={()=>setAddTable(!addTable)}
                                                onClick={()=>addOrder()}
                                            >Add Order</Link>{" "}
                                            <Link to={"/front-orders_status"} className="btn btn-warning light btn-rounded">Order Status</Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="h-100 d-none"
                                    id="add-order-content"                                     
                                >
                                    <div className="card rounded-0">
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table text-black">
                                                    <thead>
                                                        <tr>
                                                            <th>ITEM</th>
                                                            <th>PRICE</th>
                                                            <th></th>
                                                            <th>TOTAL($)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {orderTabel.map((item, ind)=>(
                                                            <tr key={ind}>
                                                                <td><span className="font-w500">{item.title}</span></td>
                                                                <td>{item.price}</td>
                                                                <td>
                                                                    <div className="quantity btn-quantity style-1">
                                                                        {/* <input id="demo_vertical2" type="text" value="1" name="demo_vertical2"/> */}
                                                                    </div>
                                                                </td>
                                                                <td>{item.total}</td>
                                                            </tr>
                                                        ))}                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-order-footer">
                                        <div className="amount-details">
                                            <h5 className="d-flex text-right mb-3">
                                                <span className="text">Sub total </span>
                                                <span className="me-0 ms-auto">43.00</span>
                                            </h5>
                                            <h5 className="d-flex text-right mb-3">
                                                <span className="text">Tax</span>
                                                <span className="me-0 ms-auto"> 3.00</span>
                                            </h5>
                                            <h5 className="d-flex text-right mb-3">
                                                <span className="text">Other Charge</span>
                                                <span className="me-0 ms-auto">0.00</span>
                                            </h5>
                                        </div>
                                        <div className="amount-payble">
                                            <h5 className="d-flex text-right mb-0">
                                                <span className="text">Amount to Pay</span>
                                                <span className="me-0 ms-auto">46.00</span>
                                            </h5>
                                        </div>

                                        <div className="btn_box">
                                            <div className="row no-gutter mx-0">
                                                <Link to={"#"} id="home-counter-tab" className="btn btn-danger btn-block col-6 m-0 rounded-0"
                                                   // onClick={()=>setAddTable(!addTable)}
                                                   onClick={()=>addOrder()}

                                                >Cancel</Link>
                                                <Link to={"#"} id="place-order-tab" className="btn btn-primary btn-block col-6 m-0 rounded-0"
                                                   // onClick={()=>commanHandle()}
                                                   onClick={()=>placeOrderHandle()}
                                                >Place Order</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div 
                                    className='h-100  d-none'
                                    //className={`h-100 ${placeOrder ? 'd-none' : 'd-block'}`}
                                    id="place-order"                                 
                                >
                                    <div className="card rounded-0">
                                        <div className="card-body">
                                            <form>
                                                <h4 className="mb-4">Amount to Pay <strong> $46.00 </strong></h4>
                                                <div className="form-group mb-4 pb-2">
                                                    <label className="font-w600">Select Payment Method</label>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="custom-control custom-radio">
                                                                <input checked="" type="radio" id="cash" name="PaymentMethod" className="custom-control-input" />
                                                                <label className="custom-control-label" for="cash"><span className="ms-2">Cash</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="card" name="PaymentMethod" className="custom-control-input" />
                                                                <label className="custom-control-label" for="card"><span className="ms-2">Card</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-4 pb-2">
                                                    <label className="font-w600">Order type</label>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="custom-control custom-radio">
                                                                <input checked="" type="radio" id="takeaway" name="OrderType" className="custom-control-input" />
                                                                <label className="custom-control-label" for="takeaway"><span className="ms-2">Takeaway</span></label>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio" id="dine-in" name="OrderType" className="custom-control-input" />
                                                                <label className="custom-control-label" for="dine-in"><span className="ms-2">Dine-in</span></label>
                                                            </div>
                                                        </div>

                                                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                                            <div className="select_box style-1 w-100 d-flex">
                                                                <select className="default-select">
                                                                    <option>Select Table</option>
                                                                    <option>Table No 01</option>
                                                                    <option>Table No 02</option>
                                                                    <option>Table No 03</option>
                                                                    <option>Table No 04</option>
                                                                    <option>Table No 05</option>
                                                                    <option>Table No 06</option>
                                                                    <option>Table No 07</option>
                                                                    <option>Table No 08</option>
                                                                    <option>Table No 09</option>
                                                                    <option>Table No 10</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="font-w600">Customer Info (Optional)</label>
                                                    <input type="text" className="form-control solid" placeholder="Enter Full Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control solid" placeholder="Enter Phone Number" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card-order-footer">
                                        <div className="btn_box">
                                            <div className="row no-gutter mx-0">
                                                <Link to={"#"} id="place-order-cancel" className="btn btn-danger btn-block col-6 m-0 rounded-0"
                                                    onClick={()=>placeOrderHandle()}
                                                >Cancel</Link>
                                                <Link to={"#"} className="btn btn-primary btn-block col-6 m-0 rounded-0">Submit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </aside>   
                        <div className="row">
					        <div className="col-xl-12 overflow-hidden">
                                <FoodSlider />
                            </div>
                            <div className="col-xl-12">
                                <div className="input-group search-area style-1 mb-4">
                                    <input type="text" className="form-control" placeholder="Search here..." />
                                    <div className="input-group-append">
                                        <button className=" btn btn-primary btn-rounded">Search<i className="flaticon-381-search-2 scale3 ms-3"></i></button>
                                    </div>
                                </div>
                                <div className="row">
                                    {cardBlog.map((item, ind)=>(
                                        <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-12 col-sm-6" key={ind}>
                                            <div className="card item-card">
                                                <div className="card-body p-0">
                                                    <img src={item.image} className="img-fluid" alt="" />
                                                    <div className="info">
                                                        <h5 className="name">{item.title}</h5>
                                                        <h6 className="mb-0 price"><img src={IMAGES.Veg} alt="" />$6.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>

                             </div>   
                        </div>
                    </div>
                </div>

            {/* </div> */}
        </>
    )
}
export default Pos;