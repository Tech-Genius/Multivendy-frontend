import react from 'react'
import './css/Login.css'

function BuyerLogin() {
    return (
        <div className="login">
            <div className="login_inner">
            <h3>Login To You Buyer<span> Account</span></h3>
                <div className="form_wrapper">
                    <form action="">




                    <div className="email">
                            <div className="form_item">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" placeholder="yourname@email.com" required id='email' />
                                <p className="error">This field is required</p>
                            </div>
                        </div>

                        

                        <div className="password">
                            <div className="form_item">
                                <label htmlFor="password">Password <span>*</span></label>
                                <input type="password" placeholder="Create a new password" required id='password' />
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
                                <button type="submit" id='btn__submit'>Login</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default BuyerLogin