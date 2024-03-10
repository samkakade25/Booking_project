import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose
.connect(`mongodb+srv://sameer:${process.env.MONGODB_PASSWORD}@cluster0.44sxgmr.mongodb.net/`
)
.then(() => 
app.listen(5000, () => 
    console.log("Connected To Database And Server is running")
)
)
.catch((e) => console.log(e));

