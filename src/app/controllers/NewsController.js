class NewsController {
  // get /news
  index(req, res) {
    res.render("news");
  }

  //get news/[slug]
  showDetail(req, res) {
    res.send("news details");
  }
}
module.exports = new NewsController();
