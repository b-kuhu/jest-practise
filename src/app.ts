import express, { Application, Request, Response, NextFunction } from "express";

import 'reflect-metadata';
import  AnimalRoutes from "./routes/user.routes";

const app: Application = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/animals',AnimalRoutes.getAnimal);
app.post("/animals", AnimalRoutes.createAnimal);



export default app;