import React from "react"
import { useState, useEffect } from "react";
import './css/ProductDetail.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import axios from 'axios'
function Detail() {
    const baseUrl = 'https://multivendy-backend-production.up.railway.app/api'
    const [product, setProduct] = useState([]);
    const [featuredImage, setFeaturedImage] = useState()
    // const [totalResult, setTotalResults] = useState(0)
    let { product_id } = useParams();
    let { product_title } = useParams();

    console.log(product)

    useEffect(() => {
        try {
            axios.get(baseUrl + '/store/' + product_id)
                .then((res) => {
                    setProduct(res.data)
                })
        } catch (error) {
            console.log(error)
        }
        document.title = 'Product Detail'


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
                    <Swiper
                        style={{
                            "--swiper-navigation-size": "15px",
                            "--swiper-navigation-color": "white",
                            "--swiper-pagination-size": "28px",
                            "--swiper-pagination-color": "#eb870d",

                        }}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                        navigation={true}
                        slidesPerView={1}
                        slidesPerGroup={1}

                        loop={true}
                    >
                        <SwiperSlide>
                            <img src={product.image} alt="product_title" />

                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={product.featured_image1} alt="product_title" />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={product.featured_image2} alt="product_title" />
                        </SwiperSlide>
                        {product.featured_image3 &&
                            <SwiperSlide>
                                <img src={product.featured_image3} alt="product_title" />
                            </SwiperSlide>
                        }
                        {product.featured_image4 &&
                            <SwiperSlide>

                                <img src={product.featured_image4} alt="product_title" />

                            </SwiperSlide>
                        }

                    </Swiper>

                </div>

                <div className="prod_detail_box" id="txt">
                    <h3 id="nane">Name: {product.title}</h3>
                    <h6 id="details">Details: {product.detail}</h6>
                    <p id="price">Price: &#8358;{product.price}</p>

                    <Link><button>Add to cart</button></Link>

                    <div className="featured_img">

                        <img src={product.featured_image1} />
                        <img src={product.featured_image2} />
                        {product.featured_image3 &&
                            <img src={product.featured_image3} />
                        }
                        {product.featured_image4 &&
                            <img src={product.featured_image4} />
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Detail