import express from "express";
import conn from "./db.js";
import {router} from "./routes/server.js";
import {router} from "./routes/Account.js";
import cors from "cors";
import bodyParser from "body-parser"; 
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api",router);
app.use("/api",router);

conn();
app.listen(8000,()=>{
    console.log("server is running on port");
})