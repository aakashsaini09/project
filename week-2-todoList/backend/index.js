const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(cors());
app.use(express.json())

const url = 'mongodb+srv://aakashsaini948585:xNsqiPIZbv1lbIjC@cluster0.rtkag.mongodb.net/';

// Define the schema and model only once
const todoSchema = new mongoose.Schema({
    title: String,
    des: String
});
const Todo = mongoose.model('todo', todoSchema);

app.post('/addtodo', addFunction)
app.get('/gettodo', getFunction)
app.post('/delete', deleteFunction)
app.post('/edit', editFunction)



async function editFunction(req, res) {
    try {
        const { id, title, des } = req.body;
        await mongoose.connect(url);
        const result = await Todo.findByIdAndUpdate(id); 
        
    }catch(error){
        console.log(error)
    }
}
async function deleteFunction(req, res) {
    try {
        const { id } = req.body;
        await mongoose.connect(url);
        const result = await Todo.findByIdAndDelete(id, {title: title, des: des});
        
        if (result) {
            res.send("Todo Updated Successfully!!");
        } else {
            res.status(404).send("Todo not found");
        }
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Error: " + error); // Send a proper status code
    }
}

async function getFunction(req, res) {
    try {
        await mongoose.connect(url);
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Error: " + error);  // Better to return a proper status code
    }
}
async function addFunction(req, res){
    try {   
        await mongoose.connect(url);
        const todo = new Todo({
            title: req.body.title,
            des: req.body.des
        });
        await todo.save();
        res.send("Todo added successfully");
    } catch (error) {
        console.log("Error: ", error)
        res.send("Error: ", error);
    }
}
app.listen(3000, function(){
    console.log(`Server is running in 3000 port`)
})