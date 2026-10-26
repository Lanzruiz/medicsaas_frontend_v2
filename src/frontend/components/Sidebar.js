import React from 'react-router-dom';
import {Link} from 'react-router-dom';
import { SVGICON} from '../constant/theme';

import {NavMenuToggle} from './Header';

const MenuItems = [
    {title: "Dashboard", to:"/front-dashboard", icon: SVGICON.Dashboard},
    {title: "People", to:"/front-people", icon: SVGICON.People },
    {title: "Wallet", to:"/front-wallet", icon: SVGICON.Wallet},
    {title: "Food Items", to:"/front-food-items", icon: SVGICON.FoodItem },
    {title: "Reviews", to:"/front-reviews", icon: SVGICON.Review},
    {title: "Authentication", to:"/front-authentication", icon: SVGICON.Authent },
    {title: "Settings", to:"/front-setting", icon: SVGICON.Setting },
    {title: "Support", to:"/front-support", icon: SVGICON.Support},
    {title: "Terms & Conditions", to:"/front-terms_conditions", icon: SVGICON.Terms },
];

const Sidebar = () => {
    return(
        <>
            <div className="menu-sidebar" id="frontSidebar">
                <div className="contact-box">
                    <ul className="home-nav">
                        <li className="nav-item active">
                            <Link to={"/"}>
                                {SVGICON.Notes}
                                {" "}POS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/front-transactions"}>
                                {SVGICON.Transaction}
                                {" "}Transaction
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/front-booking"}>
                            {SVGICON.Booking}
                            {" "}Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/front-orders_status"}>
                                {SVGICON.Order}
                                {" "}Orders Status
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        {MenuItems.map((data, index)=>(
                            <li className="nav-item" key={index}>
                                <Link to={data.to} className="nav-link"
                                    onClick={()=>NavMenuToggle()}
                                >
                                    {data.icon}
                                    {" "}{data.title}
                                </Link>
                            </li>
                        ))}                        
                    </ul>
                </div>	
            </div>
            <div className="menu-close" 
                onClick={()=>{                    
                    NavMenuToggle();
                }}
            ></div>
        </>
    )
}
export default Sidebar;