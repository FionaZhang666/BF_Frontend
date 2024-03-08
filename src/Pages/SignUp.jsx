import { Box, Button, FormControlLabel, FormHelperText, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React, { useContext, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../CSS/Layout.css';
import '../CSS/Authentication.css';

// import LogoBar from '../Assets/logo_bar_white.png';

import { GlobalContext } from "../utils/GlobalContext";

import { backendCall } from "../utils/Network";

export default function SignUp() {
  const {
    user, setUser,
  } = useContext(GlobalContext);
  const redirectPath = useNavigate();

  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#74586F',
      },
    },
  });

  const [role, setRole] = useState('1');
  const inputUsername = useRef();
  const inputPassword = useRef();
  const inputPasswordDouble = useRef();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');


  function doSignUp() {
    let username = inputUsername.current.value.trim();
    let password = inputPassword.current.value.trim();
    let password2 = inputPasswordDouble.current.value.trim();
    if (username === "" || password === "" || password2 === "") {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (password !== password2) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setLoading(true);
    var option = {
      username: username,
      password: password,
      role: role,
      email: email,
      dateOfBirth: dateOfBirth,
    };
    setErrorMessage();
    console.log("do signup", option);
    redirectPath('/login');

    // TODO: Need to rewrite the implementation according to the background API

    // backendCall.post('/common/signup', option)
    //   .then(function (response) {
    //     console.log("Sign Up succeed! Redirect to Login");
    //     redirectPath('/login');
    //   })
    //   .catch(function (error) {
    //     console.log("Sign up failed.", error);
    //     setErrorMessage("Sign up failed.");
    //     setLoading(false);
    //   })
  }

  const FormInputs = useMemo(() => {
    return (<>

      

      <CssTextField fullWidth
        label="Username"
        size="small"
        inputRef={inputUsername}
      />
      <CssTextField fullWidth
        label="Password"
        size="small"
        type="password"
        inputRef={inputPassword}
      />
      <CssTextField fullWidth
        label="Re-enter Password"
        size="small"
        type="password"
        inputRef={inputPasswordDouble}
      />
      <CssTextField fullWidth
        label="Email"
        size="small"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CssTextField fullWidth
      label="Date of Birth"
      size="small"
      type="date"
      InputLabelProps={{ shrink: true }}
      value={dateOfBirth}
      onChange={(e) => setDateOfBirth(e.target.value)}
      />
    </>);
  }, [role]);

  return (<Box className="background">
    <Box className="middle-in-page">
      <Typography variant="h1" sx={{ mb: 2, textAlign: 'center' }}>
          Sign Up Administrator!
        </Typography>
      <Box
        component="img"
        sx={{ width: "420px" }}
        // src={LogoBar}
      />
      <Box className="form-body">
        {FormInputs}
        <FormHelperText sx={{ color: "#E63946", fontSize: "16px" }}>{errorMessage}</FormHelperText>
        <Box className="row-between">
          <Button
            variant="contained"
            color="third"
            sx={{ width: "150px" }}
            onClick={() => { redirectPath('/login') }}
            disabled={loading}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            color="third"
            sx={{ width: "150px" }}
            onClick={doSignUp}
            disabled={loading}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>);
}  