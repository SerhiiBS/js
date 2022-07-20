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

// app.put("/todos/:id", (req,res) => {
//     const id = +req.params.id;
//     const todo =
//     todos = todos.map((e) => (e.id === +id ? todo : e));
//     res.send(todo);
// });
//
// app.delete("/todos", (req,res)=> {
//     const id = req.params.id;
//     todos = todos.filter((e) => e.id !== +id);
//     response.send("Success");
// })

app.listen(PORT, ()=> {
    console.log(`SERVER START ${PORT}`);
})

