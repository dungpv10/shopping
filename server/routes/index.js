const express = require("express");
// import ssr from "./ssr";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("vaoooo");
})

app.listen(3000, () => {
    console.log("Hello World listening on port 3000!");
});
