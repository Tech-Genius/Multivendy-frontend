import { useState } from 'react'
import React, { Component } from 'react'
import reactLogo from './assets/react.svg';
import landing from './assets/landing3.png';
import delivery from './assets/delivery.png';
import vendor from './assets/vendor.png';
import './css/Home.css'
import "bootstrap/dist/css/bootstrap.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        AOS.init();
    }
    
    render() {


        return (
            <>

                <div className="home">

                    <div className="background">
                        <div className="background_inner">
                            <div className="box_wrapper">
                                <div className="box" id='text' data-aos="fade-right" data-aos-duration="1200">
                                    <h3>Selling And <span>Shopping </span><br /> Has Never Been <br />  <span>Easier!</span></h3>
                                    <p>Shop anything you want today, with just few clicks</p>
                                    <Link to='store'><button>View Store <i className="fa fa-cart-plus"></i></button></Link>

                                </div>
                                <div className="box" id='img' data-aos="fade-left" data-aos-duration="1200">
                                    <img src={landing} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="main_content" id='buyer'>
                        <div className="buyer_heading">
                            <h3>For <span>Buyers</span></h3>
                        </div>
                        <div className="main_content_inner">
                            <div className="main_box" data-aos="fade-right" data-aos-duration="1200">
                                <img src={delivery} alt="" />
                            </div>

                            <div className="main_box" id='text' data-aos="fade-left" data-aos-duration="1200">
                                <h3>It Simple, Create <span>A Buyer</span> <br />  Account, <span>Make An</span> <br />  Order, Recieve <br /> <span>Order!</span></h3>
                                <div className="main_buttons">
                                    <Link to='buyer-signup'><button>Sign Up</button></Link>
                                    <Link><button id='sign_in'>Sign In</button></Link>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="main_content" id='seller'>
                        <div className="vendor_heading">
                            <h3>For <span>Vendors</span></h3>
                        </div>
                        <div className="main_content_inner">

                            <div className="main_box" id='text' data-aos="fade-right" data-aos-duration="1200">
                                <h3>Sell  And <span>Manage Your </span> <br /> Products <span>In A</span> <br />  More Smarter <br /> <span>Way!</span> </h3>
                                <div className="main_buttons">
                                <Link to='vendor-signup'><button>Sign Up</button></Link>
                                <Link><button id='sign_in'>Sign In</button></Link>
                                </div>
                            </div>


                            <div className="main_box" data-aos="fade-left" data-aos-duration="1200" id='img'>
                                <img src={vendor} alt="" />
                            </div>



                        </div>

                    </div>

                </div>
           

            </>
        )

    }
}

export default Home