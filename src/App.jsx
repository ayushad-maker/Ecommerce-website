import React from "react"
import {Routes,Route, BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import Login from "./components/Auth/Login";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Register from "./components/Auth/Register";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute"
import Profile from "./Pages/Profile"
import Cartpage from "./Pages/Cartpage"
import PaymentSucess from "./Pages/PaymentSucess"



function App() {


  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/home"  element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="/about"  element={<ProtectedRoute><About/></ProtectedRoute>}/>
            <Route path="/product" element={<ProtectedRoute><Product/></ProtectedRoute>}/>
            <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
            <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cartpage/>}  />
            <Route path="/payment-success" element={<PaymentSucess/>}/>
          </Routes>
        </main>
        <Footer />
           <ToastContainer 
          position="top-center" 
          autoClose={2500} 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </BrowserRouter>   
  ) 
}

export default App
