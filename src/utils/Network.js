// All requesting is asynchronous, so you must pass a data states parameter
// to get the result. Once the result is returned, the coresponding
// state will be updated

import axios from "axios";

const backendURL = "http://localhost:8080";
// const backendURL = "http://54.144.114.92:8080";

export const backendCall = axios.create({
    timeout: 1000,
    baseURL: backendURL
})