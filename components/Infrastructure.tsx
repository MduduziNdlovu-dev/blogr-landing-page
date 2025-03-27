import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Infrastructure = () => {
  return (
    <Box className="infrastructure" sx={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      gap:'2rem',
      padding:"0rem 5rem"
    }}>
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Image src="/images/illustration-phones.svg" alt='illustration-phones' width={500} height={500} />

      </Box>
      <Box sx={{
        color: "white"
      }}>
        <Typography sx={{
          fontSize:"1.5rem",
          marginBottom:"1rem"
        }}>
          State of the Art Infrastructure 
        </Typography>
        <Typography sx={{
          color: "hsl(206, 18.30%, 63.50%)",
          paddingRight:"5rem"
        }}>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </Typography>
      </Box>
    </Box>
  )
}

export default Infrastructure