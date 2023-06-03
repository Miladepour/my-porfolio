const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");

router.post("/", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    company: req.body.company,
    contact: req.body.contact,
    email: req.body.email,
    message: req.body.message,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
