import { Chip, Stack, Typography } from '@mui/material'
import React from 'react'

const styles={
    textStyle:{
        fontSize:"1.3rem",
        fontWeight:"bold"
    }
}
const ChipsSection = (props) => {
  return (
    <Stack direction={'row'} alignItems={'flex-start'} spacing={2} sx={{width:700,height:"auto"}}>
    <Typography sx={styles.textStyle}>{props.title}</Typography>
    <Stack direction={'row'} spacing={1} flexWrap={'wrap'} rowGap={1}>
    {
        props.list.map((an, index) => {
            return (
                <Chip key={index} label={an} color={props.color} variant="outlined" />
            )
        })
    }
    </Stack>
</Stack>
  )
}

export default ChipsSection
