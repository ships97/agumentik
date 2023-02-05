import React from "react";
import FirstBox from "../Components/FirstBox";
import Navbar from "../Components/Navbar";
import SecBox from "../Components/SecBox";
import "../Styles/Home.css";
// import Login from "./Login";

const Home = () => {
    return(
    <>
    <div id="main" >
        <div class="first second">
            <Navbar/>
            <FirstBox/>
            <SecBox/>
        </div>
        <div class="third "></div>
    </div>
    </>
    ) 
};

export default Home;
