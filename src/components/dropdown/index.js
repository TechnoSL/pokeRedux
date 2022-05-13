import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {fetchPkm,fetchPkmType} from '../../redux/action.js'
import {Provider, useSelector,useDispatch} from "react-redux"
const Dropdown = ()=>{

    const [type, setType] = React.useState('');
    const dispatch = useDispatch()
 const types = ["All","Normal","Fighting","Flying","Poison","Ground","Rock","Bug","Ghost"
 ,"Steel","Fire","Water","Grass","Eletric","Psychic","Ice","Dragon","Dark","Fairy"]

    const handleChange = (event) => {
      setType(event.target.value);
      dispatch(fetchPkmType(event.target.value.toLowerCase()));
    };
        
    return  <Box sx={{ minWidth: 120 }}>
   <FormControl style={{color: "white"}} fullWidth>
    <InputLabel id="demo-simple-select-label">All</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      style={{color: "white"}}
      value={type}
      label="Age"
      onChange={handleChange}
    >
        {types.map(e=> <MenuItem  value={e}>{e}</MenuItem>)}
 
    </Select>
  </FormControl>
  </Box>
}
export default Dropdown;