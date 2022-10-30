import reactLogo from './assets/react.svg'
import './css/Categories.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Categories(props) {


    const baseUrl = 'http://localhost:8000/api'
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
    function changeUrl(baseurl) {
        fetchData(baseurl)

    }

    var links = []
    for (let i = 1; i <= totalResult; i++) {
        links.push(<div className="paginate"><Link onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)} to={`/categories/?page=${i}`}><p>{i}</p></Link></div>)
    }





    return (
        <div className="category">
            {
                categories.map((category) =>

                    <div className="category_box">
                        <p>{category.title}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Categories