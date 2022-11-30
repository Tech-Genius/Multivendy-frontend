import react from 'react'
import './css/Signup.css'

function BuyerSignup() {
    return (
        <div className="signup">
            <div className="signup_inner">
                <h3>Create A Buyer<span> Account</span></h3>
                <div className="form_wrapper">
                    <form action="">

                        <div className="name">
                            <div className="form_item" id='first_name'>
                                <label htmlFor="first_name">First Name <span>*</span></label>
                                <input type="text" placeholder="Enter your first name" id='first_name' required />
                            </div>

                            <div className="form_item" id='last_name'>
                                <label htmlFor="last_name">Last Name <span>*</span></label>
                                <input type="text" placeholder="Enter your last name" id='last_name' required />
                            </div>
                        </div>

                        <div className="email">
                            <div className="form_item">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" placeholder="yourname@email.com" required id='email' />

                            </div>
                        </div>

                        

                        <div className="password">
                            <div className="form_item">
                                <label htmlFor="password">Password <span>*</span></label>
                                <input type="password" placeholder="Create a new password" required id='password' />

                            </div>
                        </div>

                        <div className="phone">
                            <div className="form_item">
                                <label htmlFor="phone">Phone <span>*</span></label>
                                <input type="phone" placeholder="Enter your mobile number" required id='phone' />

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
                                <button type="submit" id='btn__submit'>Sign Up</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default BuyerSignup