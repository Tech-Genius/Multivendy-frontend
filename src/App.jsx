import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Store from './components/Store'
import Sidebar from './components/Sidebar';
import Single from './components/Single';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import Search from './components/Search';
import Tab from './components/Tab';
import Detail from './components/ProductDetail';
import VendorSignup from './components/VendorSignup';
import BuyerSignup from './components/BuyerSignup';
import VendorLogin from './components/VendorLogin';
import BuyerLogin from './components/BuyerLogin';
import BestVendors from './components/BestVendors';
import VendorLogout from './components/VendorLogout';
import BuyerLogout from './components/BuyerLogout';
import AddProduct from './components/AddProduct';
import VendorDashboard from './components/VendorDashboard';
import TagProducts from './components/TagProducts';

function App() {
   const location = useLocation()


   return (
      <>
        {location.pathname == "vendor-login" || location.pathname == "/"  && (<Header />) }
        
      

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='store' element={<Store />} />
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
         </Routes>

      </>

   );
};

export default App;
