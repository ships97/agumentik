import React from 'react';
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import img10 from "../Images/img10.png";
import "../Styles/FourBox.css";

const FourBox = () => {
  return (
    <Box id='forbox'> 
        <Heading id='hde1'>EcoFetra Labs</Heading>
        <Text id='txt22'>A world where creators can use the ethereum blockchain to value their online expression in entirely new ways.</Text>
        <Image id='ige' src={img10} />
    </Box>
  )
}

export default FourBox;
