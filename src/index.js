import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/Layout.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CookiesProvider } from "react-cookie";

const theme = createTheme({
  palette: {
    // use tools to pick color
    // https://material.io/resources/color/#!/?view.left=0&view.right=0
    primary: {
      main: "#ffc02d",
      contrastText: "#000",
      dark: "#e6a100",
      light: "#ffe099"
    },
    secondary: {
      main: "#808080",
      contrastText: "#fff",
      dark: "#2e2e2e",
      light: "#bebebe"
    },
    third: {
      main: "#463F3A",
      contrastText: "#fff",
      dark: "#272321",
      light: "#A29185",
    },
  },
  typography: {
    h1: {
      fontWeight: "bold",
      fontSize: 36,
      margin: "40px 0px",
    },
    h2: {
      fontWeight: "bold",
      fontSize: 27,
      margin: "30px 0px",
    },
    h3: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
    button: {
      textTransform: "none",
    },
    fontFamily: `Calibri, sans-serif`,
    fontSize: 14,
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          // Set your desired font size here
          fontSize: '18px', // Example font size
        },
      },
    },
    MuiTableHeader: {
      styleOverrides: {
        root: {
          fontSize: '20px',
          fontWeight: "bold",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginBottom: '5px', 
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        component: "div",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "filled" && {
            backgroundColor: "white",
            borderRadius: 4,
            "& .MuiFilledInput-input": {
              paddingTop: "21px",
              paddingBottom: "12px",
            },
          }),
        }),
      },
    },
  },

});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
