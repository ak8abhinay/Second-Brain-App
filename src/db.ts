import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://admin:nosqlmongodbadmin@cluster0.do2tvha.mongodb.net/Second-Brain-App")

const UserSchema = new Schema({
  username: {type: String, unique: true},
  password: String
})

export const UserModel = model("User", UserSchema);