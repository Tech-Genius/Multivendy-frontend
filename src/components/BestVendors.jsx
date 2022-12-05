import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const baseUrl = 'http://localhost:8000/api'
function BestVendors() {
    const [bestVendors, setBestVendors] = useState([]);
    // useEffect(() => {
    //     axios.get(baseUrl + '/vendors/').then((res) => {
    //         console.log(res.data)
    //     })

    // }, [])

    useEffect(() => {
        fetchData(baseUrl + '/vendors/');
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setBestVendors(data.results)
                // setTotalResults(data.count)

            });
    }





    return (
        <div style={{ marginTop: "200px" }}>
        
            {
                bestVendors.map((bestvendor) => <h3>{bestvendor.first_name}</h3>)
            }


        </div>
    )
}
export default BestVendors