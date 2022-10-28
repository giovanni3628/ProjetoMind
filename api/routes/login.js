import express from "express";
import { getLogin, addLogin } from "../controllers/login.js"

const routerLogin = express.Router();

routerLogin.post("/login", getLogin);

routerLogin.post("/register", addLogin);


export default routerLogin;