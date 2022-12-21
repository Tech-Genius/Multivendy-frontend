import reactLogo from './assets/react.svg'
import './css/Categories.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch, FaRegTimesCircle } from "react-icons/fa";

// import close from './Store'


function Categories(props) {
        
    // const [isNavExpanded, setIsNavExpanded] = useState(false)
 

    const baseUrl = 'https://multivendy-backend-production.up.railway.app/api'
    const [categories, setCategories] = useState([])
    const [totalResult, setTotalResults] = useState(0)

    useEffect(() => {
        fetchData(baseUrl + '/categories');

    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.results)
                setTotalResults(data.count)

            });


    }




    return (
        
        <div className="category" >
            
            {
                categories.map((category)=>

                    <div className="category_box">
                        <p><Link  to={`/category/${category.title}/${category.id}`} className="link_to_cate">{category.title}</Link></p>
                    </div>
                )
            }
        </div>
    )
}

export default Categories