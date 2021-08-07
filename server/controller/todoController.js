import todoModel from "../models/todoModel.js"


export const createTodo=async (req,res)=>{
    try
    {
        const todoitem=await todoModel.create(req.body)
        res.json(todoitem)
    }
    catch(error)
    {
        res.json(error)
    }
}


// Fetch all Todos
export const fetchAllTodos=async (req,res)=>{
    try
    {
        const todoitem=await todoModel.find()
        res.json(todoitem)
    }
    catch(error)
    {
        res.json(error)
    }
}

export const fetchAllTodo=async (req,res)=>{
    
    try
    {
        // console.log(req.params.id);
        const todoitem=await todoModel.findById(req.params.id)
        res.json(todoitem)
    }
    catch(error)
    {
        res.json(error)
    }
}

export const updateTodo=async (req,res)=>{
    
    try
    {
        // console.log(req.params.id);
        const todoitem=await todoModel.findByIdAndUpdate(req.params.id,{title:req.body.title,description:req.body.description},{
            new:true,
            runValidators:true
        })
        // console.log(todoitem);
        res.json(todoitem)
    }
    catch(error)
    {
        res.json(error)
    }
}

export const deleteTodo=async (req,res)=>{
    
    try
    {
        // console.log(req.params.id);
        const todoitem=await todoModel.findByIdAndRemove(req.params.id)
        //     ,{
        //     new:true,
        //     runValidators:true
        // }
      //  )
        res.json(todoitem)
    }
    catch(error)
    {
        res.json(error)
    }
}







// export creat