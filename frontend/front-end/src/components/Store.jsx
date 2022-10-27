import './css/Store.css'
import reactLogo from './assets/react.svg';
import landing from './assets/landing3.png';
import delivery from './assets/delivery.png';
import {useState,useEffect } from 'react';
import Single from './Single';
function Store() {



    const [products, setProducts]=useState([])
    useEffect(() => {
        fetchData('http://localhost:8000/api/products/');

    });
    
    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => setProducts(data.results));
    }


    return (

        <div className="store">
            <div className="sidebar">
                <h3 >nnn</h3>
            </div>
            <div className="st_prod">
                <div className="st_prod_inner">
                    <div className="st_prod_box">
                        {
                           products.map((product)=> <Single product={product}/>)
                        }

                        {/* <img src={reactLogo} alt="" />
                        <h3>React</h3>
                        <p>$30</p>
                        <div className="buttons">
                            <button title='Add To Cart'><i className="fa fa-cart-plus"></i></button>
                            <button title='Add To Wishlist' id='wishlist'><i className="fa fa-heart"></i></button>
                        </div> */}
                    </div>
                    {/* 
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
                    </div> */}


                </div>




            </div>



        </div>
    )
}

export default Store