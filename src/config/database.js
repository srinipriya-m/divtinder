const mongose = require("mongoose");

const connectDB = async () => {
    await mongose.connect("mongodb+srv://srinivasanpri21:GZD1590WbnnA0eOD@cluster0.gbswj.mongodb.net/divTinder")
}

module.exports = { connectDB }


