require("dotenv").config();
const router = require("express").Router();
const db = require("../../models");

router.get("/cancelledExpired", (req, res) => {
  db.Input.find({ $or: [{ type: "Cancelled" }, { type: "Expired" }] })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/FSBO", (req, res) => {
  db.Input.find({ type: "FSBO" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/foreclosure", (req, res) => {
  db.Input.find({ type: "Foreclosure" })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
