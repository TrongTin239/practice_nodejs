const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");
const route = require("./routes/");
//static file (img,...)
app.use(express.static(path.join(__dirname, "public")));
// dùng middleware của expressjs
app.use(
  express.urlencoded({
    extended: true,
  })
);
// XMLHttpsRequest, fetch, axios
app.use(express.json());
// http logger
app.use(morgan("combined"));
//template engine
app.engine(
  ".hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resourse/views"));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
