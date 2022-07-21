const express = require('express');
const mongoose = require("mongoose");
const TodoModel = require("./todo-models")
const app = express();
const PORT = 3005;

mongoose.connect("mongodb+srv://admin:admin@hwnodejs.fb1id.mongodb.net/?retryWrites=true&w=majority", {}, ()=> {
    console.log('DB IS ONLINE')
});

app.use(express.json(), express.urlencoded());

app.get("/", (request, response) => {
    response.send('empty')
})
app.get("/todos", (request, response) => {
    TodoModel.find().then( r => {
        response.send(r);
    })
})

app.post("/todos", (request, response) => {
    const todo = new TodoModel (request.body);
    todo.save().then( r => {
        response.send(r);
    }).catch(err => response.status(400).send(err))
})

app.put("/todos/:id", (req,res) => {
    const id = req.params.id;
    const todo = req.body;
    TodoModel.updateOne({ _id: id }, todo)
        .then((r) => TodoModel.findById(id))
        .then((r) => {
            // r["update"] = Date()
            res.send(r)
        }).catch(err => res.status(400).send(err))
});

app.delete("/todos", (req,res)=> {
    TodoModel.findByIdAndDelete(req.params.id).then(r => res.send(r)).catch(err => res.status(400).send(err))
})

app.listen(PORT, ()=> {
    console.log(`SERVER START ${PORT}`);
})

