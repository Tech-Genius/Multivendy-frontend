import { Link } from 'react-router-dom'
import './css/VendorDashboard.css'
import vendor from './assets/vendor.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";

function VendorDashboard() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (

        <div className="vendor_dashboard">
            <div className="sm_navigation">
                <HiBars3BottomRight onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }} className='open_v_sidebar' tabIndex={0} />
            </div>
            <div className="vendor_inner">
                <div className={isNavExpanded ? 'vendor_sidebar_sm' : "vendor_sidebar"}>

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

                <div className="right_bar">
                    ff
                </div>
            </div>

        </div>
    )
}
export default VendorDashboard