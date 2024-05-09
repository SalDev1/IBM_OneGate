import Query from "../model/queryModal.js";
import asyncHandler from "express-async-handler";

const getQueries = asyncHandler(async (req, res) => {
  const queries = await Query.find({});
  res.status(200).json(queries);
});

const addQuery = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    res.status(400).json({ msg: "Missing Fields" });
  }
  const newQuery = await Query.create({ name, email, subject, message });
  res.status(201).json(newQuery);
});

export { getQueries, addQuery };
