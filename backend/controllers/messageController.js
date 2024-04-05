import { Message } from "../models/message.js";

export const postMessage = async (req, res, next) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(404).json({
      success: false,
      message: "please fill the full form",
    });
  }
  try {
    await Message.create({ name, email, phone, message });
    return res.status(201).json({
      success: true,
      message: " Message send successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );

      const errormessage = validationErrors.join(",");
      return res.status(400).json({
        success: false,
        message: errormessage,
      });
    }
    return res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};
