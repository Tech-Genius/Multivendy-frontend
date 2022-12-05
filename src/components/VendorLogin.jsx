import react from 'react'
import './css/Login.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


const baseUrl = 'https://multivendy-backend-production.up.railway.app/api'
function VendorLogin() {

    const [vendorLogin, setVendorLogin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setVendorLogin({
            ...vendorLogin,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = () => {
        const vendorFormData = new FormData
        vendorFormData.append('email', vendorLogin.email)
        vendorFormData.append('password', vendorLogin.password)
        try {
            axios.post(baseUrl + '/vendor-login', vendorFormData).then((res) => {
                if (res.data.bool == true){
                    localStorage.setItem('vendorLoginStatus',true)
                    window.location.href='/store'
                }
            })
        } catch (error) {
            console.log(error)
        }


    }

    const vendorLoginStatus = localStorage.getItem('vendorLoginStatus')
    if(vendorLoginStatus=='true'){
        window.location.href='/store'
    }


    return (
        <div className="login">
            <div className="login_inner">
                <h3>Login To You Vendor<span> Account</span></h3>
                <div className="form_wrapper">
                    {/* <form action="" > */}



                        <div className="email">
                            <div className="form_item">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input  value={vendorLogin.email} onChange={handleChange} name="email" type="email" placeholder="yourname@email.com" required id='email' />
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
                                <button onClick={submitForm} type="submit" id='btn__submit'>Login</button>
                            </div>
                        </div>

                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}
export default VendorLogin