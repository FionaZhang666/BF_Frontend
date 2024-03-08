
import React, { useEffect, useMemo, useState, useRef, useContext } from "react";
import { Typography, Box } from '@mui/material';
import HomeFrame from '../Components/HomeFrame';
import '../CSS/Layout.css';
import '../CSS/NextPage.css'; 
import { GlobalContext } from "../utils/GlobalContext";


export default function NextPage() {

  const {
    user,
    setGlobalMessage
  } = useContext(GlobalContext);

  return (
    <>
      <HomeFrame currentPageName="NextPage" />
      <Box className="main-content">
        <Typography variant="h1">Teacher Detail Page</Typography>
      
      </Box>
    </>
  );
}
