import { useState } from 'react'
import reactLogo from './assets/react.svg';
import landing from './assets/landing3.png';
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header'


function App() {


   return (
      <>
      <Header/>


         {/* <div className="main">
            <div className="lst_prod">
               <div className="lst_prod_inner">
                  <div className="lst_prod_box">
                     <img src={reactLogo} alt="" />
                     <h3>React</h3>
                     <p>$30</p>
                     <div className="buttons">
                        <button title='Add To Cart'><i className="fa fa-cart-plus"></i></button>
                        <button title='Add To Wishlist' id='wishlist'><i className="fa fa-heart"></i></button>
                     </div>
                  </div>

                  <div className="lst_prod_box">
                     <img src={reactLogo} alt="" />
                     <h3>React</h3>
                     <p>$30</p>
                     <div className="buttons">
                        <button title='Add To Cart'><i className="fa fa-cart-plus"></i></button>
                        <button title='Add To Wishlist' id='wishlist'><i className="fa fa-heart"></i></button>
                     </div>
                  </div>

                  <div className="lst_prod_box">
                     <img src={reactLogo} alt="" />
                     <h3>React</h3>
                     <p>$30</p>
                     <div className="buttons">
                        <button title='Add To Cart'><i className="fa fa-cart-plus"></i></button>
                        <button title='Add To Wishlist' id='wishlist'><i className="fa fa-heart"></i></button>
                     </div>
                  </div>

                  <div className="lst_prod_box">
                     <img src={reactLogo} alt="" />
                     <h3>React</h3>
                     <p>$30</p>
                     <div className="buttons">
                        <button title='Add To Cart'><i className="fa fa-cart-plus"></i></button>
                        <button title='Add To Wishlist' id='wishlist'><i className="fa fa-heart"></i></button>
                     </div>
                  </div>

               </div>

            </div>

         </div> */

         <div className="background">
           <div className="background_inner">
            <div className="box_wrapper">
               <div className="box">
                  <h3>Shopping Has Never <br/> Been Easier</h3>
                  <p>Shop anything you want today, with just few clicks</p>
                  <a href=""><button>View Store <i className="fa fa-cart-plus"></i></button></a>
               </div>
               <div className="box">
               <img src={landing} alt="" />
               </div>
            </div>
           </div>
         </div>
         
         
         
         
         }

      </>
   );
};

export default App;
