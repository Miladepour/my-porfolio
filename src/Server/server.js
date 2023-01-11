const express = require("express");
const app = express();
const port = 9090;
const mongoose = require("mongoose");
const Experience = require("./workInformation");

//connect to mongodb
const dbUrl =
  "mongodb+srv://admin:kDjMcYPZOwDLNFoZ@cluster0.hg1myfv.mongodb.net/portfolio?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUrl)
  .then((result) => {
    app.listen(port, () => {
      console.log("my application is now listen to port 9090...");
    });
  })
  .catch((err) => console.log(`err`));

const education = [
  { name: "CodeYourFuture", year: "2022-2023", location: "Manchester" },
  { name: "MongoDB", year: "2023", location: "Manchester" },
  { name: "Test", year: "2022-2023", location: "Sweden" },
];

app.post("/add-experience", (req, res) => {
  console.log(req.body);
  const experience = new Experience({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about this information",
  });
  experience
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/all-experience", (req, respond) => {
  Experience.find()
    .then((result) => {
      respond.send(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (request, respond) => {
  console.log("hello this your first API req");
  let serachQuery = request.query.search;
  respond.send("this the respond form ./ page" + serachQuery);
});

app.get("/tester", (request, respond) => {
  console.log("Received a request to the /tester endpoint");
  respond.send({ education });
});
