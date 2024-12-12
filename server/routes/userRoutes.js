import express from "express";
const router = express.Router();
import { createUserController } from "../controllers/userController";

router.post("/create-user", createUserController);


export default router;
