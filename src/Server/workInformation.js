const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workInformation = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", workInformation);
module.exports = Experience;
