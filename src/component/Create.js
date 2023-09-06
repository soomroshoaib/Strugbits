import  React ,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/Showslice';
import { useNavigate } from 'react-router-dom';


export default function Create() {

    const [users, setUsers] = useState({})
    const dispatch =  useDispatch()
     console.log(dispatch(createUser()))
    const navigate = useNavigate()



   const getUser =(e)=>{
    setUsers({...users, [e.target.name]: e.target.value})
    //console.log(users)
   }

   const handlesubmit = (e) =>{
    e.preventDefault()
    dispatch(createUser(users))
    console.log(users)
    navigate("/")


   }

  return (

  
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'column',
        '& > :not(style)': { m: 1 }}}>
              <h2> Enter your data</h2>
        <form style={{display:'flex', flexDirection:'column', marginTop:'50px'}} onSubmit={handlesubmit}>
         <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
        type='Name'
        name="name"
        onChange={getUser}
      /> 
      <TextField
        helperText="Please enter your email "
        id="demo-helper-text-aligned-no-helper"
        label="email"
        type='email'
        name="email"
        onChange={getUser}
      />   
       <TextField
        helperText="Please enter your Age "
        id="demo-helper-text-aligned-no-helper"
        label="Age"
        type='Age'
        name="age"
        onChange={getUser}
      />  
       <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        
      >
        <FormControlLabel value="female" name="gender" onChange={getUser}  control={<Radio />} label="Female" />
        <FormControlLabel value="male" name="gender"  onChange={getUser} control={<Radio />} label="Male" />

      </RadioGroup>
    </FormControl> 
      <button type='submit' style={{height:'50px'}} > Submit </button>
        </form>
      
    </Box>
  );
}