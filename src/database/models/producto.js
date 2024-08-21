import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        unique: true
    },
    precio:{
        type: Number,
        required: true,
        min:50,
        max:20000
    },
})