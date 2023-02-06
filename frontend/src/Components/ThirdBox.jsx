import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import img8 from '../Images/img8.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';
import img9 from '../Images/img9.png';
import "../Styles/ThirdBox.css";

const ThirdBox = () => {
  return (
    <Box id='thi'>
      <Box id='thifir'>
        <Heading id='had1' size={"md"}>Features</Heading>
        <Box id='ime1'>
            <Text id='text11'>ators can use the ethereum ue their online expression in s</Text>
            <Text id='text12'>rne text here</Text>
            <Text id='text13'>rne text here</Text>
            <Text id='text14'>rne text here</Text>
            <Text id='text15'>rne text here</Text>
            <Text id='text16'>rne text here</Text>
        </Box>
        <Button id="button1">Learn more</Button>
      </Box>
      <Box id='thisec'>
        <Image id='ime2' src={img8} />
        <Box id='ifbox'>
            <Box id='box11'>
                <Image id='imgg1' src={img5} />
                <Text id='text31'>User get from us</Text>
                <Text id='plus1'>+</Text>
            </Box>
            <hr id='hr1'/>
            <Box id='box21'>
                <Image id='imgg2' src={img6} />
                <Text id='text41'>User get from us</Text>
                <Text id='plus2'>+</Text>
            </Box>
            <hr id='hr1'/>
            <Box id='box31'>
                <Image id='imgg3' src={img9} />
                <Text id='text51'>User get from us</Text>
                <Text id='plus3'>+</Text>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ThirdBox;
