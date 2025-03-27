import React from 'react'
import Navbar from './Navbar'
import { Box, Button, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
    }} className="header-background">
        <Navbar/>
        <Typography variant='h1' sx={{
            color: 'hsl(0, 0%, 100%)',
            fontSize: '2.8rem',
            fontFamily:'overpass',
            fontWeight: 500,
            marginBottom: '1rem',
            maxWidth: '80%',
        }}>
            A modern publishing platform
        </Typography>
        <Typography
            variant='body1'
            sx={{
                color: 'hsla(0, 0.00%, 91.40%, 0.83)',
                fontSize: '1rem',
                fontFamily:'overpass',
                fontWeight: 300,
                marginBottom: '1rem',
                maxWidth: '80%',
            }}
        >
            Grow your audience and build your online brand
        </Typography>
        <Box sx={{
            display: 'flex',
            gap: '1rem',
            marginTop:"2rem",
            marginBottom:"4rem",
        }}>
        <Button variant="contained" sx={{
            color: 'hsl(353, 100%, 67%)',
            backgroundColor: 'hsl(0, 0%, 100%)',
            borderRadius: "2rem",
            textTransform: 'none',
            fontWeight: 600,
            padding: '0.7rem 2rem',
            
        }}>Start for Free</Button>
        <Button variant="outlined"
            sx={{
                color: 'white',
                borderRadius: "2rem",
                textTransform: 'none',
                fontWeight: 600,
                padding: '0.7rem 2rem',
                borderColor:"white"
                
            }}
        >Learn More</Button>

        </Box>
        
    </Box>
  )
}

export default Header