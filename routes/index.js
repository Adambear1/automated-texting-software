require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { email } = require("../utils/Nodemailer");
const { text } = require("../utils/Nexmo");

router.post("/", ({ body }, res) => {
  console.log(body);
  db.Input.create(body)
    .then((data) => {
      res.json(data);
      data.email && email(data);
      data.phoneNumber && text(data);
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

router.delete("/:id", (req, res) => {
  let params = req.params.id;
  db.Input.deleteOne({ _id: params })
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
