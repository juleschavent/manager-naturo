import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { StateContext } from '../Context/StateContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useQuery } from '@apollo/client';
import { GET_SYSTEMES } from '../assets/query';
// import { HandleSystemeChange } from '../assets/hooks';


const Systeme = () => {
  const { currSysteme, handleSystemeChange } = useContext(StateContext)

  const { loading, error, data } = useQuery(GET_SYSTEMES)
  if (loading) return <p>loading...</p>
  if (error) return <p>error</p>

  const systemeList = data.systemes.data

  // console.log(data.systemes.data)
  return (
    <Box mt="20px" maxWidth="300px">
      <FormControl fullWidth>
        <InputLabel>Systeme</InputLabel>
        <Select
          value={currSysteme}
          label="Systeme"
          onChange={(e) => handleSystemeChange(e, systemeList)}
        >
          {systemeList.map((systeme, index) => (
            <MenuItem key={index} value={systeme.attributes.name}>{systeme.attributes.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Systeme;