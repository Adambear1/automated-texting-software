require("dotenv").config();
const router = require("express").Router();
const db = require("../../models");

router.post("/dateHigh", ({ body }, res) => {
  // Date
  if (body) {
    db.Input.find(body)
      .sort({ date: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/dateHighAll", (req, res) => {
  db.Input.find()
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.post("/dateLow", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ date: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/dateLowAll", (req, res) => {
  db.Input.find()
    .sort({ date: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
// Type
router.post("/typeHigh", ({ body }, res) => {
  if (body["type"] === "Cancelled" || body["type"] === "Expired") {
    db.Input.find({ $or: [{ type: "Cancelled" }, { type: "Expired" }] })
      .sort({ type: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
  db.Input.find(body)
    .sort({ type: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.get("/typeHighAll", (req, res) => {
  db.Input.find()
    .sort({ type: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.post("/typeLow", ({ body }, res) => {
  console.log(body);
  if (body["type"] === "Cancelled" || body["type"] === "Expired") {
    db.Input.find({ $or: [{ type: "Cancelled" }, { type: "Expired" }] })
      .sort({ type: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
  db.Input.find(body)
    .sort({ type: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.get("/typeLowAll", (req, res) => {
  db.Input.find()
    .sort({ type: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
// Amount
router.post("/amountHigh", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ amount: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/amountHighAll", (req, res) => {
  db.Input.find()
    .sort({ amount: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.post("/amountLow", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ amount: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/amountLowAll", (req, res) => {
  db.Input.find()
    .sort({ amount: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
// Address
router.post("/addressHigh", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ address: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/addressHighAll", (req, res) => {
  db.Input.find()
    .sort({ address: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.post("/addressLow", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ address: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/addressLowAll", (req, res) => {
  db.Input.find()
    .sort({ address: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
// city
router.post("/cityHigh", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ city: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/cityHighAll", (req, res) => {
  db.Input.find()
    .sort({ city: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.post("/cityLow", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ city: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/cityLowAll", (req, res) => {
  db.Input.find()
    .sort({ city: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
// county
router.post("/countyHigh", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ county: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/countyHighAll", (req, res) => {
  db.Input.find()
    .sort({ county: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.post("/countyLow", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ county: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/countyLowAll", (req, res) => {
  db.Input.find()
    .sort({ county: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
// Name
router.post("/nameHigh", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ name: -1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/nameHighAll", (req, res) => {
  db.Input.find()
    .sort({ name: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});
router.post("/nameLow", ({ body }, res) => {
  if (body) {
    db.Input.find(body)
      .sort({ name: 1 })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err.message });
      });
  }
});
router.get("/nameLowAll", (req, res) => {
  db.Input.find()
    .sort({ name: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
