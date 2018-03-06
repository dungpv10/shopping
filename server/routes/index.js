const express = require("express");
// import ssr from "./ssr";
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static(path.join(__dirname, "../public")));

const apiRouter = require("./api/rest");

app.use("/api", apiRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Application is listening on port ${process.env.PORT || 3000}`);
});
