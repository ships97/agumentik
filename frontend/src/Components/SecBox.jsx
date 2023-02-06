import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import "../Styles/SecBox.css";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png";

const SecBox = ({image2,heading2,description2}) => {
  return (
    <Box id='sec'>
      <Heading id='headd3'>{heading2}</Heading>
      <Text id='text1'>{description2}</Text>
      <Box id='innbox'>
        <Box id='imgbox'>
            <Image src={img2} />
        </Box>
        <Box id='textbox'>
            <Box id='innn'>
              <Heading id='headd4' size={"md"}>The Problem</Heading>
              <Image id='imgg' src={img3} />
            </Box> 
            <Text id='text2'>The Problem - This is where we talk about the current problem briefly.</Text>
            <Box id='box1'>
              <Image id='imgg1' src={img4} />
              <Text id='text3'>Advanced Pinning</Text>
            </Box>
            <Box id='box2'>
              <Image id='imgg2' src={img5} />
              <Text id='text4'>Relative positioning with containers</Text>
            </Box>
            <Box id='box3'>
              <Image id='imgg3' src={img6} />
              <Text id='text5'>Percentage-based geometry</Text>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SecBox;
