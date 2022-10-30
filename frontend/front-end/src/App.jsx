import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Store from './components/Store'
import Sidebar from './components/Sidebar';
import Single from './components/Single';
import Categories from './components/Categories';


function App() {


   return (
      <>
         <Header />
         {/* <Sidebar /> */}

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='store' element={<Store />} />
            <Route path='single' element={<Single />} />
            <Route path='categories' element={<Categories />} />
         </Routes>


      </>

   );
};

export default App;
