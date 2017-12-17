const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));

const apiRouter = require("./api");

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("Hello World listening on port 3000!");
});
