import express from "express";
import {
  RegisterUser,
  UpadteUser,
  LoginUser,
  LogoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);
router.put("/update", UpadteUser);

export default router;
