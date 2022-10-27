import reactLogo from './assets/react.svg'
import './css/Single.css'

function Single(props) {
    return (
        <>
        {/* <div className="single_wrapper">
            <div className="lst_prod">
             

                </div>
            </div>
                 */}
                    
                    <div className="lst_prod_box">
                        <img src={reactLogo} alt="" />
                        <h3>{props.product.title}</h3>
                        <p>${props.product.vendor.username}</p>
                        <div className="buttons">
                            <button title='Add To Cart'><i className="fa fa-cart-plus"></i></button>
                            <button title='Add To Wishlist' id='wishlist'><i className="fa fa-heart"></i></button>
                        </div>
                    </div>

               
                    </>
    )
}
export default Single