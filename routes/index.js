require("dotenv").config();
const router = require("express").Router();
const db = require("../models");

const { foreclosure } = require("../utils/Nodemailer/Foreclosure");
// const { text } = require("../utils/Nexmo");

router.post("/", ({ body }, res) => {
  console.log(body);
  db.Input.create(body)
    .then((data) => {
      res.json(data);
      if (data.email) {
        foreclosure(data);
      }
      // data.phoneNumber && text(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

router.post("/send", ({ body }, res) => {
  console.log(body);
  db.Input.findOne(body)
    .then((data) => {
      console.log(data);
      foreclosure(data);
    })
    .catch((error) => {
      console.log(error);
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
