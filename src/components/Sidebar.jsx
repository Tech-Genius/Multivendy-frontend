import { Component } from "react";
import './css/Sidebar.css'
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { FiUserMinus, FiUserPlus} from "react-icons/fi";
import { BsBookmarkHeart } from "react-icons/bs";
function Sidebar() {

    const vendorLoginStatus = localStorage.getItem('vendorLoginStatus')
    const buyerLoginStatus = localStorage.getItem('buyerLoginStatus')
    var user = JSON.parse(localStorage.getItem('user'))



    return (

        <div className="user_sidebar">
            <div className="user_sidebar_links">

                <div className="user_sidebar_link">
                    <Link to={'/'} className="link_out">  <IoHomeOutline className="user_sidebar_icon" />
                        <p>Home</p>
                    </Link>
                </div>

                {vendorLoginStatus != 'true' && buyerLoginStatus != 'true' &&
                    <>
                        <div className="user_sidebar_link">

                            <Link to={'/buyer-login'} className="link_out">  <IoMdLogIn className="user_sidebar_icon" />
                                <p>Login</p>
                            </Link>
                        </div>
                        <div className="user_sidebar_link">
                            <Link to={'/buyer-signup'} className="link_out">  <FiUserPlus className="user_sidebar_icon" />
                                <p>Sign Up </p>
                            </Link>
                        </div>
                    </>
                }


                {vendorLoginStatus == 'true' &&
                    <>
                        <div className="user_sidebar_link">

                            <Link to={'/vendor-dashboard'} className="link_out">  <IoMdLogIn className="user_sidebar_icon" />
                                <p>Dashboard</p>
                            </Link>
                        </div>
                        <div className="user_sidebar_link">
                            <Link to={'/vendor-logout'} className="link_out">  <FiUserMinus className="user_sidebar_icon" />
                                <p>Logout</p>
                            </Link>
                        </div>
                    </>
                }



                {buyerLoginStatus == 'true' &&
                    <>
                        <div className="user_sidebar_link">

                            <Link className="link_out">  <IoMdLogIn className="user_sidebar_icon" />
                                <p>Profile</p>
                            </Link>
                        </div>
                        <div className="user_sidebar_link">
                            <Link to={'/buyer-logout'} className="link_out">  <FiUserMinus className="user_sidebar_icon" />
                                <p>Logout</p>
                            </Link>
                        </div>
                    </>
                }


                <div className="user_sidebar_link">
                    <Link className="link_out">  <BsBookmarkHeart className="user_sidebar_icon" />
                        <p>Wishlist</p>
                    </Link>
                </div>

            </div>

        </div>



    )


}

export default Sidebar