function VendorLogout (){
    localStorage.removeItem('vendorLoginStatus')
    window.location.href='/vendor-login'
    return(
        <div></div>
    )
}
export default VendorLogout