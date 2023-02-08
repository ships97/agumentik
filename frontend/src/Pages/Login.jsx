import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // console.log(email,password);
  const navigate = useNavigate();

  const handleSubmit = () => {
     const payload = {
        email,
        password
     }
      // console.log(payload);
      fetch("https://backend-augmentic-ships.onrender.com/user/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.token)
        console.log(res.token);
        alert("Login successfull");
        // setToken(res.token);
        navigate("/");
      })
  }

  return (
    //   <div style={{width:"100%", boxSizing:"content-box",overflowY:"scroll",marginTop:"20px",marginBottom:"20px"}}><h3>Token : {token}</h3></div>

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Log in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => {setEmail(e.target.value)}} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => {setPassword(e.target.value)}} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                onClick={handleSubmit}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login;
