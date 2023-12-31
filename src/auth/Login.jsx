
import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'





const Login = () => {
  const navigate=useNavigate()
const [existsUser,setExistUser]=useState({})
console.log(existsUser)
  const[user,setUser]=useState({
  email:'',
    password:''
  })
 
  


const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})

}


useEffect(()=>{
    const existUser = JSON.parse(localStorage.getItem('user'))
    setExistUser(existUser)
},[])

  const handleLogIn=async()=>{
   if(existsUser.email===user.email){
    toast.success('Loged in SuccessFully')
    navigate('/')

    window.location.reload();
   
   }else{
    alert('User not found')
   }
    
  }

  
  return (
    <Box sx={{width:'100%',height:'100vh',background:'rgba(0,0,0,0.05)',display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}>
<Paper elevation={20}>
    <Box sx={{width:300,height:400,background:'white',color:"black"}}>
    <Stack direction='column' justifyContent='space-around' alignItems='center' sx={{width:'100%',height:'100%'}}>
      <Typography variant='h6' sx={{fontWeight:'600',color:'red'}}>Sign In</Typography>
    
      <TextField
          label="Email"
          id="outlined-size-small"
          name='email'
          value={user.email}
          onChange={handleChange}
          size="small"
        />
       
         <TextField
          label="Password"
          id="outlined-size-small"
          name='password'
       value={user.password}
       onChange={handleChange}
       size="small"
        />
        <Stack direction='column' sx={{width:'80%'}}>
      <Button size='small' variant='contained' onClick={handleLogIn} > Log In</Button>

<Button color='secondary' size='small'  sx={{marginLeft:'3rem'}} onClick={()=>navigate('/register')}>create  account </Button>

</Stack>
    </Stack>
    </Box>
    </Paper>
  </Box>
  )
}

export default Login