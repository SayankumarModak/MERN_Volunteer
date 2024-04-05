import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbconnection } from "./database/dbconnect.js";
import  messageRouter  from "./router/messageRouter.js";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FORNTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbconnection();

export default app;
