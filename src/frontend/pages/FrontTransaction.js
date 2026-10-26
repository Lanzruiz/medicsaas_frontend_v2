import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import { IMAGES, SVGICON } from '../constant/theme';


const tableDataBlog = [
    {title:"Wiliam Franchi"},
    {title:"Samoch Raw"},
    {title:"Wiliam John"},
    {title:"Wiliam Franchi"},
    {title:"Samoch Raw"},
    {title:"Wiliam John"},
    {title:"Wiliam Franchi"},
    {title:"Samoch Raw"},
    {title:"Wiliam John"},
    {title:"Wiliam Franchi"},
    {title:"Samoch Raw"},
];

const FrontTransaction = () => {
    const [detailModal, setDetailModal] = useState(false);
    function OpenModal() {
        setDetailModal(true);
    }

    const [data, setData] = useState(
		document.querySelectorAll("#example6_wrapper tbody tr")
	);
	const sort = 10;
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
      setData(document.querySelectorAll("#example6_wrapper tbody tr"));
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
                        <h2 className="dashboard-title me-auto">Transaction</h2>
                        <div className="input-group search-area">
                            <input type="text" className="form-control" placeholder="Search here..." />
                            <span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2"></i></Link></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <div  id="example6_wrapper" className="dataTables_wrapper no-footer">  
                                    <table id="example5" className="display mb-4 w-100 defaultTable dataTablesCard dataTable no-footer" style={{minWidth:"845px"}}>
                                        <thead>
                                            <tr>
                                                <th>ORDER NUM</th>
                                                <th>NAME</th>
                                                <th>AMOUNT</th>
                                                <th>ITEMS</th>
                                                <th>TYPE</th>
                                                <th>PAYMENT</th>
                                                <th>UPDATED ON</th>
                                                <th className="text-end">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {tableDataBlog.map((data, ind)=>(
                                                <tr key={ind}>
                                                    <td>BA85454</td>
                                                    <td><strong>{data.title}</strong></td>
                                                    <td>$120.00</td>
                                                    <td><span className="text-primary">2</span></td>
                                                    <td>Dine-in</td>
                                                    <td>Cash</td>
                                                    <td>12 June 2020 12:30 pm</td>
                                                    <td>
                                                        <div className="action-buttons d-flex justify-content-end">
                                                            <Link to={"#"} className="btn btn-success light me-2" 
                                                                data-bs-toggle="modal" 
                                                                onClick={()=>OpenModal()}
                                                            >
                                                                {SVGICON.Eyes}
                                                            </Link>
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
                                                to="/front-transactions"
                                                onClick={() =>
                                                    activePag.current > 0 &&
                                                    onClick(activePag.current - 1)
                                                }
                                            >
                                                Previous
                                                {/* <i className="fa fa-angle-double-left" ></i>  */}
                                            </Link>
                                            <span>
                                                {paggination.map((number, i) => (
                                                    <Link
                                                        key={i}
                                                        to="/front-transactions"
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
                                                to="/front-transactions"
                                                onClick={() =>
                                                    activePag.current + 1 < paggination.length &&
                                                    onClick(activePag.current + 1)
                                                }
                                            >
                                                {/* <i className="fa fa-angle-double-right" ></i> */}
                                                Next
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    {/* Modal  */}
                    <Modal className="modal order-info-box" id="OrderInfoBox" show={detailModal} onHide={setDetailModal}>                       
                        <div className="modal-header">
                            <div>
                                <h5 className="user-name">John Doe</h5>
                                <span className="date">B00123 | 15 Jun, 11:35 am</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <ul className="order-list-wrapper">
                                <li className="list-header"><span className="sn">Q.</span>ITEMS<span>PRICE</span></li>
                                <li><span className="sn">1.</span>Onion Sandwich<span>$12.00</span></li>
                                <li><span className="sn">1.</span>Onion Sandwich<span>$12.00</span></li>
                                <li><span className="sn">1.</span>Onion Sandwich<span>$12.00</span></li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <div className="w-100">
                                <ul className="order-list-wrapper w-100">
                                    <li>Sub Total<span>$51.00</span></li>
                                    <li>Service fee<span>$3.00</span></li>
                                    <li className="list-footer">Total Paid in <strong>CASH</strong><span>$54.00</span></li>
                                </ul>
                                <div className="list-profie mt-3">
                                    <img src={IMAGES.Avatar1} className="me-3" alt="" />
                                    <div>
                                        <h4 className="name">John Anderson</h4>
                                        <span className="sub-info">Delivery partner assigned</span>
                                    </div>
                                </div>
                            </div>
                        </div>                          
                    </Modal>
                    {/* Modal  end */}
                </div>
            </div>
        </>
    );
};

export default FrontTransaction;