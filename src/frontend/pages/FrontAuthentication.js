import React from 'react';
import {Link} from 'react-router-dom';

const cardDataBlog = [
    {
        title: "KITCHEN APP",
        content : [
            { number:"+91 123 874 489"},
            { number:"+91 123 874 489"},
        ]
    },
    {
        title: "eMENU APP",
        content : [
            { number:"+91 123 874 489"},
            { number:"+91 123 874 489"},
            { number:"+91 123 874 489"},
        ]
    },
    {
        title: "DESK APP",
        content : [
           { number:"+91 123 874 489"},
           { number:"+91 123 874 489"},
           { number:"+91 123 874 489"},
        ]
    }
];
const cardDataBlog2 = [
    {
        title: "KIOSK APP",
        content : [
            { number:"+91 123 874 489"},
            { number:"+91 123 874 489"},
            { number:"+91 123 874 489"},
        ]
    },
    {
        title: "REVIEW APP",
        content : [
            { number:"+91 123 874 489"},
            { number:"+91 123 874 489"},
        ]
    },
   
];



const FrontAuthentication = (props) => {
    // const [refreshToggle, setRefreshToggle] = useState(false);
    // const [datas, setDatas] = useState(cardDataBlog);
    // const hendelClick = (index) => {
    //     // alert(1);
    //     setRefreshToggle(true);
    //     setTimeout(() => {
    //       setDatas([
    //         ...datas,
    //         datas[Math.floor(Math.random() * Math.floor(datas.length - 1))],
    //       ]);
    //       setRefreshToggle(false);
    //     }, 1000);
    // };
    const datas = cardDataBlog;
    const handleAdd = (index) => {
        const items = datas;
        cardDataBlog[index].content.push(['number','']);
        //setDatas([...items, `item-${items.length}`]);
    };
    
    const handleAdd2 = (index) => {
        cardDataBlog2[index].content.push(['number','']);
    };
    return (
        <>
            <div className="content-wrapper">
            {/* <!-- row --> */}
                <div className="container-fluid">
                    <div className="form-head dashboard-head d-md-flex d-block mb-5 align-items-start">
                        <h2 className="dashboard-title">Authentication</h2>                        
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                {datas && datas.map((item, index)=>(
                                    <div className="col-xl-12" key={index}>
                                        <div className="card">
                                            <div className="card-header border-0">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="card-body py-0 loadmore-content" id="authenticationNumContent">
                                                {item.content && item.content.map((data, ind)=>{
                                                    return(
                                                        <div className="form-group" key={ind}>
                                                            <input type="text" className="form-control solid" placeholder="" value={data.number}/>
                                                        </div>
                                                    )
                                                })}
                                                                                        
                                            </div>
                                            <div className="card-footer border-0">
                                                <Link to={"#"} 
                                                    className="btn-link dz-load-more" id="authenticationNum"
                                                    // onClick={() => hendelClick(index)}
                                                    onClick={() => handleAdd(index)}
                                                >
                                                    +Add More
                                                    {/* {refreshToggle && <i className="fa fa-refresh"></i>} */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {cardDataBlog2.map((item, index)=>(
                                    <div className="col-xl-12" key={index}>
                                        <div className="card">
                                            <div className="card-header border-0">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div className="card-body py-0 loadmore-content" id="authenticationNumContent">
                                                {item.content && item.content.map((data, ind)=>{
                                                    return(
                                                        <div className="form-group" key={ind}>
                                                            <input type="text" className="form-control solid" placeholder="" value={data.number} />
                                                        </div>
                                                    )
                                                })}
                                                                                        
                                            </div>
                                            <div className="card-footer border-0">
                                                <Link to={"#"} className="btn-link dz-load-more" id="authenticationNum"
                                                  onClick={()=>handleAdd2(index)}
                                                >+Add More 
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-xl-12">	
                                    <Link to={"#"} className="btn btn-primary">Save Changes</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrontAuthentication;