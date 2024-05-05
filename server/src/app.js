import express from "express";
import constants from "./constants.js";
import cors from "cors";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import helpDeskRoutes from "./routes/helpDeskRoutes.js";

const { port } = constants;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/helpdesk', helpDeskRoutes);

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello-world" , (req,res) => {
  res.json("Hello World !")
})

app.listen(port, () => {
  return console.log(
    `OneGate API\nListening on port ${port}: http://localhost:${port}`
  );
});
