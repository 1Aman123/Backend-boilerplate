// import express from "express"; 
import Express  from "express";
import * as env from "dotenv"
import { route } from "./routes";

import { createConnection } from "typeorm"
import AppDataSource from "./database/dataSource";


env.config();
const { PORT } = process.env;

// AppDataSource.initialize().then(async () => {
//     console.log('database connected');
    
// }).catch(error => console.log(error,'/error'))
// createConnection().then(()=>{
//     console.log("DB Connected");   
// }).catch((e) =>{
//     console.log("Error : " , e);  
// })
const app = Express()
app.use(Express.json());
app.get("/", (req, res) => {
    res.send("Hello form server")
})

route(app)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
