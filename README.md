# Frontend Mentor - Blogr Landing Page Solution

This is my solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). This project helped me improve my frontend development skills by implementing a fully responsive and interactive landing page.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Live Demo](#live-demo)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Key Learnings](#key-learnings)
  - [Future Enhancements](#future-enhancements)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Blogr Landing Page Screenshot](./screenshot.jpg)

### Live Demo

- [Solution URL](Solution) ([Add your solution URL here](https://github.com/MduduziNdlovu-dev/blogr-landing-page))
- [Live Site](Live Site) ([Add your live site URL here](https://blogr-landing-page-mocha.vercel.app))

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JavaScript library
- [Next.js](https://nextjs.org/) - React framework
- [Material-UI](https://mui.com/) - UI component library

### Key Learnings

Throughout this project, I enhanced my understanding of:

- Building responsive layouts using **CSS Grid** and **Flexbox**
- Implementing **mobile-first design principles**
- Creating **dropdown navigation menus** using Material-UI
- Using **Next.js** for server-side rendering and performance optimization

Here’s a snippet of a navigation component I implemented:

```tsx
import React, { useState, MouseEvent } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Blogr</Typography>
        <Button onClick={handleClick}>Menu</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
```

### Future Enhancements

In future iterations, I plan to:

- Improve **animations and transitions** for a smoother user experience
- Implement **dark mode support** for better accessibility
- Enhance **SEO performance** using Next.js best practices

### Useful Resources

- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Helped me refine my layout
- [Material-UI Documentation](https://mui.com/) - Essential for implementing the UI components
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Always a great reference for HTML, CSS, and JavaScript

## Author

- Website - []()
- Frontend Mentor - []()
- LinkedIn - []()

## Acknowledgments

A big thank you to the Frontend Mentor community for their valuable feedback and insights!