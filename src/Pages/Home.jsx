import { Stack } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Dictionary from '../Components/Dictionary'

const styles={
    root:{
        padding:"2rem 25rem",
        maxHeight:"auto",
        minHeight:"100vh"
    }
}
export default function Home(props) {
    const [word,setWord]=useState("");
    const handleWord=(data)=>{
        setWord(data)
    }
  return (
    <Stack sx={styles.root} direction={'column'} spacing={3}>
      <Header handleTheme={props.handleTheme} />
      <Search getWord={handleWord} />
      <Dictionary word={word} />
    </Stack>
  )
}
