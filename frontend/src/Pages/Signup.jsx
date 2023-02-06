import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const Signup = () => {
  const [first_name, setFName] = useState();
  const [last_name, setLName] = useState();
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  // console.log(fname,lname,contact,email,password);

  const handleSubmit = () => {
     const payload = {
        first_name,
        last_name,
        contact,
        email,
        password
     }
      console.log(payload);
      fetch("http://localhost:8080/user/signup",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Signup successful");
        // navigate("/login");
      })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="fname">
              <FormLabel>First Name</FormLabel>
              <Input type="text" onChange={(e) => {setFName(e.target.value)}} />
            </FormControl>
            <FormControl id="lname">
              <FormLabel>Last Name</FormLabel>
              <Input type="text" onChange={(e) => {setLName(e.target.value)}} />
            </FormControl>
            <FormControl id="contact">
              <FormLabel>Contact number</FormLabel>
              <Input type="number" onChange={(e) => {setContact(e.target.value)}} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => {setEmail(e.target.value)}} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => {setPassword(e.target.value)}} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                onClick={handleSubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Signup;
