import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const MoreInfo = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      marginTop:'9rem',
      gap:'4rem',
      justifyContent:'center',
      alignItems:'center'

    }}>
      <Box sx={{
        marginLeft:'-11rem',
      }}>
        <Image src="/images/illustration-laptop-desktop.svg" alt='illustration-laptop-desktop' width={600} height={500} />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingRight:'10rem',
        
      }}>
        <Typography
        sx={{
          fontSize:"1.5rem",
          marginBottom:"1rem"
        }}        
        >Free, open, simple</Typography>
        <Typography
          sx={{
            color: "hsl(0, 0.00%, 45.90%)",
            marginBottom:"3rem"
          }}
        >
          Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </Typography>

        <Typography
          sx={{
            fontSize:"1.5rem",
            marginBottom:"1rem"
          }}
        >Powerful tooling</Typography>
        <Typography
          sx={{
            color: "hsl(0, 0.00%, 45.90%)",
            marginBottom:"3rem"
          }}
        >
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
        </Typography>
      </Box>
      
    </Box>
  )
}

export default MoreInfo