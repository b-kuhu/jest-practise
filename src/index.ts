import express from 'express';
import 'reflect-metadata';
import { myDataSource } from './appDataSource';
import AnimalController from './routes/user.routes';


myDataSource.initialize()
.then(()=>{

 const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

app.get('/animals',AnimalController.getAnimal);

const port =3000
app.listen(port,()=>{
    console.log(`app listening at ${port}`)
    
})
}               )
.catch((error)=>console.log(error));