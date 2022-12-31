import react from 'react'
import './css/Signup.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const baseUrl = 'https://multivendy-api.onrender.com/api/customers/'
function BuyerSignup() {

    const [buyerSignup, setBuyerSignup] = useState({

        'first_name': '',
        'last_name': '',
        'email': '',
        'password': '',
        'phone': '',
        'address': '',
        'status': ''
    });


    // change form item value
    const handleChange = (event) => {

        setBuyerSignup({
            ...buyerSignup,
            [event.target.name]: event.target.value
        });
        // console.log(event.target.value)

    }


    //submit the form

    const submitForm = () => {
        const buyerFormData = new FormData();
        buyerFormData.append("first_name", buyerSignup.first_name)
        buyerFormData.append("last_name", buyerSignup.last_name)
        buyerFormData.append("email", buyerSignup.email)
        buyerFormData.append("password", buyerSignup.password)
        buyerFormData.append("phone", buyerSignup.phone)
        buyerFormData.append("address", buyerSignup.address)

        try {
            axios.post(baseUrl, buyerFormData).then((res) => {
                setBuyerSignup(
                    {

                        'first_name': '',
                        'last_name': '',
                        'email': '',
                        'password': '',
                        'phone': '',
                        'address': '',
                        'status': 'success'
                    }
                )
            })
        } catch (error) {
            console.log(error)
            setBuyerSignup({ 'status': 'error' })
        }
    }

    const buyerLoginStatus = localStorage.getItem('buyerLoginStatus')
    if(buyerLoginStatus=='true'){
        window.location.href='/store'
    }
    return (
        <div className="signup">
            <div className="signup_inner">
                <h3>Create A Buyer<span> Account</span></h3>
                <div className="form_wrapper">
                    {buyerSignup.status == 'success' && <p style={{ color: 'green' }}>Buyer Registration Successful</p>}
                    {buyerSignup.status == 'error' && <p style={{ color: 'red' }}>Buyer Registration Unsuccessful</p>}
                    {/* <form action=""> */}

                    <div className="name">
                        <div className="form_item" id='first_name'>
                            <label htmlFor="first_name">First Name <span>*</span></label>
                            <input value={buyerSignup.first_name} onChange={handleChange} name='first_name' type="text" placeholder="Enter your first name" id='first_name' required />
                            <p className="error">This field is required</p>
                        </div>

                        <div className="form_item" id='last_name'>
                            <label htmlFor="last_name">Last Name <span>*</span></label>
                            <input value={buyerSignup.last_name} onChange={handleChange} name='last_name' type="text" placeholder="Enter your last name" id='last_name' required />
                            <p className="error">This field is required</p>
                        </div>
                    </div>

                    <div className="email">
                        <div className="form_item">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input value={buyerSignup.email} onChange={handleChange} name='email' type="email" placeholder="yourname@email.com" required id='email' />
                            <p className="error">This field is required</p>
                        </div>
                    </div>



                    <div className="password">
                        <div className="form_item">
                            <label htmlFor="password">Password <span>*</span></label>
                            <input value={buyerSignup.password} onChange={handleChange} name='password' type="password" placeholder="Create a new password" required id='password' />
                            <p className="error">This field is required</p>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="form_item">
                            <label htmlFor="phone">Phone <span>*</span></label>
                            <input value={buyerSignup.phone} onChange={handleChange} name='phone' type="phone" placeholder="Enter your mobile number" required id='phone' />
                            <p className="error">This field is required</p>
                        </div>
                    </div>

                    <div className="address">

                        <div className="form_item">
                            <label htmlFor="address">Address</label>
                            <textarea value={buyerSignup.address} onChange={handleChange} name="address" id="address" required cols="30" rows="10" placeholder="Where should we always deliver to?"></textarea>
                        </div>
                    </div>


                    {/* <div className="data">
                            <div className="form_item_checkbox">
                                <input onChange={handleChange} type="checkbox" className='checkbox' required />
                            </div>

                            <div className="form_item">
                                <p>You agree to providing your data to Habeeb who may contact you.</p>
                            </div>
                        </div> */}

                    <div className="button">
                        <div className="form_item">
                            <button onClick={submitForm} type="submit" id='btn__submit'>Sign Up</button>
                        </div>
                    </div>

                    {/* </form> */}
                </div>
                <p>No, I need a <Link to={'/vendor-signup'} className="opposite_link">vendor account</Link></p>
            </div>
        </div>
    )
}
export default BuyerSignup