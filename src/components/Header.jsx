import './css/Header.css'
import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import refreshPage from './CategoryProducts'
import { AiOutlineMenuFold } from "react-icons/ai";


export default class Header extends Component {

   jQuerycode = () => {

      $(".open").unbind("click").click(function () {
         $(".open").hide();
         $(".close").fadeIn();
         // $(".nav_items").show();
         $(".nav_items").toggle(500, "swing");

      })


      $(".close").unbind("click").click(function () {
         $(".close").hide();
         $(".open").fadeIn();
         // $(".nav_items").show();
         $(".nav_items").toggle("slow");

      })

      $(".filters").unbind("click").click(function () {
         // $(".nav_items").show();
         $(".sidebar").toggle(500, "swing");
         $(".sidebar").css('display', 'grid')

      })

   }

   componentDidMount() {
      this.jQuerycode()
   }





   render() {
      const vendorLoginStatus = localStorage.getItem('vendorLoginStatus')
      const buyerLoginStatus = localStorage.getItem('buyerLoginStatus')

      return (
         <div className="header">
            <nav>
               <div className="logo"><Link to={''}><h3>Multivendy</h3></Link></div>
               {/* 
               <div className="search" id='search_lg_screen'>
                  <div className="search-bar">
                     <input type="search" placeholder="Search" />
                  </div>
               </div> */}

               <div className="nav_items">
                  <ul>

                     {/* <div className="search" id='search_sm_screen'>
                        <div className="search-bar">
                           <input type="search" placeholder="Search" />
                        </div>
                     </div> */}
                     <li><Link to='' className="item" onClick={refreshPage}>Home</Link></li>
                     <li><Link to='store' className="item" onClick={refreshPage}>Store</Link></li>

                     {vendorLoginStatus || buyerLoginStatus != 'true' &&
                        <>
                           <div className="dropdown">
                              <li><Link to='/' style={{ pointerEvents: "none" }} className="item dropdown" onClick={refreshPage}>Login <i className='fa fa-angle-right'></i></Link>

                                 <ul className="dropdown_items">
                                    <li><Link to='buyer-login' className="item" onClick={refreshPage}>Buyer</Link></li>
                                    <li><Link to='vendor-login' className="item" onClick={refreshPage}>Vendor</Link></li>
                                 </ul>

                              </li>
                           </div>


                           <div className="dropdown">

                              <li><Link to='/' style={{ pointerEvents: "none" }} className="item" onClick={refreshPage}>Sign Up <i className='fa fa-angle-right'></i></Link>

                                 <ul className="dropdown_items">
                                    <li><Link to='buyer-signup' className="item" onClick={refreshPage}>Buyer</Link></li>
                                    <li><Link to='vendor-signup' className="item" onClick={refreshPage}>Vendor</Link></li>
                                 </ul>

                              </li>
                           </div>
                        </>
                     }
                     {vendorLoginStatus || buyerLoginStatus == 'true' &&
                        <li><Link to='vendor-logout' className="item">Logout</Link></li>
                     }
                  </ul>
               </div>

               <div className="sm_controls">
                  <div className="sm_cntrl filters"><i className='fa fa-filter'></i></div>
                  <div className="sm_cntrl open"><i className='fa fa-bars'></i></div>
                  <div className="sm_cntrl close"><i className='fa fa-times'></i></div>
               </div>
            </nav>




         </div>

      );
   }
}
