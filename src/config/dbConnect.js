import mongoose from "mongoose";

mongoose.connect("mongodb+srv://macarty_f:966108@expresslibrary.r1k6v.mongodb.net/library")
let db = mongoose.connection

export default db