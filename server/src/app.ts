import express from "express";
import constants from "./constants";
import amenities from "./routes/amenities";

const { port } = constants;

const app = express();

app.use(express.json());
app.use("/amenities", amenities);

app.get("/", (req, res) => {
  res.send("OneGate API is Up!");
});

app.listen(port, () => {
  return console.log(
    `OneGate API\nListening on port ${port}: http://localhost:${port}`
  );
});
