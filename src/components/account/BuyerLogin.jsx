import react from 'react'
import './assets/css/Login.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import VendorLogin from './VendorLogin'
import { Link } from 'react-router-dom'
import PostedDataLoading from '../loading/PostedDataLoading/PostedDataLoading'

const baseUrl = 'https://multivendy-api.onrender.com/api'
function BuyerLogin() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [buyerLogin, setBuyerLogin] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setBuyerLogin({
            ...buyerLogin,
            [event.target.name]: event.target.value


        })

    }

    const submitForm = (e) => {
        e.preventDefault();
        setLoading(true)
        const buyerFormData = new FormData
        buyerFormData.append('email', buyerLogin.email)
        buyerFormData.append('password', buyerLogin.password)

        try {
            axios.post(baseUrl + '/customer-login', buyerFormData).then((res) => {
                if (res.data.status == "succesfull") {
                    console.log("Succesful")
                    setError('')
                    setSuccess("Login Succesful!")
                    localStorage.setItem('buyerLoginStatus', true)
                    localStorage.setItem('buyerID', res.data.buyer_id)
                    localStorage.setItem('buyerName', res.data.buyer_first_name)
                    setLoading(false)
                }

                else {
                    console.log("Failed")
                    setError("Your Cridentials Do Not Match!")
                    setLoading(false)
                }

            })
        } catch (error) {
            console.log(error)
        }
    }


    if (loading) {
        return (<PostedDataLoading/>)
    }

    const buyerLoginStatus = localStorage.getItem('buyerLoginStatus')
    if (buyerLoginStatus == 'true') {
        window.location.href = '/store'
    }


    return (
        <div className="login">
            <div className="login_inner">
                <h3>Login To You Buyer<span> Account</span></h3>
                <div className="form_wrapper">
                    <form method='POST' onSubmit={submitForm}>




                        <div className="email">
                            <div className="form_item">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input name='email' value={buyerLogin.email} onChange={handleChange} type="email" placeholder="yourname@email.com" required id='email' />
                                <p className="error">This field is required</p>
                            </div>
                        </div>



                        <div className="password">
                            <div className="form_item">
                                <label htmlFor="password">Password <span>*</span></label>
                                <input value={buyerLogin.password} onChange={handleChange} name='password' type="password" placeholder="Enter your password" required id='password' />
                                <p className="error">This field is required</p>
                            </div>
                        </div>


                        {/* <div className="data">
                            <div className="form_item_checkbox">
                                <input type="checkbox" className='checkbox' required />
                            </div>

                            <div className="form_item">
                                <p>You agree to providing your data to Habeeb who may contact you.</p>
                            </div>
                        </div> */}
                        
                        {success ? <div style={{ color: "green" }}>{success}</div> : null}
                        {error ? <div style={{ color: "red" }}>{error}</div> : null}
                        <div className="button">
                            <div className="form_item">
                                <button type="submit" id='btn__submit'>Login</button>
                            </div>
                        </div>

                    </form>
                </div>
                <p>No, I'm a <Link to={'/vendor-login'} className="opposite_link">Vendor</Link></p>
            </div>
        </div>
    )
}
export default BuyerLogin