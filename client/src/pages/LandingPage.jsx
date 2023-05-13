import React from 'react';
import NavBar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";
import Login from "../components/landingPage/Login"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function LandingPage(props) {
  return (
    <div className='h-screen max-h-min flex flex-col'>
            {/* <ToastContainer />  */}
            <NavBar></NavBar>
            <Login></Login>
            <br />
           <Footer />
    </div>
  )
}
