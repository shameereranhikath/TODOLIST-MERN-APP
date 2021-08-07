import mongoose from 'mongoose'

const todoSchema=new mongoose.Schema({

    title:{
       type: String,
       required :[true,'Please title is required']
    },
    description:{
        type:String,
        required :[true,'Please description is required']

    },
    
},{timestamps:true});


const todoModel=mongoose.model('Todo',todoSchema)


export default todoModel;