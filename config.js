const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
    "mongodb+srv://tenketem-zeradawit:OYlXjPI6xJcfepdG@cluster0.xzyzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;

