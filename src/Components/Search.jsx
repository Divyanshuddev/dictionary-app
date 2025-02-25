import { Input, Stack } from '@mui/material'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const styles={
    root:{
        fontSize:"1.3rem",
        backgroundColor:"rgba(224, 217, 227, 0.8)",
        padding:"0.6rem",
        borderRadius:"1rem",
    }
}
export default function Search(props) {
    const [word,setWord]=useState("");
    const handleOnChange=(e)=>{
        const keyWord = e.target.value;
        setWord(keyWord)
        props.getWord(keyWord)
    }
  return (
    <Stack>
      <Input  disableUnderline={true} className="input"     sx={styles.root}  endAdornment={<SearchOutlinedIcon style={{color:"rgba(182, 92, 229, 0.8)"}} fontSize='large' />} name='word' value={word} onChange={handleOnChange}   />
    </Stack>
  )
}
