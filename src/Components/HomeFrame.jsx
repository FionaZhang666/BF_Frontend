import {
  Box,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from '@mui/icons-material/School';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';


import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LogoBar from '../Assets/logo_bar_new.png';

import "../CSS/HomeFrame.css";
import "../CSS/Layout.css";
import { GlobalContext } from "../utils/GlobalContext";
import { useNavigate } from "react-router-dom";
import { backendCall } from "../utils/Network";

export default function HomeFrame({ currentPageName }) {
  const {
    user, setUser,
    openMenu,
    setOpenMenu,
    globalMessage, setGlobalMessage
  } = useContext(GlobalContext);

  const redirectPath = useNavigate();

  const [showGlobalMessage, setShowGlobalMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!globalMessage.content) {
      setShowGlobalMessage(false);
    } else {
      setShowGlobalMessage(true);
      setMessage(globalMessage.content);
    }
  }, [globalMessage]);

  const MenuTabNames = useMemo(() => {
    const menus = [];
     
    // 只要改commonButton来配置menu
    const commonButton = [
      ["Home", "/", <HomeIcon sx={{ color: "primary" }} />, 1],
      ["Teacher view", "/teacher", <InterpreterModeIcon sx={{ color: "primary" }} />, 1],
      ["Student View", "/student", <SchoolIcon sx={{ color: "primary" }} />, 1],
      
    ];

    // 根据admin的判断条件来改参数
    if (user.role === "admin") {
      commonButton.push(["Administrator", "/admin", <AccountCircleIcon sx={{ color: "primary" }} />, 1]);
    }
    

    for (const item of commonButton) {
      if (item[3] == 1) {
        // parent menu
        menus.push(
          <ListItem
            key={item[0]}
            disablePadding
            onClick={() => {
              redirectPath(item[1]);
              setOpenMenu(false);
            }}
          >
            <ListItemButton>
              <ListItemIcon>{item[2]}</ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>


        );
      } else {
        // secondary menu
        menus.push(
          <ListItem
            key={item[0]}
            disablePadding
            onClick={() => {
              redirectPath(item[1]);
              setOpenMenu(false);
            }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ paddingLeft: "53px", minWidth: "36px" }}>
                {item[2]}
              </ListItemIcon>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        );
      }
    }
    return menus;
  }, [user]);

  return (
    <>
      <Drawer
        className="drawer-menu"
        anchor="left"
        open={openMenu}
        // variant="persistent"
        onClose={() => {
          setOpenMenu(false);
        }}
        sx={{
          width: "300px",
          "& .MuiDrawer-paper": {
            width: "300px",
            boxSizing: "border-box",
            padding: "25px",
          },
        }}
      >
        <Typography color="primary" fontSize={30} sx={{ margin: "20px 10px" }}>
          Menu
        </Typography>
        {MenuTabNames}
        <Box sx={{ marginTop: "auto", marginBottom: 1 }}>
          <Button
            variant="contained"
            sx={{ marginLeft: 2.4, marginBottom: 2, width: 0.85 }}
            // token用于登录验证，可以根据需求改变token的存储名称和形式
            onClick={() => {
              setUser(null);
              localStorage.clear();
              delete backendCall.defaults.headers.common["token"];
            }}
          >
            Sign Out
          </Button>
          <Typography align="center">Copyright ©2023 by Blackfeet Learning App</Typography>
        </Box>
      </Drawer>
      <Box className="header-bar">
        <Box className="flex-row-left">
          <IconButton
            onClick={() => {
              setOpenMenu(true);
            }}
            sx={{ marginRight: "20px" }}
          >
            <MenuIcon sx={{ color: "black", fontSize: "30px" }} />
          </IconButton>
          <Box
            component="img"
            sx={{ height: "50px" }}
            src={LogoBar}
          />
        </Box>
        <Typography fontSize={24} fontWeight="bold">{currentPageName}</Typography>
        <Typography>{`Hello, ${user.name}`}</Typography>
      </Box>
      <Snackbar
        open={showGlobalMessage}
        autoHideDuration={3000}
        onClose={() => { setGlobalMessage({ ...globalMessage, content: null }); }}
        sx={{ marginRight: "20px" }}
      >
        <Alert
          variant="filled"
          onClose={() => { setGlobalMessage({ ...globalMessage, content: null }); }}
          severity={globalMessage.severity}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
