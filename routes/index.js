require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { email } = require("../utils/Nodemailer");
const { text } = require("../utils/Nexmo");

router.post("/", ({ body }, res) => {
  db.Input.create({
    body,
  })
    .then((data) => {
      console.log(data);
      res.json(data);
      email(data);
      text(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.get("/", ({ body }, res) => {
  db.Input.find({})
    .then((data) => {
      try {
        res.json(data);
      } catch (error) {
        res.status(400).json(error);
      }
    })
    .catch((error) => {
      res.status(500).json({ "Server Error": error });
    });
});

module.exports = router;
