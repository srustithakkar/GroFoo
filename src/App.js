import React from 'react';
import './App.css';
import Index from "./components/Index";
import AboutUs from   "./components/Aboutus";
import Blog from   "./components/Blog";
import ContactUs from   "./components/Business_contact_us";
import Faq from   "./components/Faq";
import Login from   "./components/Login";
import Policy from   "./components/Policy";
import Register from   "./components/Register";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
    return (
        <div className="h-100">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App