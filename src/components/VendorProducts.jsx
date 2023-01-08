import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Single from './Single'
import './css/VendorProduct.css'
import emptyProduct from './assets/empty-product-removebg-preview.png'
import VendorDashboardSidebar from './VendorDashbaordSidebar'
import { FaArrowAltCircleLeft, FaCartPlus, FaRegTimesCircle } from "react-icons/fa";
import ApiLoading from './ApiLoading'

const baseUrl = 'http://localhost:8000/api'

function VendorProducts() {
    const [vendorProducts, setVendorProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalResult, setTotalResults] = useState(0)
    const vendorId = localStorage.getItem('vendorId')
    console.log(vendorId)

    // useEffect(()=>{
    //     try{
    //         axios.get(baseUrl + '/vendor-products/9')

    //     }catch(error){
    //         console.log(error)
    //     }
    // },[])

    useEffect(() => {
        setLoading(true)
        fetch('https://multivendy-api.onrender.com/api/vendor-products/'  + vendorId)
        .then((response) => response.json())
        .then((data) => {
            setVendorProducts(data.results)
            setTotalResults(data.count)
        }).catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    if(loading){
        return<ApiLoading/>
    }

    // function fetchData(baseurl) {
    //     fetch(baseurl)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setVendorProducts(data.results)
    //             // setTotalResults(data.count)

    //         });
    // }






    return (
        <div>



            <div className="vendor_dashboard">

                <div className="vendor_product_left">
                    {

                        vendorProducts.length > 0 &&
                        <Link to={'/vendor-dashboard'} className='back_to_dashboard'> <FaArrowAltCircleLeft /> Back to Dashboard </Link>

                    }
                    {

                        vendorProducts.length > 0 &&
                        <div className="vendor_product_wrap">

                            {
                                vendorProducts.map((product) =>
                                    <div className="vendor_product_box">

                                        <div className="vendor_product_box_inner">
                                            <img src={product.image} alt="" />
                                        </div>

                                        <div className="vendor_product_box_inner">
                                            <h3>{product.title}</h3>
                                            <Link to={`/store/${product.id}`}><button title='View Product'>View Product</button></Link>

                                            <Link to={`/store/${product.id}`}><button title='View Product'>Edit Product</button></Link>

                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    }




                    {
                        vendorProducts.length < 1 &&
                        <div className="empty_product">
                            <img src={emptyProduct} alt="" />
                            <h3>Nothig to show, you have not added any product!</h3>
                            <div className="empty_product_links">
                                <Link to={'/add-product'} className='back_to_dashboard'> Add Product  <FaCartPlus /> </Link>
                                <Link to={'/vendor-dashboard'} className='back_to_dashboard'> <FaArrowAltCircleLeft /> Back to Dashboard </Link>

                            </div>
                        </div>
                    }


                </div>

                <div className="vendor_dashboard_right">
                    <VendorDashboardSidebar />

                </div>

            </div>


        </div>
    )
}

export default VendorProducts