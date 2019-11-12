const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)
let schema = {
    "username": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
}
let accountSchema = new Schema(schema, { collection: "Account", timestamps: true })
let connection = {}
connection.getCollection = () => {
    return mongoose.connect("mongodb://localhost:27017/userdb", { useNewUrlParser: true }).then((db) => {
        return db.model("Account", accountSchema)
    }).catch((err) => {
        console.log(err.message);
        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}
module.exports = connection