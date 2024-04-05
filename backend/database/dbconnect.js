import mongoose from "mongoose";

export const dbconnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Volunteering_project",
    })
    .then(() => {
      console.log("database connection successful");
    })
    .catch((error) => {
      console.log("some error occured", error);
    });
};
