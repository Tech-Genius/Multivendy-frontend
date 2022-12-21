import { Link } from 'react-router-dom'
import './css/VendorDashboardSidebar.css'
import vendor from './assets/vendor.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
// import { useForceUpdate } from 'react-force-update';

function VendorDashboardSidebar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    // const forceUpdate = useForceUpdate();

    // const forceUpdateHandler = () => {
    //   forceUpdate();
    // };

    return (

        <div className="vendor_dashboard_sidebar">
            {/* <div className="sm_navigation">
                <HiBars3BottomRight onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }} className='open_v_sidebar' tabIndex={0} />
            </div> */}
            <div className="vendor_sidebar_inner">
                {/* <div className={isNavExpanded ? 'vendor_sidebar_sm' : "vendor_sidebar"}> */}
                <div className='vendor_sidebar'>

                    <div className="user">
                        <div className="user_image">
                            <img src={vendor} alt="" />
                        </div>
                        <h3>Welcome <span>Vendor</span></h3>
                    </div>

                    <div className="links">
                        <h3><Link to={'/store'}>Store<BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>Add Product <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>My Products <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>Orders <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>My Top Buyers <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>Edit Profile <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/vendor-logout'}>Logout <BsArrowUpRightCircle className='link-out' /></Link></h3>

                    </div>

                </div>

                <div className="vendor_bottom_bar">
                    <div className="bottom_bar_links">
                        <div className="link">
                            <HiBars3BottomRight className='link-out_sm'/>
                            <p>Store</p>
                        </div>

                        <div className="link">
                            <HiBars3BottomRight className='link-out_sm'/>
                            <p>Add Products</p>
                        </div>

                        <div className="link">
                            <HiBars3BottomRight className='link-out_sm'/>
                            <p>Orders</p>
                        </div>

                        <div className="link">
                            <HiBars3BottomRight className='link-out_sm'/>
                            <p>Top Buyers</p>
                        </div>

                        <div className="link">
                            <HiBars3BottomRight className='link-out_sm'/>
                            <p>Logout</p>
                        </div>

                    </div>
                </div>

                {/* <div className="right_bar">
                    ff
                </div> */}
            </div>

        </div>
    )
}
export default VendorDashboardSidebar