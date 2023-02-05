import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import "../Styles/SecBox.css";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";

const SecBox = () => {
  return (
    <Box id='sec'>
      <Heading id='headd3'>Problem & Solutions</Heading>
      <Text id='text1'>A world where creators can use the ethereum blockchain to value their online expression in entirely new ways.</Text>
      <Box id='innbox'>
        <Box id='imgbox'>
            <Image src={img2} />
        </Box>
        <Box id='textbox'>
            <Box id='innn'>
                <Heading id='headd4' size={"md"}>The Problem</Heading>
                <Image id='imgg' src={img3} />
            </Box>
            <Text>The Problem - This is where we talk about the current problem briefly.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SecBox;
