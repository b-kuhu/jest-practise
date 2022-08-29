import express from "express";
import http from 'http';


import animalController from "./routes/user.routes";

const app = express();
const server=new http.Server(app);
server.listen(3000);

app.get('/animals',animalController.getAnimal);