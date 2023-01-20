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
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaArrowAltCircleLeft, FaRegTimesCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Single from './Single'
import ApiLoading from "./ApiLoading";
function Detail() {
    const baseUrl = 'https://multivendy-api.onrender.com/api'
    const [product, setProduct] = useState([]);
    const [productTags, setProductTags] = useState([])
    const [vendor, setVendor] = useState([])
    const [loading, setLoading] = useState(true)
    const [relatedProduct, setRelatedProduct] = useState([])
    // const [totalResult, setTotalResults] = useState(0)
    let { product_id } = useParams();


    console.log(vendor)
    console.log(product)

    useEffect(() => {
        setLoading(true);

        axios.get(baseUrl + '/store/' + product_id)
            .then((res) => {
                setProduct(res.data)
                setProductTags(res.data.tag_list)
                setVendor(res.data.vendor)
            }).catch(error => {
                console.log(error)

            }).finally(() => setLoading(false));


        fetchRelatedProductData(baseUrl + '/related-product/' + product_id)
        document.title = 'Product Detail'


    }, [product_id])

    if (loading) {
        return < ApiLoading />;
        // console.log("loading")
    }

    function fetchRelatedProductData(baseUrl) {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                setRelatedProduct(data.results)

            })
    }





    const tagLinks = []
    for (let i = 0; i < productTags.length; i++) {
        let tag = productTags[i].trim();

        tagLinks.push(<Link className="tagLinks" style={{ margin: "5px" }} to={`/store/tags/${tag}`}>{tag}</Link>)
    }





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
            <div className="import_user_links">
                <Sidebar />
            </div>
            <div className="prod_detail_inner">

                <div className="product_detail_wrap">

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

                            {product.featured_image1 &&
                                <SwiperSlide>
                                    <img src={product.featured_image1} alt="product_title" />

                                </SwiperSlide>
                            }
                            {product.featured_image2 &&
                                <SwiperSlide>
                                    <img src={product.featured_image2} alt="product_title" />
                                </SwiperSlide>
                            }
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
                        <Link to={'/store'} className='detail_back_to_store'> <FaArrowAltCircleLeft /> Store </Link>
                        <div className="detail_box_text" id="product-name">
                            <h3 id="name" className="lg_screen">Name: <span>{product.title}</span></h3>
                            <h3 id="name" className="sm_screen"><span>{product.title}</span></h3>
                        
                        </div>

                        <div className="detail_box_text">
                            <h6 id="details">Description: <span>{product.detail}</span></h6>
                        </div>

                        <div className="detail_box_text">
                            <p id="price">Price: <span> &#8358;{product.price}</span></p>
                        </div>

                        <div className="detail_box_text">
                            <p id="tag">Tags: <span id="taglinks">{tagLinks}</span></p>
                        </div>

                        <div className="detail_box_text">
                            <p id="vendor" title="View Profile">Vendor: <Link className="vendor_profile">
                                {vendor != null &&
                                    <span>
                                        {vendor.first_name} {vendor.last_name}</span>
                                }
                            </Link></p>
                        </div>




                        <Link><button>Add to cart</button></Link>

                        {/* <div className="featured_img">
                            {product.featured_image1 &&
                                <img src={product.featured_image1} />
                            }
                            {product.featured_image2 &&
                                <img src={product.featured_image2} />
                            }
                            {product.featured_image3 &&
                                <img src={product.featured_image3} />
                            }
                            {product.featured_image4 &&
                                <img src={product.featured_image4} />
                            }
                        </div> */}
                    </div>
                </div>

                <div className="related_products">
                    <h3 className="related_product_heading">Related <span>Products</span></h3>
                    <div className="st_prod_box">
                        {
                            relatedProduct.map((product) => <Single product={product} />)
                        }
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Detail