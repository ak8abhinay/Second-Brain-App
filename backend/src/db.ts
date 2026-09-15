import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://admin:nosqlmongodbadmin@cluster0.do2tvha.mongodb.net/Second-Brain-App")

const UserSchema = new Schema({
  username: {type: String, unique: true},
  password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
  userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true}
})

const LinkSchema = new Schema({
  hash: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true, unique: true}
})

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);