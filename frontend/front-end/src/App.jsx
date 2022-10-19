import { useState } from 'react'
import reactLogo from './assets/react.svg';
import landing from './assets/landing3.png';
import delivery from './assets/delivery.png';
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header'
import Home from './components/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {


   return (
      <>
         <Header />
         <Home />
         
{/* 
         <div className="main">
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

         </div>  */}
         </>

   );
};

export default App;
