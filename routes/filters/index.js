require("dotenv").config();
const router = require("express").Router();
const db = require("../../models");

router.post("/dateHigh", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ date: -1 })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  } else {
    db.Input.find({}, null, { sort: { date: -1 } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ err: err.message });
      });
    console.log(body);
  }
});
router.get("/dateLow", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ date: 1 })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  } else {
    db.Input.find({}, null, { sort: { date: 1 } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ err: err.message });
      });
    console.log(body);
  }
});
router.get("/typeHigh", ({ body }, res) => {
  db.Input.find({}, null, { sort: { type: -1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/typeLow", ({ body }, res) => {
  db.Input.find({}, null, { sort: { type: 1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/addressHigh", ({ body }, res) => {
  db.Input.find({}, null, { sort: { address: -1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/addressLow", ({ body }, res) => {
  db.Input.find({}, null, { sort: { address: 1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/nameHigh", ({ body }, res) => {
  db.Input.find({}, null, { sort: { name: -1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});
router.get("/nameLow", ({ body }, res) => {
  db.Input.find({}, null, { sort: { name: 1 } })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
