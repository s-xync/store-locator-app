const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// body parser
app.use(express.json());

// enable cors
app.use(cors());

//routes
app.use("/api/v1/stores", require("./routes/stores"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
