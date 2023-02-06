import { Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FirstBox from "../Components/FirstBox";
import Navbar from "../Components/Navbar";
import SecBox from "../Components/SecBox";
import "../Styles/Home.css";
import img7 from "../Images/img7.png";
import ThirdBox from "../Components/ThirdBox";
import FourBox from "../Components/FourBox";
import { getContent } from "../utils/api";

const Home = () => {
    const [content,setContent] = useState({});
    useEffect(()=>{
        getContent().then((res)=>setContent(res.data[0]));
    },[])
    return(
    <>
    <div id="main" >
        <div class="first second">
            <Navbar/>
            <FirstBox heading1={content.heading1} image1={content.image1} description1={content.description1} />
            <SecBox heading2={content.heading2} image2={content.image2} description2={content.description2}/>
            <Button id="button">Learn more</Button>
        </div>
        <div class="third ">
            <Image id="nex" src={img7} />
            <ThirdBox/>
            <FourBox/>
        </div>
    </div>
    </>
    ) 
};

export default Home;
