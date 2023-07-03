import { Box, Button, Center, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signupAction } from '../redux store/action'
import axios from 'axios';

export default function Signup() {
    const dispatch=useDispatch()
    const store= useSelector(store=>store)
    console.log(store)
    const [sign, setSign]=useState({
        fullName:'',
        email:'',
        password:''
    })
    console.log(sign)
    const handleSign=(e)=>{
        e.preventDefault();
       
        axios.post('http://localhost:8080/users', sign)
       .then(res=>console.log(res))
        .catch(e=>console.log("object"))
  
    }
  return (
    <Box w={"300px"} m={"auto"} mt={"75px"}>
      <Flex direction={'column'}>
        <br />
        <Input placeholder='FullName' name='fullName' onChange={(e)=>setSign({...sign, [e.target.name]:e.target.value})}/><br />
        <Input placeholder='Email' name='email' onChange={(e)=>setSign({...sign, [e.target.name]:e.target.value})}/><br />
        <Input placeholder='Password' name='password'  onChange={(e)=>setSign({...sign, [e.target.name]:e.target.value})}/><br />
        <Button onClick={handleSign} >Sign up</Button>
      </Flex>
    </Box>
  )
}
