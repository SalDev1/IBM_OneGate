import express from "express";
import constants from "./constants";

const { port } = constants;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  return console.log(
    `OneGate API\nListening on port ${port}: http://localhost:${port}`
  );
});
