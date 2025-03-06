import React from 'react'
import {VStack,Box,Container} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container bg={'lightblue'} height='70px' p='5' w='100%'>
 <VStack >
        <Box >
            <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        </Box>
    </VStack>
    </Container>
   
  )
}

export default Navbar
