import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './pages/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRouter from './context/PrivateRouter'

const App = () => {
  return (
   <Box>
      <Navbar/>
      <Routes>
        <Route  path='/' element={
          <PrivateRouter>
            <Home/>
          </PrivateRouter>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   </Box>
  )
}

export default App
