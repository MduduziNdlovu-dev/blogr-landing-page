import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Introduction = () => {
  return (
    <Box component="section" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    }}>
        <Typography variant='h2' sx={{
            fontSize:"1.5rem",
            marginTop:"4rem",
            fontWeight:300
        }}>
            Designed for the future
        </Typography>
        <Box sx={{
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            gap:'5rem'
            
        }}>
            {/* this box will be the left hand information */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: "1rem",
                marginLeft:"8rem",
                padding:"4.5rem"
            }}>
                <Typography variant='h3' sx={{
                    fontSize:"1.5rem",
                    marginBottom:"1rem",
                    fontWeight:400
                }}>
                    Introducing an extensible editor
                </Typography>
                <Typography
                    sx={{
                        fontSize:"0.8rem",
                        paddingRight:"2.2rem",
                        marginBottom:"2rem",
                        color:"hsl(207, 13%, 34%)"

                    }}
                >
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                </Typography>
                <Typography variant='h3' sx={{
                    fontSize:"1.5rem",
                    marginBottom:"1rem",
                    fontWeight:400

                }}>
                    Robust content management
                </Typography>
                <Typography 
                    sx={{
                        fontSize:"0.8rem",
                        paddingRight:"2.4rem",
                        color:"hsl(207, 13%, 34%)"

                    }}
                >
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </Typography>


            </Box>
            {/* This will have the illustration and background */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position:"relative",
                    marginRight:0,

                }}
            >
                <Image src="/images/illustration-editor-desktop.svg" alt="Editor Illustration" width={500} height={500}
                    
                />

            </Box>
        </Box>
    </Box>
  )
}

export default Introduction