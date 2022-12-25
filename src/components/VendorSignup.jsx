import react from 'react'
import './css/Signup.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const baseUrl = 'https://multivendy-backend-production.up.railway.app/api/vendors/'
function VendorSignup() {
    const [vendorSignup, setVendorSignup] = useState({
        'first_name': '',
        'last_name': '',
        'email': '',
        'password': '',
        'phone': '',
        'status': ''
    });

    //change element value

    const handleChange = (event) => {
        setVendorSignup({
            ...vendorSignup,
            [event.target.name]: event.target.value
        });
    }



    //submit form
    const submitForm = () => {
        const vendorFormData = new FormData();
        vendorFormData.append("first_name", vendorSignup.first_name)
        vendorFormData.append("last_name", vendorSignup.last_name)
        vendorFormData.append("email", vendorSignup.email)
        vendorFormData.append("password", vendorSignup.password)
        vendorFormData.append("phone", vendorSignup.phone)

        try{
            axios.post(baseUrl, vendorFormData).then((response) => {
                setVendorSignup(
                    {
                        'first_name': '',
                        'last_name': '',
                        'email': '',
                        'password': '',
                        'phone': '',
                        'status':'success'
                    }

                )

                localStorage.setItem('vendorLoginStatus',true)
                window.location.href='/vendor-login'
            })

        }catch(error) {
            console.log(error)
            setVendorSignup({'status':'error'})
        }


    }


    const vendorLoginStatus = localStorage.getItem('vendorLoginStatus')
    if(vendorLoginStatus=='true'){
        window.location.href='/vendor-dashboard'
    }

    return (
        <div className="signup">
            <div className="signup_inner">
                <h3>Create A Vendor<span> Account</span></h3>
                <div className="form_wrapper">
                    {vendorSignup.status=='success' && <p style={{color:'green'}}>Registration successful, redirecting to dashboard</p>}
                    {vendorSignup.status=='error' && <p style={{color:'red'}}>Something went wrong, try again</p>}
                    {/* <form action=""> */}

                        <div className="name">
                            <div className="form_item" id='first_name'>
                                <label htmlFor="first_name">First Name <span>*</span></label>
                                <input value={vendorSignup.first_name} onChange={handleChange} type="text" placeholder="Enter your first name" name='first_name' id='first_name' required />
                                <p className="error">This field is required</p>
                            </div>

                            <div className="form_item" id='last_name'>
                                <label htmlFor="last_name">Last Name <span>*</span></label>
                                <input value={vendorSignup.last_name} onChange={handleChange} type="text" placeholder="Enter your last name" name='last_name' id='last_name' required />
                                <p className="error">This field is required</p>
                            </div>
                        </div>

                        <div className="email">
                            <div className="form_item">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input value={vendorSignup.email} onChange={handleChange} type="email" placeholder="yourname@email.com" name='email' required id='email' />
                                <p className="error">This field is required</p>

                            </div>
                        </div>



                        <div className="password">
                            <div className="form_item">
                                <label htmlFor="password">Password <span>*</span></label>
                                <input value={vendorSignup.password} onChange={handleChange} type="password" placeholder="Create a new password" name='password' required id='password' />
                                <p className="error">This field is required</p>

                            </div>
                        </div>

                        <div className="phone">
                            <div className="form_item">
                                <label htmlFor="phone">Phone <span>*</span></label>
                                <input value={vendorSignup.phone} onChange={handleChange} type="phone" placeholder="Enter your mobile number" name='phone' required id='phone' />
                                <p className="error">This field is required</p>

                            </div>
                        </div>

                        {/* <div className="message">

                            <div className="form_item">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" required cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                            </div>
                        </div> */}


                        {/* <div className="data">
                            <div className="form_item_checkbox">
                                <input type="checkbox" className='checkbox' required />
                            </div>

                            <div className="form_item">
                                <p>You agree to providing your data to Habeeb who may contact you.</p>
                            </div>
                        </div> */}

                        <div className="button">
                            <div className="form_item">
                                <button onClick={submitForm} type='submit'>Sign Up</button>
                            </div>
                        </div>

                    {/* </form> */}
                </div>
                <p>No, I need a <Link to={'/buyer-signup'}>buyer account</Link></p>
            </div>
        </div>
    )
}
export default VendorSignup