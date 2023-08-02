import express, { Router } from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv';
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app= express();
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use("/",Routes);

const PORT= process.env.PORT || 8000;

const username=process.env.DB_Username;
const password=process.env.DB_Password;

const URL=process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@crud-app.uqoyrsf.mongodb.net/?retryWrites=true&w=majority`;

connection(URL);

app.listen(PORT,()=>console.log(`Server is succesfully running on port ${PORT}`));