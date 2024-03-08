import { Box, CircularProgress } from "@mui/material";
import React, {  Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalWrapper } from "./utils/GlobalContext";
import "./CSS/Layout.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Admin from "./Pages/Admin";
import Teacher from "./Pages/Teacher";
import Student from "./Pages/Student";
import { SystemUpdateTwoTone } from "@mui/icons-material";
// import NextPage from "./Pages/NextPage";

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Box className="display-center">
            <CircularProgress className="display-center" />
          </Box>
        }
      >
        <GlobalWrapper>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
            {/* <Route path="/NextPage" element={<NextPage />} /> */}
          </Routes>
        </GlobalWrapper>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
