import reactLogo from './assets/react.svg'
import './css/Single.css'
import { Link } from 'react-router-dom'
function Single(props) {
    return (
        <>
        {/* <div className="single_wrapper">
            <div className="lst_prod">
             

                </div>
            </div>
                 */}
                    
                    <div className="lst_prod_box">
                <div className="img">
                <img src={props.product.image} alt="" />
                <div className="buttons">
                            <button title='Add To Cart'>Add To Cart</button>
                            {/* <button title='Add To Wishlist' id='wishlist'><i className="fa fa-heart"></i></button> */}
                        </div>
                </div>
                    <div className="t_and_p">
                    <Link to={`/store/${props.product.id}`}><h3>{props.product.title}</h3></Link>
                        <p>&#8358;{props.product.price}</p>
                    </div>

                    </div>

               
                    </>
    )
}
export default Single