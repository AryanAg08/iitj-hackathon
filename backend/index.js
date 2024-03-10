require("dotenv").config();
const express = require("express");
const app = express();
const mongo = require("mongoose");
const cookieParser = require("cookie-session");
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 5001;
const path = require("path");

mongo.connect(process.env.mongo).then(() => {
    console.log("connected to the database!!");
})

app.use(logger("dev"));

app.get("/", async (req, res) => {
    res.send("hello!! this is me!!");
});

app.use(express.json());

app.listen(PORT, () => console.log(`Running on Port http://localhost:${PORT}`));
