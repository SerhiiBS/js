const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = Schema({
    firstName: {
        type: String,
            required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createDate: {
        type: Date,
        default: new Date(),
    }
},
    {
        versionKey: false,
    });

const TodoModel = mongoose.model("Todos", TodosSchema);
module.exports = TodoModel;
