import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function BasicCard({changeStyle, title}) {
    return(
        <>
            <div className="card-container">
                <div className="card shadow-sm">
                    <div className={`card-header text-white ${changeStyle}`}>
                        <div>
                            <h4 className="text-white">{title}</h4>
                            <span className="fs-12 op9">AB00121</span>
                        </div>
                        <h3 className="text-white">08:49</h3>
                    </div>
                    <div className="card-body">
                        <ul className="order-list">
                            <li><del><span>1</span>Momos masala</del></li>
                            <li><del><span>1</span>Bubble and squeak</del></li>
                            <li><del><span>1</span>Pease pudding</del></li>
                            <li><span>1</span>Sunday roast</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function PrimaryCard(){
    return(
        <div className="card-container">
            <div className="card  shadow-sm">
                <div className="card-header bg-primary text-white">
                    <div>
                        <h4 className="text-white">Dine-in</h4>
                        <span className="fs-12 op9">AB00121</span>
                    </div>
                    <h3 className="text-white">08:49</h3>
                </div>
                <div className="card-body">
                    <ul className="order-list">
                        <li><del><span>1</span>Chat Masala</del></li>
                        <li><span>1</span>Veg Cheese Pizza</li>
                        <li><del><span>1</span>Chat Masala</del></li>
                        <li><span>1</span>Veg Cheese Pizza</li>
                        <li><del><span>2</span>Vanila Ice Cream</del></li>
                        <li><span>1</span>Egg Faritta</li>
                        <li><del><span>1</span>Rosted Chicken<small className="d-block">Extra Cheese</small></del></li>
                        <li><del><span>1</span>Farm Ville Pizz<small className="d-block">Extra Cheese</small></del></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const FrontOrderStatus = () => {
    return (
        <>  
             <div className="content-wrapper">
                {/* <!-- row --> */}
                <div className="container-fluid bg-gray">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={
                            {
                                350: 1, 
                                591: 2,
                                750: 3, 
                                1011: 4,
                                1400: 5,
                            }
                        }
                    >
                        {/* <div className="row order-row" id="masonry"> */}
                            <Masonry 
                                columnsCount={5}
                                gutter="20px"
                            >
                        
                                <BasicCard  changeStyle="bg-danger" title="Dine-in" />
                                <PrimaryCard />
                                <BasicCard  changeStyle="bg-danger" title="Dine-in"/>
                                <PrimaryCard />
                                <PrimaryCard />
                                <BasicCard  changeStyle="bg-success" title="Delivery"/>
                                <BasicCard  changeStyle="bg-primary" title="Dine-in"/>
                                <BasicCard  changeStyle="bg-warning" title="Take Away"/>
                                <BasicCard  changeStyle="bg-danger" title="Dine-in"/>
                                <BasicCard  changeStyle="bg-danger" title="Dine-in"/>
                            </Masonry>
                        {/* </div> */}
                    </ResponsiveMasonry>
                </div>
            </div>
        </>
    );
};

export default FrontOrderStatus;