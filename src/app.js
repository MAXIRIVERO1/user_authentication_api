const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { conn } = require("./db/db.js");
const { router } = require("./routes/index.js");


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
    res.send("Backend server is online")
});

conn.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("Backend is up and running on port ==>", PORT)
    });
});