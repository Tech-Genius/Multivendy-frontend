import React from "react"
import { useState, useEffect } from "react";
import './css/ProductDetail.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Single from "./Single";
import Categories from "./Categories";
import axios from 'axios'
function Detail() {
    const baseUrl = 'https://multivendy-backend-production.up.railway.app/api'
    const [product, setProduct] = useState([]);
    // const [totalResult, setTotalResults] = useState(0)
    let { product_id } = useParams();
    console.log(product)

    useEffect(() => {
        try {
            axios.get(baseUrl + '/product/' + product_id)
                .then((res) => {
                    setProduct(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])





    // function fetchData(baseurl) {
    //     fetch(baseurl)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setProductDetail(data.results)
    //             setTotalResults(data.count)


    //         });
    // }







    return (
        <div className="product_detail">
            <div className="prod_detail_inner">
                <div className="prod_detail_box" id="img">
                    <img src={product.image} alt="product.title"/>
                </div>

                <div className="prod_detail_box" id="txt">
                    <h3 id="nane">Name: {product.title}</h3>
                    <h6 id="details">Details: {product.detail}</h6>
                    <p id="price">Price: &#8358;{product.price}</p>
                    
                    <Link><button>Add to cart</button></Link>

                    <div className="featured_img">
                       
                        <img src={product.featured_image1} />
                        <img src={product.featured_image2} />
                        <img src={product.featured_image3} />
                        <img src={product.featured_image4} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detail