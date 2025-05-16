const express = require("express");
const authRouter = require("./src/routes/auth");
const connectDB = require("./config/database");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", authRouter);

connectDB()
  .then(() => {
    console.log("database connection successfully .. ");
    app.listen(8080, () => console.log("server Running on post 8080"));
  })
  .catch((err) => console.log(err.message));
