import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  CardActionArea,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState, useRef, useContext } from "react";

import HomeFrame from "../Components/HomeFrame";

import '../CSS/Layout.css';
import '../CSS/Home.css';

import { backendCall } from "../utils/Network";
import { GlobalContext } from "../utils/GlobalContext";

export default function Home() {
  const {
    user,
    setGlobalMessage
  } = useContext(GlobalContext);


  return (<>
    <HomeFrame currentPageName="Home" />
    <Box className="main-content">
      <Typography variant="h1">This is Home Page.</Typography>
      <Typography>Hi! {user.name}</Typography>
    </Box>
  </>);
}
