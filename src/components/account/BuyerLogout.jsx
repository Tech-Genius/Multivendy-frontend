function BuyerLogout (){
    localStorage.removeItem('buyerLoginStatus')
    window.location.href='/buyer-login'
    return(
        <div></div>
    )
}
export default BuyerLogout