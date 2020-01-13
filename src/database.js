const mongoose = require("mongoose");

const URI =
  "mongodb://oliver:oliver1023@ds135433.mlab.com:35433/heroku_x1pwcx56";

mongoose
  .connect(process.env.MONGODB_URI || URI)
  .then(db => console.log("db is connected"))
  .catch(err => console.error(err));

module.exports = mongoose;
