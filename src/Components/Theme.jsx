import { IconButton, Stack, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
export default function Theme(props) {

  const [theme, setTheme] = useState("light")
  useEffect(() => {
    props.handleTheme(theme)
  }, [theme])
  return (
    <Stack direction={'row'} alignItems={'center'}>
      {
        theme === "dark" ? (
          <IconButton onClick={() => setTheme('light')}>
            <BedtimeOutlinedIcon style={{ color: "gray" }} fontSize='large' />

          </IconButton>)
          : (
            <IconButton onClick={() => setTheme('dark')}>
              <WbSunnyOutlinedIcon style={{ color: "yellow" }} fontSize='large' />
            </IconButton>)
      }
    </Stack>
  )
}
