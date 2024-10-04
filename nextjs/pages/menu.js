import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button, TextField } from "@mui/material"; // Use by LoginForm
import useBearStore from "@/store/useBearStore";
import React, { useState } from 'react';

function Home() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(inputText);
  };
  return (
    <Box textAlign= "center" p={4} sx={{border:1}}>
    <Typography variant="h4" gutterBottom>
      Start menu
    </Typography>

    <Grid container spacing={2}>
      <Grid size={{xs: 6, md: 4}}>
        <Button variant="contained" color="primary" href="/setting">
          Setting
        </Button>
      </Grid>

      <Grid size={{xs: 6, md: 4}}>
        <Button variant="contained" color="primary" href="/login">
          Login
        </Button>
      </Grid>

      <Grid size={{xs: 6, md: 4}}>
        <Button variant="contained" color="primary" href="/register">
          Register
        </Button>
      </Grid>
    </Grid>
  </Box>
  
  );
}

export default Home;
