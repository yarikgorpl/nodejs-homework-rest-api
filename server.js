// c1Gvu3A1QBm6uaDu
const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Yaroslav:c1Gvu3A1QBm6uaDu@cluster0.mhhk43t.mongodb.net/contacts_list?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
