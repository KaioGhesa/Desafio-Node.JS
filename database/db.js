const mongoose = require("mongoose");

const connectionToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://Kaio-Ghesa:Ka283516@todolist-yt.yavbq.mongodb.net/",
    )
    
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectionToDb;
