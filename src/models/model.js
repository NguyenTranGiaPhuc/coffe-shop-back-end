import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    genres: {
        type: [String]
    },
    area:{
        type: String
    }
});

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        minleght: 6,
        maxlenght: 20
    },
    email: {
        type: String,
        require: false
    },
    role: {
        type: String,
        require: false
    }
})

let Coffee = mongoose.model("Coffee", coffeeSchema);
let User = mongoose.model("User", userSchema);

module.exports = { Coffee, User };