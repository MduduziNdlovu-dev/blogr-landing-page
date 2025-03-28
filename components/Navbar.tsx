'use client'
import React, { useState, MouseEvent } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<string>("");

  const handleClick = (event: MouseEvent<HTMLButtonElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu("");
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "transparent",
        boxShadow: "none",
        padding: "0 2rem",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Blogr
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "2rem" }}>
          {/* Product Dropdown */}
          <Button sx={{ color: "white", fontWeight: "bold" }} onClick={(e) => handleClick(e, "product")}>
            Product ▼
          </Button>
          <Menu anchorEl={anchorEl} open={openMenu === "product"} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Overview</MenuItem>
            <MenuItem onClick={handleClose}>Pricing</MenuItem>
            <MenuItem onClick={handleClose}>Marketplace</MenuItem>
            <MenuItem onClick={handleClose}>Features</MenuItem>
            <MenuItem onClick={handleClose}>Integrations</MenuItem>
          </Menu>

          {/* Company Dropdown */}
          <Button sx={{ color: "white", fontWeight: "bold" }} onClick={(e) => handleClick(e, "company")}>
            Company ▼
          </Button>
          <Menu anchorEl={anchorEl} open={openMenu === "company"} onClose={handleClose}>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Team</MenuItem>
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Careers</MenuItem>
          </Menu>

          {/* Connect Dropdown */}
          <Button sx={{ color: "white", fontWeight: "bold" }} onClick={(e) => handleClick(e, "connect")}>
            Connect ▼
          </Button>
          <Menu anchorEl={anchorEl} open={openMenu === "connect"} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
            <MenuItem onClick={handleClose}>Newsletter</MenuItem>
            <MenuItem onClick={handleClose}>LinkedIn</MenuItem>
          </Menu>
        </Box>

        {/* Login and Signup */}
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button sx={{ color: "white", fontWeight: "bold" }}>Login</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#ff4b2b",
              fontWeight: "bold",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#ffeded" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
