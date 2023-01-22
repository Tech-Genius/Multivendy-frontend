import './css/Store.css'
import { useState, useEffect } from 'react';
import Single from './Single';
import Categories from './Categories'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import category from './Categories'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaArrowAltCircleLeft, FaRegTimesCircle } from "react-icons/fa";
import './css/CategoryProducts.css'
import Sidebar from './Sidebar';
import ApiLoading from './ApiLoading';
function CategoryProducts() {

    const [products, setProducts] = useState([])
    const [totalResult, setTotalResults] = useState(0)
    const { category_id } = useParams();
    const { category_title } = useParams();
    const [loading, setLoading] = useState(true)



    const [isCategoryExpanded, setIsCategoryExpanded] = useState(false)
    const close = () => {
        setIsCategoryExpanded(false);
    };




    useEffect(() => {

        document.title = 'Store';

        setLoading(true);
        fetch('https://multivendy-api.onrender.com/api/store-filter/?category=' + category_id)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results)
                setTotalResults(data.count)
            }).catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
                setIsCategoryExpanded(false);
               
            });



    },
        [category_id]);
    if (loading) {
        return < ApiLoading />;
    }












    var links = []
    var limit = 1
    var totalLinks = totalResult / limit
    for (let i = 1; i <= totalResult; i++) {
        links.push(<div className="paginate"><Link onClick={() => changeUrl(baseUrl + `/store/?page=${i}`)} to={`/store/?page=${i}`}><p>{i}</p></Link></div>)
    }


    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     fetchData('http://localhost:8000/api/categories/');

    // });

    // function fetchData(baseurl) {
    //     fetch(baseurl)
    //         .then((response) => response.json())
    //         .then((data) => setCategories(data.results));
    // }




    return (

        <div className="store">
            <div className="category_sm_cntrl">
                {!isCategoryExpanded ?
                    <HiBars3BottomRight className='category_cntrl' onClick={() =>
                        setIsCategoryExpanded(!isCategoryExpanded)
                    } /> : <FaRegTimesCircle className='category_cntrl' onClick={() =>
                        setIsCategoryExpanded(!isCategoryExpanded)
                    } />
                }
            </div>

            <div className={isCategoryExpanded ? 'sm_screen_sidebar' : 'sidebar'}>
                {/* <h3 >Filter By</h3> */}
                <div className="sidebar_inner">
                    <div className="cate">
                        <h5>Filter By</h5>
                        <Categories></Categories>
                    </div>
                    {/* <div className="price">
                        <h5>Price</h5>
                        <input type="range" />
                    </div>

                    <div className="colors">
                        <h5>Color</h5>
                        <div className="colors_wrap">
                            <div className="color" id='f'></div>
                            <div className="color" id='s'></div>
                            <div className="color" id='t'></div>
                            <div className="color" id='fh'></div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="st_prod_inner">
                    <div className="st_prod_box">
                        {
                            categories.map((category) => <Categories category={category} />)
                        }



                    </div>

                </div> */}
            </div>
            <div className="st_prod">



                {


                    <div className="prod_heading" id='latest'><Link to={'/store'} className='back_to_store'> <FaArrowAltCircleLeft /> Store </Link>  <h3>Latest Arivals <span>({category_title})</span> </h3>


                    </div>

                }

                <div className="st_prod_inner" id='latest'>
                    <div className="st_prod_box">
                        {
                            products.map((product) => <Single key={product.id} product={product} />)
                        }



                    </div>

                </div>


                <div className="prod_heading" id='best_sellers'><h3>Best Sellers</h3></div>
                <div className="st_prod_inner" id='best_sellers'>
                    <div className="st_prod_box">
                        {
                            products.map((product) => <Single  key={product.id} product={product} />)
                        }



                    </div>

                </div>








                <div className="pagination">
                    {/* {links} */}

                </div>

            </div>



            <div className="import_user_links">
                <Sidebar />
            </div>
        </div>
    )
}

export default CategoryProducts