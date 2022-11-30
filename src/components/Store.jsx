import './css/Store.css'
import reactLogo from './assets/react.svg';
import landing from './assets/landing3.png';
import delivery from './assets/delivery.png';
import { useState, useEffect } from 'react';
import Single from './Single';
import Categories from './Categories'
import { Link } from 'react-router-dom'
import Search from './Search';
function Store(props) {
    const baseUrl = 'http://localhost:8000/api'
    const [products, setProducts] = useState([])
    const [totalResult, setTotalResults] = useState(0)

    useEffect(() => {
        fetchData(baseUrl + '/store');
        document.title='Store';

    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results)
                setTotalResults(data.count)

            });


    }
    function changeUrl(baseurl) {
        fetchData(baseurl)

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
          
            <div className="sidebar">
                <h3 >Filter By</h3>
                
                <div className="sidebar_inner">
                    <div className="cate">
                        <h5>Category</h5>
                        <Categories></Categories>
                    </div>

                    <div className="price">
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
                    </div>
                
    
            </div>
            </div>

            <div className="st_prod">
                <div className="prod_heading"  id='latest'><h3>Latest Arivals</h3></div>
              
                <div className="st_prod_inner" id='latest'>
                    <div className="st_prod_box">
                        {
                            products.map((product) => <Single product={product} />)
                        }



                    </div>

                </div>


                <div className="prod_heading" id='best_sellers'><h3>Best Sellers</h3></div>
                <div className="st_prod_inner" id='best_sellers'>
                    <div className="st_prod_box">
                        {
                            products.map((product) => <Single product={product} />)
                        }



                    </div>

                </div>








                <div className="pagination">
                    {/* {links} */}

                </div>


            </div>



        </div>
    )
}

export default Store