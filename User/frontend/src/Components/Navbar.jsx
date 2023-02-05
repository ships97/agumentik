import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box id='nav'>
        <Box id='navf' style={{display:"flex"}}>
            <Heading id='head1' size={"md"}>NFt</Heading>
            <Heading id='head2' size={"md"}>Eco</Heading>
        </Box>
        <Box id='navs'>
            <Heading id='head' size={"sm"}>Feature</Heading>
            <Heading id='head' size={"sm"}>Solution</Heading>
            <Heading id='head' size={"sm"}>Team</Heading>
            <Heading id='head' size={"sm"}>Contact</Heading>
            <Heading id='head' size={"sm"}><i class="fa-solid fa-magnifying-glass"></i></Heading>
            <Button id='butn'><Link to={"/signup"}>Sign Up</Link></Button>
        </Box>
    </Box>
  )
}

export default Navbar;
