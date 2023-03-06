const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");
const siteController = require("../app/controllers/SiteController");

//luôn để ở dưới cùng
// router.use("/", siteController.search);
router.use("/search", siteController.search);

router.use("/", siteController.index);

module.exports = router;
