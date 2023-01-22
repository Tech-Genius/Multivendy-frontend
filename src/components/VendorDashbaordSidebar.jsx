import { Link } from 'react-router-dom'
import './css/VendorDashboardSidebar.css'
import vendor from './assets/vendor.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from 'react';
import { HiBars3BottomRight,  HiOutlineUser } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { FaSearch, FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { BsBoxArrowInDown, BsCartCheckFill, BsCart4, BsCartPlus, BsCartCheck } from "react-icons/bs";

function VendorDashboardSidebar() {
    const [isProfileNavExpanded, setIsProfileNavExpanded] = useState(false)
    const vendorName = localStorage.getItem('vendorName')
    console.log(vendorName)

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
                        <h3>Welcome <span>{vendorName}</span></h3>
                    </div>

                    <div className="links">
                        <h3><Link className='vendor_links' to={'/store'}>Store <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link className='vendor_links' to={'/add-product'}>Add Product <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link className='vendor_links' to={'/vendor-products'}>My Products <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link className='vendor_links' to={'/add-product'}>Orders <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link className='vendor_links' to={'/add-product'}>My Top Buyers <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link className='vendor_links' to={'/add-product'}>Edit Profile <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link className='vendor_links' to={'/vendor-logout'}>Logout <BsArrowUpRightCircle className='link-out' /></Link></h3>

                    </div>

                </div>

                <div className="vendor_bottom_bar">
                    <div className="bottom_bar_links">
                        <div className="link">
                            <Link className='vendor_sm_links' to={'/store'}>
                                <BsCart4 className='link-out_sm' />
                                <p>Store</p>
                            </Link>
                        </div>

                        <div className="link">
                            <Link to={'/add-product'} className='vendor_sm_links'>
                                <BsCartPlus className='link-out_sm' />
                                <p>Add Products</p>
                            </Link>
                        </div>

                        <div className="link">
                            <Link className='vendor_sm_links'>
                                <BsBoxArrowInDown className='link-out_sm' />
                                <p>Orders</p>
                            </Link>
                        </div>

                        <div className="link">
                            <Link to={'/vendor-products'} className='vendor_sm_links'>
                                <BsCartCheck className='link-out_sm' />
                                <p>My Products</p>
                            </Link>
                        </div>

                        <div className="link">
                            <Link className='vendor_sm_links' onClick={() => {
                    setIsProfileNavExpanded(!isProfileNavExpanded)
                }} >
                             {isProfileNavExpanded ? <HiOutlineX className='link-out_sm' /> : <HiOutlineUser className='link-out_sm' />}
                                <p>Profile</p>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className={isProfileNavExpanded ? 'vendor_profile_sm' : 'vendor_profile_lg'}>
                    <div className="user">
                        <div className="user_image">
                            <img src={vendor} alt="" />
                        </div>
                        <h3>Welcome <span>{vendorName}</span></h3>
                    </div>
                    <div className="links">
                    <h3><Link className='vendor_links' to={'/add-product'}>Edit Profile <BsArrowUpRightCircle className='link-out' /></Link></h3>
                    <h3><Link className='vendor_links' to={'/vendor-logout'}>Logout <BsArrowUpRightCircle className='link-out' /></Link></h3>

                </div>

                </div>

              
            </div>

        </div>
    )
}
export default VendorDashboardSidebar