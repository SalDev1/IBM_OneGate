import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const body = req.body;
  const id = "random-id-goes-here";
  console.log(body);
  res.json({ id: id, response: "Not Yet Implemented", content: body });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(console.log(`Fetching document for ID: ${id}`));
  res.json({ id: id, response: "Not Yet Implemented", content: {} });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(console.log(`Deleting document for ID: ${id}`));
  res.json({ id: id, response: "Not Yet Implemented" });
});

export default router;
