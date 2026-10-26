import React, {useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import { SVGICON } from '../constant/theme';


const tableDataBlog = [
    {title:"Tommy Hank"},
    {title:"Emilia Johnson"},
    {title:"Mark Steven"},
    {title:"Cindy Stark"},
    {title:"David Lee"},
    {title:"Franklin Mc. Good"},
    {title:"James Rodriguez"},
    
];

const FrontWallet = () => {
    const [data, setData] = useState(
		document.querySelectorAll("#example7_wrapper tbody tr")
	);
	const sort = 7;
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
    useEffect(() => {
      setData(document.querySelectorAll("#example7_wrapper tbody tr"));      
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
                    <div className="form-head dashboard-head d-md-flex flex-wrap d-block mb-5 align-items-center">
                        <h2 className="dashboard-title me-4">Wallet Balance<span className="text-success ms-4">$987.50</span></h2>
                        <Link to={"#"} className="btn btn-success btn-rounded me-auto mb-mb-0 mb-3 text-white d-inline-block">Send To Bank</Link>
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
                                                <th>ORDER NUM</th>
                                                <th>NAME</th>
                                                <th>AMOUNT</th>
                                                <th>ITEMS</th>
                                                <th>TYPE</th>
                                                <th>UPDATED ON</th>
                                                <th className="text-end">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableDataBlog.map((data, ind)=>(
                                                <tr key={ind}>
                                                   <td>CA54489</td>
                                                    <td><strong>{data.title}</strong></td>
                                                    <td>$120.00</td>
                                                    <td><span className="text-primary">2</span></td>
                                                    <td>Dine-in</td>
                                                    <td>12 June 2020 12:30 pm</td>
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
                                                to="/front-wallet"
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
                                                        to="/front-wallet"
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
                                                to="/front-wallet"
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

export default FrontWallet;