import React, { useState, createContext, useEffect, useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import "../CSS/Layout.css";
import { backendCall } from "./Network";
import { CircularProgress } from "@mui/material";


export const GlobalContext = createContext(null);
// const GlobalContext = createContext(null);

const pageWithoutLogin = new Set(["/login", "/signup"]);

export function GlobalWrapper({ children }) {
  // const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const [globalMessage, setGlobalMessage] = useState({
    severity: null,
    content: null,
  });

  // 测试用
  const [mockUser, setMockUser] = useState({
    role:"admin",
    token: "xxxxxxx",
    name: "Fiona",
  });


  const globals = {
    openMenu,
    setOpenMenu,
    user,
    setUser,
    globalMessage,
    setGlobalMessage,
  };

  useEffect(() => {
    if (user !== undefined) {
      return;
    }

    let token = localStorage.getItem("token");
    if (token === null) {
      setUser(null);
      return;
    }

    // Testing use
    setUser(mockUser);

    // 后端调用，使用token登录
    // backendCall.get("/common/tokenlogin", { headers: { token: token } })
    //   .then(function (response) {
    //     if (response.data.token) {
    //       backendCall.defaults.headers.common["token"] = response.data.token;
    //       setUser(response.data);
    //     }
    //     else {
    //       localStorage.clear();
    //       setUser(null);
    //     }
    //   })
    //   .catch(function (error) {
    //     localStorage.clear();
    //     setUser(null);
    //   });
  }, [user]);

  if (user === undefined) {
    return <CircularProgress className="display-center"/>;
  }

  if (user === null && !pageWithoutLogin.has(location.pathname)) {
    return <Navigate to="/login" />;
  }

  return (
    <GlobalContext.Provider value={globals}>{children}</GlobalContext.Provider>
  );
}
