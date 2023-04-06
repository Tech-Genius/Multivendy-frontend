import react from 'react'
import './assets/css/Login.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PostedDataLoading from '../loading/PostedDataLoading/PostedDataLoading'


const baseUrl = 'https://multivendy-api.onrender.com/api'
function VendorLogin() {

    const [vendorLogin, setVendorLogin] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const handleChange = (event) => {
        setVendorLogin({
            ...vendorLogin,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        setLoading(true)
        const vendorFormData = new FormData
        vendorFormData.append('email', vendorLogin.email)
        vendorFormData.append('password', vendorLogin.password)


        // try {
        //     axios.post(baseUrl + '/vendor-login', vendorFormData).then((res) => {
        //         console.log(res.data)
        //         if (res.data.bool == true) {
        //             localStorage.setItem('vendorLoginStatus', true)
        //             localStorage.setItem('vendorId', res.data.vendor_id)
        //             localStorage.setItem('vendorName', res.data.vendor_first_name)
        //             // window.location.href = '/vendor-login'
        //             setLoading(false);
        //         } else {
        //             console.log("error1")
        //             setError("Invalid Email or Password");
        //             console.log("error2")

        //             setLoading(false);
        //         }
        //     }).catch((error) => {
        //         console.log(error)
        //         setLoading(false)


        //     });

        axios.post(baseUrl + '/vendor-login', vendorFormData)
            .then((res) => {
                // success handling
                if (res.data.status == "succesfull") {
                    console.log("Succesful")
                    setError('')
                    setSuccess("Login Successful!");
                    localStorage.setItem('vendorLoginStatus', true);
                    localStorage.setItem('vendorId', res.data.vendor_id);
                    localStorage.setItem('vendorName', res.data.vendor_first_name);
                  
                    setLoading(false);
                } else {
                    console.log("Failed")
                    setError("Invalid Email or Password");
                    setLoading(false);
                }
            }).catch((error) => {
                // error handling
                console.log(error);
                setLoading(false);
            });


    }

    if (loading){
        return(<PostedDataLoading/>)
    }



    const vendorLoginStatus = localStorage.getItem('vendorLoginStatus')
    if (vendorLoginStatus == 'true') {
        window.location.href = '/vendor-dashboard'
    }


    return (
        <div className="login">
            <div className="login_inner">
                <h3>Login To You Vendor<span> Account</span></h3>
                <div className="form_wrapper">
                    <form action="" onSubmit={submitForm} >


                        {vendorLogin.status == 'success' && <p style={{ color: 'green' }}>Logged Successfully</p>}
                        {vendorLogin.status == 'error' && <p style={{ color: 'red' }}>Something went wrong, try again</p>}
                        <div className="email">
                            <div className="form_item">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input value={vendorLogin.email} onChange={handleChange} name="email" type="email" placeholder="yourname@email.com" required id='email' />
                                <p className="error">This field is required</p>
                            </div>
                        </div>



                        <div className="password">
                            <div className="form_item">
                                <label htmlFor="password">Password <span>*</span></label>
                                <input value={vendorLogin.password} onChange={handleChange} type="password" name="password" placeholder="Enter your password" required id='password' />
                                <p className="error">This field is required</p>
                            </div>
                        </div>


                        <div className="button">
                            <div className="form_item">
                                <button type="submit" id='btn__submit'>Login</button>
                            </div>
                        </div>
                        {success ? <div style={{ color: "green" }}>{success}</div> : null}
                        {error ? <div style={{ color: "red" }}>{error}</div> : null}
                    </form>
                </div>
                <p>No, I'm a <Link to={'/buyer-login'} className="opposite_link">buyer</Link></p>
            </div>
        </div>
    )
}
export default VendorLogin