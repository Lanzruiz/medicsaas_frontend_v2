import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import { SVGICON } from '../constant/theme';


const tableDataBlog = [
    {title:"Cheese Burger"},
    {title:"Cheese Sandwich"},
    {title:"Cheese Sandwich"},
    {title:"French Fries"},
    {title:"Masala Momos "},
    {title:"Pizza Slice"},
    {title:"Veg Burger"},
    {title:"Cheese Burger"},
    
];

const FrontFoodItems = () => {
    const [data, setData] = useState(
		document.querySelectorAll("#example7_wrapper tbody tr")
	);
	const sort = 8;
	const activePag = useRef(0);
	const [test, settest] = useState(0);

	// Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   // use effect
    useEffect(() => {
      setData(document.querySelectorAll("#example7_wrapper tbody tr"));
      //chackboxFun();
	}, [test]);

  
   // Active pagginarion
    activePag.current === 0 && chageData(0, sort);
   // paggination
    let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};

    return (
        <>
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="form-head dashboard-head d-md-flex d-block mb-5 align-items-start">
                        <h2 className="dashboard-title me-auto">Food Items<Link to={"#"} data-toggle="modal" data-target="#AddNewCustomer" className="btn btn-success btn-rounded ms-4 text-white d-inline-block">Add New</Link></h2>
                        <div className="input-group search-area">
                            <input type="text" className="form-control" placeholder="Search here..." />
                            <span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <div  id="example7_wrapper" className="dataTables_wrapper no-footer">  
                                    <table id="example5" className="display mb-4 w-100 defaultTable dataTablesCard dataTable no-footer" style={{minWidth:"845px"}}>
                                        <thead>
                                            <tr>
                                                <th>ITEM NAME</th>
                                                <th>CATEGORY</th>
                                                <th>ADD-ONS</th>
                                                <th>PRICE</th>
                                                <th>SALES</th>
                                                <th className="text-end">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableDataBlog.map((data, ind)=>(
                                                <tr key={ind}>
                                                    <td><strong>{data.title}</strong></td>
                                                    <td>Fast Food</td>
                                                    <td>3 <i className="fa fa-list ms-1"></i></td>
                                                    <td>$12.00</td>
                                                    <td>112</td>
                                                    <td>
                                                        <div className="action-buttons d-flex justify-content-end">                                                            
                                                            <Link to={"#"} className="btn btn-primary light me-2">
                                                                {SVGICON.Edit}
                                                            </Link>
                                                            <Link to={"#"} className="btn btn-danger light">
                                                                {SVGICON.Delete}
                                                            </Link>
                                                        </div>
                                                    </td>												
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                    <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                                        <div className="dataTables_info">
                                            Showing {activePag.current * sort + 1} to{" "}
                                            {data.length > (activePag.current + 1) * sort
                                                ? (activePag.current + 1) * sort
                                                : data.length}{" "}
                                            of {data.length} entries
                                        </div>
                                        <div
                                            className="dataTables_paginate paging_simple_numbers mb-0"
                                            id="application-tbl1_paginate"
                                        >
                                            <Link
                                                className="paginate_button previous "
                                                to="/front-food-items"
                                                onClick={() =>
                                                    activePag.current > 0 &&
                                                    onClick(activePag.current - 1)
                                                }
                                            >
                                                Previous
                                            </Link>
                                            <span>
                                                {paggination.map((number, i) => (
                                                    <Link
                                                        key={i}
                                                        to="/front-food-items"
                                                        className={`paginate_button  ${
                                                            activePag.current === i ? "current" : ""
                                                        } `}
                                                        onClick={() => onClick(i)}
                                                    >
                                                        {number}
                                                    </Link>
                                                ))}
                                            </span>

                                            <Link
                                                className="paginate_button next"
                                                to="/front-food-items"
                                                onClick={() =>
                                                    activePag.current + 1 < paggination.length &&
                                                    onClick(activePag.current + 1)
                                                }
                                            >
                                                Next
                                            </Link>
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

export default FrontFoodItems;