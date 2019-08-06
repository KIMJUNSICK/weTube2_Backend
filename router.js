import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User"));
userRouter.get("/edit", (req, res) => res.send("User Edit"));
userRouter.get("/password", (req, res) => res.send("User Password"));
