import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import "../Styles/FirstBox.css";
import img1 from "../Images/img1.png";

const FirstBox = ({image1,heading1,description1}) => {
  return (
    <Box id='fir'>
       <Box id='fir1'>
        <Heading id='headd'>{heading1}</Heading>
        <Text id='text'>{description1}</Text>
        <Box id='innerbox'>
            <Button id='buttn1'>Explore</Button>
            <Box id='inner1'>
                <Button id='buttn'><i id='icon' class="fa-solid fa-play"></i></Button>
                <Heading id='headd1' size={"xs"}>IntroVideo</Heading>
            </Box>
        </Box>
       </Box>
       <Box id='fir2'>
            <Image src={image1} />
       </Box>
    </Box>
  )
}

export default FirstBox;
