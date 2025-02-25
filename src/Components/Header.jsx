import React from 'react'
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import { Stack } from '@mui/material';
import Theme from './Theme';
export default function Header(props) {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <ImportContactsOutlinedIcon fontSize='large' style={{color:"gray",width:100,height:100}} className='iconHead' />
      <Theme handleTheme={props.handleTheme} />
    </Stack>
  )
}
