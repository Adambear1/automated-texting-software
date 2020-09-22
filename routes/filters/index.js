require("dotenv").config();
const router = require("express").Router();
const db = require("../../models");

router.get("/dateHigh", (req, res) => {
  db.Input.find({}, null, { sort: { date: -1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/dateLow", (req, res) => {
  db.Input.find({}, null, { sort: { date: 1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/typeHigh", (req, res) => {
  db.Input.find({}, null, { sort: { type: -1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/typeLow", (req, res) => {
  db.Input.find({}, null, { sort: { type: 1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/addressHigh", (req, res) => {
  db.Input.find({}, null, { sort: { address: -1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/addressLow", (req, res) => {
  db.Input.find({}, null, { sort: { address: 1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/nameHigh", (req, res) => {
  db.Input.find({}, null, { sort: { name: -1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/nameLow", (req, res) => {
  db.Input.find({}, null, { sort: { name: 1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
