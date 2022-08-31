import express, { Application, Request, Response, NextFunction } from "express";

import 'reflect-metadata';
import  indexRoutes from "./routes/animal.routes";

const app: Application = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);

export default app;