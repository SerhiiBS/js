const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = Schema({
    title: String,
    body: {
        type: String,
        required: true,
    },
    isComplited: {
        type: Boolean,
        default: false,
    },
    createDate: {
        type: Date,
        default: new Date(),
    },
});

const TodoModel = mongoose.model("Todos", TodosSchema);
module.exports = TodoModel;
