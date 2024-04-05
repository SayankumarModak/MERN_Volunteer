import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "name must contain 3 characrters atleast"],
    maxLength: [11, "name cannot exced 11 characters"],
  },
  email: {
    type: String,
    required: true,
    // validate: [validator.isEmail, "provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "phone must contain 11 characrters atleast"],
    maxLength: [11, "name cannot exced 11 characters"],
  },
  message: {
    type: String,
    required: true,
  },
});
export const Message = mongoose.model("Message", messageSchema);
