import { model, Schema } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true,
    }
})

export const Todo = model("Todo", todoSchema);