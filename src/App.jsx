import { useState, useEffect } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header/Header'
import Home from './components/home/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Store from './components/store/Store'
import Sidebar from './components/store/Sidebar';
import Single from './components/store/Single';
import Categories from './components/store/Categories';
import CategoryProducts from './components/store/CategoryProducts';
import Search from './components/Search';
import ApiLoading from './components/loading/ApiLoading/ApiLoading';
import PostedDataLoading from './components/loading/PostedDataLoading/PostedDataLoading';
import Detail from './components/store/ProductDetail';
import VendorSignup from './components/account/VendorSignup';
import BuyerSignup from './components/account/BuyerSignup';
import VendorLogin from './components/account/VendorLogin';
import BuyerLogin from './components/account/BuyerLogin';
import BestVendors from './components/BestVendors';
import VendorLogout from './components/account/VendorLogout';
import BuyerLogout from './components/account/BuyerLogout';
import AddProduct from './components/dashboard/AddProduct';
import VendorDashboard from './components/dashboard/VendorDashboard';
import TagProducts from './components/store/TagProducts';
import VendorProducts from './components/dashboard/VendorProducts';

function App() {
   const location = useLocation()

   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth'
     });
   }, [pathname]);
 


   return (
      <>
        {location.pathname == "/"  && (<Header />) }
        {location.pathname == "/vendor-login"  && (<Header />) }
        {location.pathname == "/buyer-login"  && (<Header />) }
        {location.pathname == "/buyer-signup"  && (<Header />) }
        {location.pathname == "/vendor-signup"  && (<Header />) }
        
      

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='store' element={<Store />} />
            <Route path='apiloading' element={<ApiLoading />} />
            <Route path='posted-data-loading' element={<PostedDataLoading />} />
            <Route path='single' element={<Single />} />
            <Route path='sidebar' element={<Sidebar />} />
            <Route path='categories' element={<Categories />} />
            <Route path='category/:category_title/:category_id' element={<CategoryProducts />} />
            <Route path='store/tags/:tag' element={<TagProducts/>} />
            <Route path='vendor-signup' element={< VendorSignup/>} />
            <Route path='buyer-signup' element={< BuyerSignup/>} />
            <Route path='vendor-login' element={< VendorLogin/>} />
            <Route path='vendor-logout' element={< VendorLogout/>} />
            <Route path='buyer-logout' element={< BuyerLogout/>} />
            <Route path='buyer-login' element={< BuyerLogin/>} />
            <Route path='store/:product_id' element={<Detail />} />
            <Route path='best-sellers' element={<BestVendors />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='vendor-dashboard' element={<VendorDashboard />} />
            <Route path='vendor-products' element={<VendorProducts />} />
         </Routes>

      </>

   );
};

export default App;
