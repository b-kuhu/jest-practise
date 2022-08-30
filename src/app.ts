import express, { Application, Request, Response, NextFunction } from "express";

import  userRoutes from "./routes/user.routes";

const app: Application = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/animals',userRoutes.getAnimal);
app.post("/animals", userRoutes.createAnimal);



export default app;