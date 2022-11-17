import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios';
import Tab from "./Tab";


function Search() {
    const baseUrl = 'http://localhost:8000/api'
    const [search, setSearch] = useState({});
    const [data, setData] = useState([]);



    useEffect(()=>{
        try{

            axios.get(baseUrl + '/search?search='+{search})
            .then((res) => {
                setSearch(res.data)
            })
        }catch(error){
            console.log(error)
        }
            }, [])


    // useEffect(() => {
    //     const fetchStore = async () => {

    //        axios.get(`http://localhost:8000/api/search?search=${search}`);
    //         setData(res.data);
    //     };
    //     if (search.length === 0 || search.length > 2) fetchStore();
    //     console.log(data)

    // }, [search]);
    
    // const baseUrl = 'http://localhost:8000/api'
    // const [search, setSearching,] = useState([])
    // const [totalResult, setTotalResults] = useState(0)
    // const {search} = useParams();
    // console.log(search)


    // useEffect(() => {
    //     fetchData(baseUrl + '/search?search=' + search);

    // }, []);

    // function fetchData(baseurl) {
    //     fetch(baseurl)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setSearching(data.results)
    //             // setTotalResults(data.count)

    //         });


    // }






    return (

        <div className="search" style={{ margin: '100px' }}>
            <input type="search" onChange={(e) => setSearch(e.target.value)} style={{ border: '1px solid grey' }} />



            {
               
                <Tab data={data} />
            }

        </div>

    );
};
export default Search;