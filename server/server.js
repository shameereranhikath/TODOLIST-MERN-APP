import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoute from './routes/todoRoute.js'


const app=express();
app.use(cors());
app.use(express.json());
// app.get('/api/',(req,res)=>{
//     res.send("I am from serverjs")
// })
 app.use('/api',todoRoute);
const port=process.env.PORT||5000;

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.k8nqe.mongodb.net/TODO-LIST-APP?retryWrites=true&w=majority',{useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>console.log("Database Connected Succesfully"))
.catch((err)=>console.log(err))



app.listen(port,()=>console.log(`Server started at http://localhost:${port}`));
