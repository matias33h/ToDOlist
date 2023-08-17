import express  from "express";
import morgan from "morgan";
import path from 'path';
import mongoose from './src/database.js'
import cors from 'cors';

import taskRoutes from './src/routes/task.routes.js'

const app=express()



// settings
app.set('port',process.env.PORT || 3000)

// middelware 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
// Routes 
app.use('/api/tasks1',taskRoutes)



// start the server 
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})

