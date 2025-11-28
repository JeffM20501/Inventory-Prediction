import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


function SkeletomComp() {
  return (
    <Stack spacing={2}>
      {/* For variant="text", adjust the height via font-size */}
    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
    <Skeleton variant="text" sx={{ fontSize: '3rem', textAlign:'center' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
    <Skeleton variant="circular" width={40} height={40} />
    <Skeleton variant="rectangular" width={210} height={60} />
    <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  )
}

export default SkeletomComp