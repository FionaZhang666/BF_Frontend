import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/Layout.css";
import "../CSS/Authentication.css";

// import LogoBar from "../Assets/logo_bar_white.png";

import { GlobalContext } from "../utils/GlobalContext";

import { backendCall } from "../utils/Network";

export default function Login() {
  const {
    setUser,
    mockUser
  } = useContext(GlobalContext);
  const redirectPath = useNavigate();

  const inputUsername = useRef();
  const inputPassword = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#74586F",
      },
    },
  });

  function login() {
    let username = inputUsername.current.value.trim();
    let password = inputPassword.current.value.trim();
    if (username === "" || password === "") {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    setLoading(true);
    
    // 测试用，写死用户数据
    let token = "xxxxxx";
    setUser(mockUser);
    localStorage.setItem('token', token);
    redirectPath("/");

    // // 使用用户名密码登录
    // backendCall.get(
    //     `/common/login?username=${username}&password=${password}`
    //   )
    //   .then(function (response) {
    //     let userInfo = response.data;
    //     // 后台给到前端token，以后可以用token登录而不需要用户输入用户名密码
    //     backendCall.defaults.headers.common["token"] = userInfo.token;
    //     // needs to be replaced by token
    //     localStorage.setItem('token', userInfo.token);
    //     console.log("Login", userInfo);
    //     setUser(userInfo);
    //     redirectPath("/");
    //   })
    //   .catch(function (error) {
    //     setErrorMessage("Login failed!");
    //     console.log(error);
    //     setLoading(false);
    //   });
  }

  return (
    <Box className="background">
      <Box className="middle-in-page">
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          Welcome to the Admin Panel!
        </Typography>


        <Box className="form-body">
          <Box>
            <Typography fontWeight="bold">Username</Typography>
            <CssTextField fullWidth size="small" inputRef={inputUsername} />
          </Box>
          <Box>
            <Typography fontWeight="bold">Password</Typography>
            <CssTextField
              fullWidth
              size="small"
              inputRef={inputPassword}
              type="password"
            />
          </Box>
          <FormHelperText sx={{ color: "#E63946", fontSize: "16px" }}>
            {errorMessage}
          </FormHelperText>

          <Box className="row-between" sx={{ mt: "30px" }}>
            <Button
              variant="contained"
              color="third"
              sx={{ width: "150px" }}
              onClick={() => {
                redirectPath("/signup");
              }}
              disabled={loading}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              color="third"
              sx={{ width: "150px" }}
              type="password"
              onClick={() => {
                login();
              }}
              disabled={loading}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
