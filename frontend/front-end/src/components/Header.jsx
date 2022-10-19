import './css/Header.css'
import React, {Component} from 'react'
import $ from 'jquery'


export default class Header extends Component {
   jQuerycode = () => {

      $(".open").unbind("click").click(function () {
         $(".open").hide();
         $(".close").fadeIn();
         // $(".nav_items").show();
         $(".nav_items").toggle(500,"swing");

      })


      $(".close").unbind("click").click(function () {
         $(".close").hide();
         $(".open").fadeIn();
         // $(".nav_items").show();
         $(".nav_items").toggle("slow");

      })

   }

   componentDidMount(){
   this.jQuerycode()
    }




   render(){

     return (
      <div className="header">
         <nav>
            <div className="logo"><h3>Multivendy</h3></div>

            <div className="search">
               <div className="search-bar">
                  <input type="search" placeholder="Search" />
               </div>
            </div>

            <div className="nav_items">
               <ul>
                  <li className="item">Item</li>
                  <li className="item">Item</li>
                  <li className="item">Item</li>
                  <li className="item">Item</li>
               </ul>
            </div>

            <div className="sm_controls">
            <div className="sm_cntrl open"><i className='fa fa-bars'></i></div>
            <div className="sm_cntrl close"><i className='fa fa-times'></i></div>
         </div>
         </nav>




      </div>

     );
   }
}
