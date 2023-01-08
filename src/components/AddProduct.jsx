import './css/AddProduct.css'
import react from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import vendor from './assets/vendor.png';
import { Link } from 'react-router-dom';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import VendorDashboardSidebar from './VendorDashbaordSidebar';


const baseUrl = 'https://multivendy-api.onrender.com/api'
function AddProduct() {

    const [cate, setCate] = useState([])
    const [isNavExpanded, setIsNavExpanded] = useState(false)
   
    const [addprod, setAddProd] = useState({
        'title': '',
        'price': '',
        'category': '',
        'image': '',
        'featured_image1': '',
        'featured_image2': '',
        'featured_image3': '',
        'featured_image4': '',
        'tag_list': '',
        'detail': ''


    })



    // useEffect(() => {

    //     try {

    //         axios.get(baseUrl + '/categories').then((res) => {

    //             setCate(res.data)

    //         })

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }, [])

    // console.log(cate)

    useEffect(() => {
        fetchData(baseUrl + '/categories');

    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setCate(data.results)
            });
    }
    // const tag_list = document.getElementById('tag_list');
    // const list = tag_list.value.split(',');
    // console.log(list)

    const handleChange = (event) => {
        setAddProd({
            ...addprod,
            [event.target.name]: event.target.value
        })
    }

    const handleFileChange = (event) => {
        setAddProd({
            ...addprod,
            [event.target.name]: event.target.files[0]
        })
    }

    

    const submitForm = () => {
        const addProductFormData = new FormData
        addProductFormData.append('title', addprod.title)
        addProductFormData.append('category', addprod.category)
        addProductFormData.append('price', addprod.price)
        addProductFormData.append('detail', addprod.detail)
        addProductFormData.append('tag_list', addprod.tag_list)
        addProductFormData.append('vendor', 3);
        addProductFormData.append('image', addprod.image, addprod.image.name);
        addProductFormData.append('featured_image1', addprod.featured_image1, addprod.featured_image1.name);
        addProductFormData.append('featured_image2', addprod.featured_image2, addprod.featured_image2.name);
        addProductFormData.append('featured_image3', addprod.featured_image3);
        addProductFormData.append('featured_image4', addprod.featured_image4);
       

        try {

            axios.post(baseUrl + '/store/', addProductFormData, {
                header: {
                    'content-type': 'multipart/form-data'
                }

            }).then((res) => {

                console.log(res.data)

            })

        } catch (error) {
            console.log(error)
        }


    }



    return (
        <div className="add_product">
            {/* <div className="sm_navigation">
                <HiBars3BottomRight onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }} className='open_v_sidebar' tabIndex={0} />
            </div> */}


            {/* <div className={isNavExpanded ? 'vendor_sidebar_sm' : "vendor_sidebar"}>

                    <div className="user">
                        <div className="user_image">
                            <img src={vendor} alt="" />
                        </div>
                        <h3>Welcome <span>Vendor</span></h3>
                    </div>

                    <div className="links">
                        <h3><Link to={'/store'}>Store<BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>Add Product <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>My Products <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>Orders <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>My Top Buyers <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/add-product'}>Edit Profile <BsArrowUpRightCircle className='link-out' /></Link></h3>
                        <h3><Link to={'/vendor-logout'}>Logout <BsArrowUpRightCircle className='link-out' /></Link></h3>

                    </div>

                </div> */}

            <div className="add_prod_form_wrap">
                <div className="add_prod_form_wrap_inner">
                    <div className="add_prod_form_intro">
                        <h3>Add A New<span> Product</span></h3>
                        <div className="rules">
                            <details>
                                <summary>What ou should know</summary>
                                <ul>
                                    <li>All required fields must be filled</li>
                                    <li>Your Product will go live immediately it's being added. </li>
                                    <li>Products must be related to the category selected, else it'll be deleted</li>
                                    <li>The featured image is the best way to show other varieties of the same product</li>
                                    <li>At least, 2 featured images must be added, the field for featured image 1 and 2 are required</li>
                                    <li>We recommended an image with no background for both product and featured images, our system automatically generates a gradient background for all images.</li>
                                    <li>Add tags, products with tags will be rendered when a buyer clicks on the same tag or keyword related tag from another product</li>
                                    <li>You can add more than 1 tag, but make sure the are seperated by a coma (",") . Here is an example for a cloth related product, e.g: chivon, linen, cotton </li>
                                    <li>Make a short and explanatory detail of the product, make buyers know the state of what they are buying from you. </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    <div className="form_wrapper">
                        {/* {buyerSignup.status == 'success' && <p style={{ color: 'green' }}>Buyer Registration Successful</p>}
                    {buyerSignup.status == 'error' && <p style={{ color: 'red' }}>Buyer Registration Unsuccessful</p>} */}
                        {/* <form action="" type='POST'> */}

                        <div className="form_grid">


                            <div className="title">
                                <div className="form_item">
                                    <label htmlFor="product_title">Product Name <span>*</span></label>
                                    <input value={addprod.name} onChange={handleChange} name='title' type="text" placeholder="Product name" id='first_name' required />
                                    <p className="error">This field is required</p>
                                </div>
                            </div>

                            <div className="price">
                                <div className="form_item">
                                    <label htmlFor="product_price">Product Price <span>*</span></label>
                                    <input value={addprod.price} onChange={handleChange} name='price' type="number" placeholder="Product price" id='last_name' required />
                                    <p className="error">This field is required</p>
                                </div>
                            </div>

                            <div className="category_select">
                                <div className="form_item">
                                    <label htmlFor="product_category">Product Category <span>*</span></label>

                                    <select onChange={handleChange} defaultValue={"dd"} name="category" id="">
                                        <option>Select a category</option>
                                        {
                                            cate.map((category, index) =>


                                                <option value={category.id} key={index}>{category.title}</option>

                                            )
                                        }

                                    </select>
                                    <p className="error">This field is required</p>
                                </div>
                            </div>

                            <div className="product_image">
                                <div className="form_item">
                                    <label htmlFor="product_image">Product Image <span>*</span></label>
                                    <input onChange={handleFileChange} name='image' type="file" required id='image' />
                                    <p className="error">This field is required</p>
                                </div>
                            </div>


                            <div className="featured_image">
                                <div className="form_item">
                                    <label htmlFor="featured_image1">Featured Image1 <span>*</span></label>
                                    <input onChange={handleFileChange} name='featured_image1' type="file" required id='featured_image1' />
                                    <p className="error">This field is required</p>
                                </div>
                            </div>

                            <div className="featured_image">
                                <div className="form_item">
                                    <label htmlFor="featured_image2">Featured Image2 <span>*</span></label>
                                    <input onChange={handleFileChange} name='featured_image2' type="file" required id='featured_image2' />
                                    <p className="error">This field is required</p>

                                </div>
                            </div>


                            <div className="featured_image">
                                <div className="form_item">
                                    <label htmlFor="featured_image3">Featured Image3</label>
                                    <input onChange={handleFileChange} name='featured_image3' type="file" id='featured_image3' />
                                    {/* <p className="error">This field is required</p> */}
                                </div>
                            </div>



                            <div className="featured_image">
                                <div className="form_item">
                                    <label htmlFor="featured_image4">Featured Image4</label>
                                    <input onChange={handleFileChange} name='featured_image4' type="file" id='featured_image4' />
                                    {/* <p className="error">This field is required</p> */}
                                </div>
                            </div>

                        </div>


                        <div className="tags">

                            <div className="form_item">
                                <label htmlFor="tags">Tags <span>*</span></label>
                                <textarea value={[addprod.tag_list]} onChange={handleChange} name="tag_list" required id="tag_list" cols="30" rows="10" placeholder="Add at least one tag"></textarea>
                            </div>
                        </div>

                        <div className="description">

                            <div className="form_item">
                                <label htmlFor="discription">Detail <span>*</span></label>
                                <textarea value={addprod.detail} onChange={handleChange} name="detail" id="discription" required cols="30" rows="10" placeholder="Discription about this product"></textarea>
                            </div>
                        </div>


                        {/* <div className="data">
                            <div className="form_item_checkbox">
                                <input onChange={''} type="checkbox" className='checkbox' required />
                            </div>

                            <div className="form_item">
                                <p>You agree to providing your data to Habeeb who may contact you.</p>
                            </div>
                        </div> */}

                        <div className="button">
                            <div className="form_item">
                                <button onClick={submitForm} type="submit" id='btn__submit'>Add Product</button>
                            </div>
                        </div>

                        {/* </form> */}

                    </div>
                </div>

            </div>

            <div className="vendor_dashboard_right">
                <VendorDashboardSidebar />
            </div>

        </div>
    )


}
export default AddProduct