import React, { useContext, useState } from 'react'
import { Container,Box,Input,Button,VStack,HStack ,Heading} from '@chakra-ui/react'
import { AuthContext } from '@/context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword] = useState("")
    const[token,setToken]=useState("")
    const[error,setError] = useState(false)
    const{login,handleLogin,handleLogout} = useContext(AuthContext)
    const navigate = useNavigate("")

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            const response = await axios({
                method:"POST",
                url:`https://fakestoreapi.com/auth/login`,
                data:{
                    username,password
                }
            })
            if(response.data){
                console.log(response.data.token)
                const {token}=response.data
                setToken(token)
                handleLogin()
                // navigate("/home")
            }
        }
        catch(error){
            console.log(error.response.data)
            setError(error.response.data)
            handleLogout()
            alert(error.response.data)
        }
    }
  return (
    <Container border={'1px solid #ddd'} w='fit-content' mt={'10%'}>
        <VStack>
            <Box p='13%'>
                <form onClick={handleSubmit}>
                    <Heading ml={'40%'}fontSize={'1.5rem'}>Login</Heading>
                    <Input type="text"placeholder='Enter Username'value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                    <Input type="password"placeholder="Enter Password"value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <Button ml={'40%'} bg={'blue.500'} >Login</Button>
                </form>
            </Box>
        </VStack>
    </Container>
  )
}

export default Login
