import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import data from '../data.json'; 
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: "2rem 12rem",
      background: " hsl(240, 19.30%, 11.20%)",
      color: "white",
      borderTopRightRadius: "6rem"
    }}>
      {/* Logo */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          <Image src="/images/logo.svg" alt="Logo" width={80} height={30} />
        </Typography>
      </Box>

      {/* Footer Sections */}
      {Object.entries(data.footerLinks).map(([section, links]) => (
        <Box key={section} sx={{ display: 'flex', flexDirection: 'column', gap: "0.5rem" }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: "0.5rem", fontSize:'0.75rem' }}>
            {section}
          </Typography>
          {links.map((link) => (
            <Link key={link.name} href={link.url} sx={{ textDecoration: "none", color: "hsl(236, 44.20%, 71.20%)", "&:hover": { textDecoration: "underline" } }}>
              {link.name}
            </Link>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default Footer;
