'use client'

import { useState } from "react";
import Login from "../_component/loginPage";
import RestaurantSignUp from "../_component/signUpPage";
import Header from "../_component/RestaurantHeader";
import './styles.css';
import Footer from "../_component/Footer";

const Restaurant=()=>{
    const [login,setLogin] = useState(true);
    return (
        <>
        <div className="container">
            <Header />
            <h1>Restaurant Login/SignUp</h1>
            {login? <Login /> : <RestaurantSignUp />}
            <div><button className = "button-link" onClick={()=>setLogin(!login)}>
                {login?"Don't have an account?Sign up":"Already have an account? Sign in"}
            </button></div>
        </div>
        <Footer />
        </>
    );
}

export default Restaurant;