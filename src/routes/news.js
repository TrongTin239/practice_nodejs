const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.use("/:slug", newsController.showDetail);

//luôn để ở dưới cùng
router.use("/", newsController.index);

module.exports = router;
