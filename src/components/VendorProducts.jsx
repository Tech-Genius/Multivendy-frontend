import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:8000/api'

function VendorProducts(){ 
    const [vendorProducts, setVendorProducts] = useState([])

    useEffect(()=>{
        try{
            axios.get(baseUrl + '/vendor-products/9')

        }catch(error){
            console.log(error)
        }
    })

    return(
<div></div>
    )
}

export default VendorProducts