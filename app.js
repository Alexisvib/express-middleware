const express = require("express");
const app = express();
const { setupRoutes } = require("./routes");

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Application level middleware here");
  next();
});

app.get("/", (req, res) => {
  res.send("Application Level Middleware unically");
});

setupRoutes(app);

app.listen(5000, () => console.log("listening to port 5000"));
