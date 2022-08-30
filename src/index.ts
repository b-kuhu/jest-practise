import express from 'express';
import 'reflect-metadata';
import { myDataSource } from './appDataSource';
import app from './app';

myDataSource.initialize()
.then(()=>{

const port =3000
app.listen(port,()=>{
    console.log(`app listening at ${port}`)
    
})
}               )
.catch((error)=>console.log(error));