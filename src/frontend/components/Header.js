import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import {IMAGES, SVGICON} from '../constant/theme';


export function  NavMenuToggle(){
	setTimeout(()=>{	
		let sidebarBlog = document.querySelector("#frontSidebar");
        let sidebarMenu = document.getElementById('SidebarMenu');
		if(sidebarBlog.classList.contains('active')){
			sidebarBlog.classList.remove("active");
            sidebarMenu.classList.remove("open");
		}else{
			sidebarBlog.classList.add("active");
			sidebarMenu.classList.add("open");
		}
	},200);
}

const headerMenu = [
    {title: "Pos", to:"/", icon: SVGICON.Notes },
    {title: "Transaction", to:"/front-transactions", icon:  SVGICON.Transaction },
    {title: "Booking", to:"/front-booking", icon:  SVGICON.Booking},
    {title: "Orders Status", to:"/front-orders_status", icon:  SVGICON.Order },
    {title: "Check Dashboard", to:"/dashboard", icon: SVGICON.Dashboard },
];

const Header = () => {
    const [itemActive, setItemActive] = useState(headerMenu[0].to);
    //console.log(itemActive);
    //console.log('itemActive');
    
    return (
        <>
              <header className="site-header mo-left header style-1">
                {/* <!-- Main Header --> */}
                    <div className="sticky-header main-bar-wraper navbar-expand-xl">
                        <div className="main-bar clearfix ">
                            <div className="container-fluid clearfix">
                                {/* <!-- Website Logo --> */}
                                <div className="logo-header mostion logo-dark">
                                    <Link to={"/front-dashboard"}><img src={IMAGES.LogoText} alt="" /></Link>
                                </div>
                                {/* <!-- Nav Toggle Button --> */}
                                <button className="navbar-toggler collapsed navicon justify-content-end" type="button"
                                    
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                {/* <!-- Extra Nav --> */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <Link to={"#"} className="profile-box">
                                            <div className="header-info">
                                                <span>Robertos Jr.</span>
                                                <small>Super Admin</small>
                                            </div>
                                            <div className="img-bx">
                                                <img src={IMAGES.Avatar1} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div 
                                    className={`sidebar-menu`}                                    
                                    onClick={()=>{                                        
                                        NavMenuToggle();
                                    }}
                                >
                                    <div
                                        className={`menu-btn navicon`}
                                        id="SidebarMenu"
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                
                                <div className="header-nav navbar-collapse collapse" id="navbarNavDropdown">
                                    <div className="logo-header">
                                        <img src={IMAGES.Avatar1} alt="" />
                                    </div>
                                    <ul className="nav navbar-nav navbar navbar-left">	
                                        {headerMenu.map((data, ind)=>(
                                            <li className={`${itemActive === data.to ? 'active' : '' }`} key={ind}>
                                                <Link to={data.to}
                                                    onClick={()=>setItemActive(data.to)}
                                                >
                                                    {data.icon}
                                                    {" "}{data.title}
                                                </Link>
                                            </li>
                                        ))}                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Main Header End --> */}
                </header>  
        </>
    );
};

export default Header;