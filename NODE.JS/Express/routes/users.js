var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("你好，我是后端");
  console.log(req, res);
});

router.get("/list", function (req, res, next) {
  res.send({
    code: 0,
    data: [{ id: 1 }, { id: 2 }],
    msg: "success",
  });
});

module.exports = router;
