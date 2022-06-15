const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {
        type: String,
        required: [true, "Este campo es requerido"],
        minlength: [10, "El primer argumento debe tener al menos 10 caracteres"]
    },
    punchline: {
        type: String,
        required: [true, "Este campo es requerido"],
        minlength: [3, "El segundo argumento debe tener al menos 3 caracteres"]
    },
},
{ timestamps: true }
);

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;