import reactLogo from './assets/react.svg'
import './css/Single.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import refreshPage from './Categories'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Single (props) {


    return (
        <>
            {/* <div className="single_wrapper">
            <div className="lst_prod">
             

                </div>
            </div>
                 */}

            <div className="lst_prod_box">
                <div className="img" >
                    <img src={props.product.image} alt="" />
                    <div className="buttons">
                        <button title='Add To Cart'>Add To Cart</button>
                        <Link onClick={refreshPage} to={`/store/${props.product.id}`}><button title='View Product'>View Product</button></Link>
                    </div>
                </div>
                <div className="t_and_p">
                    <h3>{props.product.title}</h3>
                    <p>&#8358;{props.product.price}</p>
                </div>

            </div>


        </>
    )
}
export default Single